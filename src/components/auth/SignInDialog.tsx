'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useAuthModalChange from '@/hooks/useAuthModalChange'
import axiosClient from '@/services/axiosClient'
import { AuthMode } from '@/types'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function SignInDialog() {
  const searchParams = useSearchParams()
  const authMode = searchParams?.get('auth') as AuthMode
  const { handleModeChange } = useAuthModalChange()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const signInMutation = useMutation({
    mutationFn: (data: FormValues) => axiosClient.post('/auth/signin', data),
    onSuccess: (token) => {
      if (token) {
        toast.success('Successfully signed in!')
        handleModeChange(null)
        form.reset()
      }
    },
    onError: (error) => {
      console.error('Sign in error:', error)
      toast.error('Failed to sign in. Please try again.')
    },
  })

  const onSubmit = (data: FormValues) => {
    signInMutation.mutate(data)
  }

  return (
    <Dialog
      open={authMode === 'signIn'}
      onOpenChange={(open) => {
        if (!open) {
          handleModeChange(null)
        } else {
          handleModeChange('signIn')
        }
      }}
    >
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Welcome Back!</DialogTitle>
          <DialogDescription asChild>
            <div className='mt-2 text-sm'>
              Don&apos;t have an account yet?{' '}
              <a
                href='/signup'
                className='text-primary hover:text-primary/80 font-medium underline'
              >
                Sign Up Now
              </a>
            </div>
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4 pt-2'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Email Address'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type='password' placeholder='Password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='submit'
              disabled={signInMutation.isPending}
              className='mt-2 w-full'
            >
              {signInMutation.isPending ? 'Signing In...' : 'Sign In'}
            </Button>

            <DialogFooter className='pt-2 sm:justify-between'>
              <FormField
                control={form.control}
                name='rememberMe'
                render={({ field }) => (
                  <FormItem className='flex'>
                    <FormControl>
                      <Checkbox
                        id='remember'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className='border-foreground'
                      />
                    </FormControl>
                    <Label htmlFor='remember' className='text-sm font-normal'>
                      Remember me
                    </Label>
                  </FormItem>
                )}
              />
              <Link
                href='/forgot-password'
                className='text-primary text-sm font-medium hover:underline'
                // onClick={() =>
                //   toast.info('Password reset functionality coming soon')
                // }
              >
                Forgot password?
              </Link>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

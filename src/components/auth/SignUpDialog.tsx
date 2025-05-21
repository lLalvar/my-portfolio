'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import useAuthModalChange from '@/hooks/useAuthModalChange'
import axiosClient from '@/services/axiosClient'
import { AuthMode } from '@/types'

const formSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Please enter a valid email address'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof formSchema>

export default function SignUpDialog() {
  const searchParams = useSearchParams()
  const authMode = searchParams?.get('auth') as AuthMode
  const { handleModeChange } = useAuthModalChange()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  })

  const signUpMutation = useMutation({
    mutationFn: (data: FormValues) => axiosClient.post('/auth/signup', data),
    onSuccess: (token) => {
      if (token) {
        toast.success('Successfully signed up!')
        handleModeChange(null)
        form.reset()
      }
    },
    onError: (error) => {
      console.error('Sign up error:', error)
      toast.error('Failed to sign up. Please try again.')
    },
  })

  const onSubmit = (data: FormValues) => {
    signUpMutation.mutate(data)
  }

  return (
    <Dialog
      open={authMode === 'signUp'}
      onOpenChange={(open) => {
        if (!open) {
          handleModeChange(null)
        } else {
          handleModeChange('signUp')
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant='outline'>Sign Up</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-xl'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Create Account</DialogTitle>
          <DialogDescription asChild>
            <div className='mt-2 text-sm'>
              No Lock in contract, Cancel anytime. Start with a few clicks
            </div>
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4 pt-2'
          >
            <div className='flex gap-4'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input placeholder='First Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input placeholder='Last Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Company Email Address'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phoneNumber'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type='tel' placeholder='Phone Number' {...field} />
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
                    <div className='relative'>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        {...field}
                        className='pr-10'
                      />
                      <button
                        type='button'
                        className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-400'
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className='h-5 w-5' />
                        ) : (
                          <Eye className='h-5 w-5' />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Re Enter Password'
                        {...field}
                        className='pr-10'
                      />
                      <button
                        type='button'
                        className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-400'
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className='h-5 w-5' />
                        ) : (
                          <Eye className='h-5 w-5' />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='submit'
              disabled={signUpMutation.isPending}
              className='mt-2 w-full'
            >
              {signUpMutation.isPending
                ? 'Creating Account...'
                : 'Create Free Account'}
            </Button>

            <div className='pt-2'>
              <p className='text-sm'>
                Already have an account?{' '}
                <Link
                  href='/?auth=signIn'
                  className='text-primary text-sm font-medium hover:underline'
                  onClick={(e) => {
                    e.preventDefault()
                    handleModeChange('signIn')
                  }}
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

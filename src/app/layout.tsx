import JsonLdScript from '@/components/JsonLdScript'
import { ThemeProvider } from '@/components/theme-provider'
import { generateSiteJsonLd } from '@/utils/seo/jsonLd'
import { mainMetadata } from '@/utils/seo/metadata'

import { geistMono, geistSans } from './fonts'
import './globals.css'

export const metadata = mainMetadata()

const jsonLd = generateSiteJsonLd()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <JsonLdScript jsonLd={jsonLd} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

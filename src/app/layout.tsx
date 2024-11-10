import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Business Finance Calculator',
  description:
    'Calculate and allocate your business revenue across different accounts',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

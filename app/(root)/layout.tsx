import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'

import Topbar from '@/Components/shared/Topbar'
import LeftSidebar from '@/Components/shared/LeftSidebar'
import RightSidebar from '@/Components/shared/RightSidebar'
import Bottombar from '@/Components/shared/Bottombar'


export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >

          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />

            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>

            <RightSidebar />
          </main>

          <Bottombar />

        </body>
      </html>
    </ClerkProvider>

  )
}

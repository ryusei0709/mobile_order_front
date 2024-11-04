import RootLayout from "@/app/layout"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Test1RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        header1
      </header>
      {children}
    </>
  )
}

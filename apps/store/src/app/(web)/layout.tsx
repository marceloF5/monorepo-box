import { Footer, Navigation } from "@repo/modules"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web",
  description: "Landpage for the web.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="relative flex-1 container px-8 md:px-16 mb-10">
        <Navigation />
        {children}
      </div>
      <Footer />
    </>
  )
}

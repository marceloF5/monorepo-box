import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Home of the dashboard.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return { children }
}

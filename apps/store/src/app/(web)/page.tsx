import { Benefits, Features, Hero } from "@repo/modules"

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10">
      <Hero />
      <Features />
      <Benefits />
    </main>
  )
}

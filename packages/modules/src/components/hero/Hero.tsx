import { Button } from "@repo/ui"

const Hero = () => {
  return (
    <section className="items-center flex py-8 h-[60vh] w-full">
      <div className="justify-between flex flex-col w-full items-center gap-12">
        <h1 className="scroll-m-20 text-5xl tracking-tight lg:text-6xl text-center">
          Auth for modern <br /> applications.
        </h1>
        <p className="text-2xl font-light text-center">
          Powerful user authentication that <br /> integrates in minutes. Free
          up to 10,500 MAU.
        </p>
        <div className="flex gap-4">
          <Button>Start for free</Button>
          <Button variant={"ghost"}>Talk to us</Button>
        </div>
      </div>
    </section>
  )
}

export { Hero }

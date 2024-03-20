import { Button } from "@repo/ui"

const Benefits = () => {
  return (
    <section className="items-center flex h-[60vh] w-full">
      <div className="justify-between grid grid-cols-2 flex-col h-full w-full items-center gap-6">
        <div className="justify-center flex flex-col w-full items-center gap-12">
          <h1 className="scroll-m-20 text-5xl tracking-tight lg:text-6xl text-center">
            Benefits using our
            <br /> applications.
          </h1>
          <p className="text-2xl font-light text-center">
            Powerful user authentication that <br /> integrates in minutes. Free up to 10,500 MAU.
          </p>
          <div className="flex gap-4">
            <Button>Start for free</Button>
            <Button variant={"ghost"}>Talk to us</Button>
          </div>
        </div>

        <div className="w-full bg-gray-200 h-full py-5 rounded-xl" />
      </div>
    </section>
  )
}

export { Benefits }

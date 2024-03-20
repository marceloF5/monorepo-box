import { Button } from "@repo/ui"
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="relative flex py-8 w-full items-center justify-between">
      <h1 className="absolute left-0 font-extralight text-2xl">Sky Sift</h1>

      <ul className="justify-center w-full hidden md:flex">
        <li>
          <Button variant="ghost">Product</Button>
        </li>
        <li>
          <Button variant="ghost">Resources</Button>
        </li>
        <li>
          <Button variant="ghost">Customers</Button>
        </li>
        <li>
          <Button variant="ghost">Pricing</Button>
        </li>
      </ul>

      <div className="absolute right-0 md:flex gap-3 items-center hidden">
        <Button variant="ghost" asChild>
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>
        <Button asChild>
          <Link href={"/sign-up"}>Sign Up</Link>
        </Button>
      </div>
      <div className="md:hidden w-full flex justify-end">
        <Button variant="ghost">Menu</Button>
      </div>
    </nav>
  )
}

export { Navigation }

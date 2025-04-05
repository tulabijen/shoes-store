import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggler";
import {EllipsisVertical, ShoppingCart, User2Icon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
            <ModeToggle />
            <Button asChild variant="ghost">
                <Link href="/cart">
                    <ShoppingCart /> Cart
                </Link>
            </Button>
            <Button asChild>
            <Link href="/signin">
             <User2Icon /> Sign in
            </Link>
          </Button>
        </nav>
        <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col item-start">
                <SheetHeader className="flex flex-col item-start">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription></SheetDescription>
                </SheetHeader>
                <ModeToggle />
                <div className="flex flex-col item-start space-y-2">
                    <Button asChild variant="ghost" className="justify-start">
                        <Link href="/cart">
                            <ShoppingCart /> Cart
                        </Link>
                    </Button>
                    <Button asChild className="justify-start">
                        <Link href="/signin">
                            <User2Icon /> Sign in
                        </Link>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
        </nav>
    </div>
  )
}
export default Menu;
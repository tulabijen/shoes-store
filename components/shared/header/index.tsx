import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image src="/images/logo.png" alt={`${APP_NAME} logo `} height={48} width={48} priority={true} />
          </Link>
          <span className="hidden lg:block text-2xl font-bold ml-3">{APP_NAME}</span>
        </div>
        <Menu />
      </div>
    </header>
  )
}
export default Header;
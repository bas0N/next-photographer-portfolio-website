import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const router = useRouter();

  const handleNav = () => {
    setShowNav(!showNav);
    setShowLogo(!showLogo);
  };
  console.log(router.pathname);
  return (
    <nav className=" flex justify-between ">
      <div
        className={`flex flex-row justify-between w-full items-center px-4 h-20 absolute  ${
          router.pathname === "/"
            ? "text-white absolute z-10"
            : "text-black relative"
        }`}
      >
        <div>
          <Link href="/">
            <h1 className={showLogo ? "px-4 " : "hidden"}>NOWAK.</h1>
          </Link>
        </div>
        <ul className=" hidden md:flex ">
          <Link href="/">
            <li>GŁÓWNA</li>
          </Link>
          <Link href="/stories">
            <li>HISTORIE</li>
          </Link>
          <Link href="/contact">
            <li>KONTAKT</li>
          </Link>
          <Link href="/about">
            <li>O MNIE</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden ">
          {showNav ? (
            <AiOutlineClose className="text-2xl text-black" size={20} />
          ) : (
            <HiOutlineMenuAlt4 className="text-2xl text-black" size={20} />
          )}
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          showNav
            ? "absolute z-10  text-black l-0 t-0 w-full bg-gray-100/90 px-4 py-7  flex flex-col"
            : "hidden"
        }
      >
        <ul>
          <h1>MENU</h1>
          <Link href="/">
            <li className="border-b">GŁÓWNA</li>
          </Link>
          <Link href="/stories">
            <li className="border-b">HISTORIE</li>
          </Link>
          <Link href="/contact">
            <li className="border-b">KONTAKT</li>
          </Link>
          <Link href="/about">
            <li className="border-b">O MNIE</li>
          </Link>

          <div className="flex mt-4 gap-2">
            <Link href="/about">
              <FaFacebook className="text-2xl text-black" />
            </Link>
            <Link href="/about">
              <FaInstagram className="text-2xl text-black" />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

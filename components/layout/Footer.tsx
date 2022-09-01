import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
function Footer() {
  return (
    <div className=" bg-black relative text-white">
      <div className="max-w-[1240px] flex flex-col mx-auto py-8">
        <div className="flex flex-col md:flex-row mx-auto md:mx-0 justify-around">
          <div className="flex flex-col">
            <h2>NOWAK.</h2>
            <p>Skonaktuj się ze mną:</p>
            <div className="flex pt-8 pb-4 items-center">
              <img
                className="rounded-full w-20"
                src="https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png"
              />
              <div className=" flex flex-col px-6">
                <h3 className="font-bold">Krzysztof Nowak</h3>
                <p>Fotograf, montażysta</p>
                <div className="flex mt-3">
                  <FaFacebook className="w-7 h-7 mr-4" />
                  <FaInstagram className="w-7 h-7 mr-4" />
                </div>
              </div>
            </div>
            <p>telefon: +48 123 456 789</p>
            <p>email: krzychun@gmail.com</p>
          </div>
          <div className=" hidden md:flex flex-col">
            <h2 className="ml-3">Sprawdź</h2>
            <ul className="space-y-0 space-x-0 mr-4">
              <Link href="/">
                <li>GŁÓWNA</li>
              </Link>
              <Link href="/stories">
                <li>HISTORIE</li>
              </Link>
              <Link href="/offer">
                <li>KONTAKT</li>
              </Link>
              <Link href="/about">
                <li>O MNIE</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto flex justify-center mt-8  relative">
        <p>{new Date().getFullYear()} Designed by Wojciech Basiński</p>
      </div>
    </div>
  );
}

export default Footer;

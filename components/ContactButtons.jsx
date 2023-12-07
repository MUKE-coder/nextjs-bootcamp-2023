import Link from "next/link";
import { FaDribbble, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function ContactButtons() {
  //Traditional JS WEBSITE
  // CDN LINKS => NPM PACKAGES
  //NPM PACKAGES =

  return (
    <div className="flex items-center gap-4">
      <Link className="rounded-full bg-black text-white py-2.5 px-10" href="#">
        Contact Me
      </Link>
      <Link
        href="#"
        className="group bg-white inline-flex items-center justify-center w-[48px] h-[48px] rounded-full hover:bg-pink-400 transition-all duration-400"
      >
        <FaDribbble className="w-6 h-6 group-hover:text-white" />
      </Link>
      <Link
        href="#"
        className="group bg-white inline-flex items-center justify-center w-[48px] h-[48px] rounded-full hover:bg-pink-400 transition-all duration-400"
      >
        <FaInstagram className="w-6 h-6 group-hover:text-white" />
      </Link>
      <Link
        href="#"
        className="group bg-white inline-flex items-center justify-center w-[48px] h-[48px] rounded-full hover:bg-blue-600 transition-all duration-400"
      >
        <FaTwitter className="w-6 h-6 group-hover:text-white" />
      </Link>
      <Link
        href="#"
        className="group bg-white inline-flex items-center justify-center w-[48px] h-[48px] rounded-full hover:bg-pink-400 transition-all duration-400"
      >
        <FaLinkedin className="w-6 h-6 group-hover:text-white" />
      </Link>
    </div>
  );
}

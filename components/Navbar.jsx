import Link from "next/link";

/*
1) Create the Components folder
2) Create a component and fileName must start with Caps
3) Create and export the function as a component
4) Use the Component in any Place of our choice

SPA => Single Page Applications
PWA => Progressive Web Application
*/
export default function Navbar() {
  return (
    <div className="flex py-4  justify-between">
      <Link href="/">JB WEB DEV</Link>
      <div className="flex items-center gap-8">
        <Link href="/about">About </Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

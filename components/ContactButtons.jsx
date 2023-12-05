import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="">
      <Link className="rounded-full bg-black text-white py-4 px-10" href="#">
        Contact Me
      </Link>
      <Link href="#">Contact Me</Link>
      <Link href="#">Contact Me</Link>
      <Link href="#">Contact Me</Link>
      <Link href="#">Contact Me</Link>
    </div>
  );
}

import Image from "next/image";
import ContactButtons from "./ContactButtons";
import profile from "../public/profile.jpg";
export default function Hero() {
  // Next Image=> Inbult image Optimsation
  // => Managing the sizes

  return (
    <div className="flex gap-8 ">
      <div className="rounded-3xl w-2/3 hero-bg overflow-hidden p-10 leading-8 flex flex-col justify-between">
        <h2 className="text-5xl font-semibold">
          Hello, I’m JB Web Dev, a Fullstack Dev With 4 years of experience.
        </h2>

        <p className="py-4">
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <div className="">
          <ContactButtons />
        </div>
      </div>

      <div className="w-1/3 ">
        <Image
          src={profile}
          className="rounded-3xl"
          // width={1200}
          // height={1800}
        />
        {/* <img
          className="rounded-3xl"
          src="https://www.aboghanbari.com/static/me-e1cc23f413b201636eecefd46a8abdc8.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
}

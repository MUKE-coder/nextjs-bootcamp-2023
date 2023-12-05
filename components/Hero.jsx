import ContactButtons from "./ContactButtons";

export default function Hero() {
  return (
    <div className="flex gap-8">
      <div className="rounded-3xl w-2/3 bg-gray-300  overflow-hidden p-10 leading-8 flex flex-col justify-between">
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

      <div className="w-1/3">
        <img
          src="/profile.jpg"
          alt="jb profile image"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}

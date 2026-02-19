import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex h-full w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center ">
        {/* CONTAINER 1 START */}
        <div className="container-1 gap-6 flex flex-col">
          {/* REPORT OF GRADES HEADER */}
          <h1 className="w-full text-3xl font-bold tracking-tight text-black dark:text-zinc-50 items-center text-center">
            Report of Grades
          </h1>
          <p className="w-full text-sm font-normal text-center">This portal is for the viewing of the grade report</p>

          {/* INPUT FIELDS */}
          <div className="flex flex-col gap-4 my-2">
            <input type="text" name="email_ad" className="py-2 px-2 border border-gray-700 rounded-lg text-white" placeholder="Email Address" />
            <input type="text" name="password" className="py-2 px-2 border border-gray-700 rounded-lg text-white" placeholder="Password" />
          </div>
          {/* BUTTON CONTAINER */}
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={12}
                height={12}
              />
              Login
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full px-2 transition-colors hover:border-transparent hover:text-amber-300 md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Signup
            </a>
          </div>
        </div>
        {/* CONTAINER 1 END */}
      </main>
    </div>
  );
}

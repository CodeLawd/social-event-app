import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Event</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#EDE5FF] h-screen flex items-center justify-center overflow-y-hidden">
        <div className="flex items-center flex-col-reverse lg:flex-row max-w-[80%] py-44 md:max-w-[60%] lg:max-w-[80%] mx-auto text-center">
          <div className="lg:h-[80vh]">
            <img src="/banner.png" className="h-[50%] lg:h-full" />
            <Link href="/create">
              <a className="lg:hidden bg-gradient-to-r from-primary-purple via-purple-500 to-primary-pink rounded-lg py-3 px-14 text-[#fff] mt-10">
                🎉 Create my event
              </a>
            </Link>
          </div>
          <div className="flex flex-col lg:items-end lg:justify-center lg:text-right">
            <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-none text-primary font-bold">
              Imagine if <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] via-purple-500 to-[#E87BF8]">
                Snapchat
              </span>
              <br /> had events.
            </h1>

            <p className="text-[16px] md:text-[20px] lg:text-[24px] font-light lg:w-[70%] leading-none mt-5 text-[#4F4F4F]">
              Easily host and share events with your friends across any social media.
            </p>
            <Link href="/create">
              <a className="hidden lg:block bg-gradient-to-r from-[#8456EC] via-purple-500 to-[#E87BF8] rounded-lg py-3 px-14 text-[#fff] mt-10">
                🎉 Create my event
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

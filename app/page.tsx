import { Button } from "@/components/ui/button";
import {
  InboxIcon,
  LockIcon,
  MergeIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import Image from "next/image";
import yourFirstImage from "/public/bt-launch.png"; // import your images
import yourSecondImage from "/public/pace-launch.png";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-end">
      <div className="flex flex-row w-full">
        <div className="relative overflow-hidden w-1/2 h-64">
          <Image
            src={yourFirstImage}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className="relative overflow-hidden w-1/2 h-64">
          <Image
            src={yourSecondImage}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </div>
  );
  return (
    <div key="1" className="flex flex-col min-h-screen bg-white text-black">
      <header className="w-full bg-white py-4 px-6 flex items-center border-b border-gray-200">
        <img
          alt="Logo"
          className="h-6 w-auto"
          height="32"
          src="/bt-wordmark.png"
          width="32"
        />
      </header>
      <main>
        <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24 bg-white">
          <div className="container">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-[#FCB338]">
                    BuzzTender
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-900 mx-auto">
                    Connect. Compete. Repeat.
                  </p>
                </div>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-gray-800 p-4 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                      <img
                        alt="BuzzTender"
                        className="h-16 w-16 rounded-lg"
                        src="/bt-app-icon.png"
                      />
                      <h2 className="text-xl font-bold text-black">
                        BuzzTender
                      </h2>
                      <div className="grid grid-cols-2 gap-8">
                        <Button variant={"outline"} asChild>
                          <Link href="/login">App Store</Link>
                        </Button>
                        <Button variant={"outline"} asChild>
                          <Link href="/login">Google Play</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <img
                        alt="BuzzTender Screenshot"
                        className="w-full"
                        src="/bt-launch.png"
                      />
                    </div>
                  </div>
                  <div className="border-gray-800 p-4 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                      <img
                        alt="BT Pace"
                        className="h-16 w-16 rounded-lg"
                        src="/pace-app-icon.png"
                      />
                      <h2 className="text-xl font-bold text-black">BT Pace</h2>
                      <div className="grid grid-cols-2 gap-8">
                        <Button variant={"outline"} asChild>
                          <Link href="/login">App Store</Link>
                        </Button>
                        <Button variant={"outline"} asChild>
                          <Link href="/login">Google Play</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <img
                        alt="App 2 Screenshot"
                        className="w-full"
                        src="/pace-launch.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-full space-y-4 mx-auto">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                      <div className="p-2 bg-black bg-opacity-50 rounded-full">
                        <MergeIcon className="text-black h-6 w-6 mb-2 opacity-75" />
                      </div>
                      <h2 className="text-xl font-bold text-black">
                        Training and Team Building
                      </h2>
                      <p className="text-gray-900 dark:text-gray-800">
                        BT's platform brings athletes together within a team to
                        compete in challenges, enhancing their skills and
                        endurance. This feature is perfect for coaches to set up
                        motivating challenges and manage their athletes, pushing
                        them to reach the top of the leaderboard.
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                      <div className="p-2 bg-black bg-opacity-50 rounded-full">
                        <MergeIcon className="text-black h-6 w-6 mb-2 opacity-75" />
                      </div>
                      <h2 className="text-xl font-bold text-black">
                        Virtual Seasons
                      </h2>
                      <p className="text-gray-900 dark:text-gray-800">
                        BT's virtual seasons foster healthy competition
                        nationwide, allowing athletes to gauge their performance
                        against peers through challenges specific to each sport.
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                      <div className="p-2 bg-black bg-opacity-50 rounded-full">
                        <MergeIcon className="text-black h-6 w-6 mb-2 opacity-75" />
                      </div>
                      <h2 className="text-xl font-bold text-black">
                        BT Fundraising
                      </h2>
                      <p className="text-gray-900 dark:text-gray-800">
                        BT empowers fundraising efforts through entertaining
                        competitions. Collaborating with fundraisers,
                        organizations, teams, and causes, BT designs challenges
                        that raise funds and engage participants.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                      <div className="p-2 bg-black bg-opacity-50 rounded-full">
                        <MergeIcon className="text-black h-6 w-6 mb-2 opacity-75" />
                      </div>
                      <h2 className="text-xl font-bold text-black">
                        BT Challenges
                      </h2>
                      <p className="text-gray-900 dark:text-gray-800">
                        BT offers open gameplay for users to participate in
                        challenges set up by BT, groups, or individual users for
                        fun.
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                      <div className="p-2 bg-black bg-opacity-50 rounded-full">
                        <MergeIcon className="text-black h-6 w-6 mb-2 opacity-75" />
                      </div>
                      <h2 className="text-xl font-bold text-black">
                        BT Philanthropy
                      </h2>
                      <p className="text-gray-900 dark:text-gray-800">
                        BT supports causes by raising awareness and funds
                        through engaging and fun competitions. Partnering with
                        philanthropy organizations and corporate sponsors, BT
                        creates challenges that align with the cause and drive
                        community engagement.
                      </p>
                    </div>
                  </div>
                </div>
                <section className="w-full max-w-3xl mx-auto py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
                  <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-[#FCB338] text-center">
                      Meet the Team
                    </h2>
                    <div className="mt-8">
                      <img
                        alt="Team Photo"
                        className="w-full"
                        height="300"
                        src="/MeetTheTeam.png"
                        style={{
                          aspectRatio: "600/300",
                          objectFit: "cover",
                        }}
                        width="600"
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                      <div className="border-gray-300 p-4 rounded-lg">
                        <div className="flex flex-col items-center space-y-2">
                          <h2 className="text-xl font-bold text-black">
                            Jake Hill
                          </h2>
                          <p className="text-gray-700 dark:text-gray-900">
                            Lead Software Engineer
                          </p>
                          <Button variant={"outline"} asChild>
                            <Link
                              className="text-black flex items-center space-x-2"
                              href="#"
                            >
                              <LinkedinIcon className="h-6 w-6" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className="border-gray-300 p-4 rounded-lg">
                        <div className="flex flex-col items-center space-y-2">
                          <h2 className="text-xl font-bold text-black">
                            Matt Schleder
                          </h2>
                          <p className="text-gray-700 dark:text-gray-900">
                            CTO & Founder
                          </p>
                          <Button variant={"outline"} asChild>
                            <Link
                              className="text-black flex items-center space-x-2"
                              href="#"
                            >
                              <LinkedinIcon className="h-6 w-6" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className="border-gray-300 p-4 rounded-lg">
                        <div className="flex flex-col items-center space-y-2">
                          <h2 className="text-xl font-bold text-black">
                            Dave Rowe
                          </h2>
                          <p className="text-gray-700 dark:text-gray-900">
                            CFO & Founder
                          </p>
                          <Button variant={"outline"} asChild>
                            <Link
                              className="text-black flex items-center space-x-2"
                              href="#"
                            >
                              <LinkedinIcon className="h-6 w-6" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-8">
                      <div className="border-gray-300 p-4 rounded-lg">
                        <div className="flex flex-col items-center space-y-2">
                          <h2 className="text-xl font-bold text-black">
                            Dani Rowe
                          </h2>
                          <p className="text-gray-700 dark:text-gray-900">
                            Brand Ambassador
                          </p>
                          <Button variant={"outline"} asChild>
                            <Link
                              className="text-black flex items-center space-x-2"
                              href="#"
                            >
                              <LinkedinIcon className="h-6 w-6" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className="border-gray-300 p-4 rounded-lg">
                        <div className="flex flex-col items-center space-y-2">
                          <h2 className="text-xl font-bold text-black">
                            Allie Schleder
                          </h2>
                          <p className="text-gray-700 dark:text-gray-900">
                            CEO & Founder
                          </p>
                          <Button variant={"outline"} asChild>
                            <Link
                              className="text-black flex items-center space-x-2"
                              href="#"
                            >
                              <LinkedinIcon className="h-6 w-6" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-white py-4 px-6 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200">
        <div className="flex space-x-4 mb-2 md:mb-0">
          <Link className="text-gray-500" href="#">
            About Us
          </Link>
          <Link className="text-gray-500" href="#">
            Legal
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link className="text-gray-500" href="#">
            <YoutubeIcon className="h-6 w-6" />
          </Link>
          <Link className="text-gray-500" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link className="text-gray-500" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-gray-500 mt-2 md:mt-0">
          © 2024 Our Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function InstagramIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

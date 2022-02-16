import React from "react";
import {
  GithubLogo,
  TwitterLogo,
  PencilLine,
  LinkedinLogo,
} from "phosphor-react";
import LogoSVG from "./LogoSVG";

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
          <LogoSVG />

            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Mutual_Transfer_Portal
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              This is not a real jobs website. The author of this website does
              not think of those who are thinking of a job place, 
              nor do think making a transfer is easy.
            </p>
            <p className="mt-4 text-sm text-gray-800">
            In fact, This is the prototype for the author's mini-project. 
            If this website has caught your eye, do get in touch.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="md:pt-5 flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:+9400-000-0000"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +9400-000-0000
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="ruchithavirashan@gmail.com"
              aria-label="My email"
              title="My email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              ruchithavirashan@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Location:</p>
            <a
              href="https://www.google.lk/maps/place/Polonnaruwa/@7.9341074,80.9431382,12z/data=!3m1!4b1!4m5!3m4!1s0x3afb44ba3b16ce27:0xc34997a2b3032b7c!8m2!3d7.9403384!4d81.0187984"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Polonnaruwa/Sri Lanka
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="md:pt-5 flex items-center mt-1 space-x-3">
            <a href="https://github.com/RuchithaVirashan">
              <GithubLogo
                className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                size={24}
              />
            </a>
            <a href="https://twitter.com/ruchivirash2">
              <TwitterLogo
                className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                size={24}
              />
            </a>
            <a href="https://dev.to/ruchithavirashan">
              <PencilLine
                className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                size={24}
              />
            </a>
            <a href="https://www.linkedin.com/in/ruchitha-virashan-68a757166/">
              <LinkedinLogo
                className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                size={24}
              />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            I write code and I write about code. Occasionally, I make a joke
            too. Follow me on my socials.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2022. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/missing"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/missing"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/missing"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

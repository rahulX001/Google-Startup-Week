"use client";

import React, { FunctionComponent } from "react";
import { Icons } from "../icons";
import { Button } from "@/components/ui/button";
// import Google from "@/public/assets/GoogleForStartups_Horizontal (1) (1).png";
// import gd from "@/public/assets/GD_REGISTRY_POWERED_BY_LOCKUP_3_CMYK_COLOR (2) (1).png";
// import brex from "@/public/assets/Brex Black _ White Logo.png";
import Image from "next/image";
import Link from "next/link";
//@ts-ignore

import { signIn, signOut, useSession } from "next-auth/react";

interface OwnProps {}

type Props = OwnProps;

const Hero: FunctionComponent<Props> = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">
            Flowbite is out! See what&apos;s new
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Innovator to entrepreneur
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          AUGUST 7-9, 2023, IIT BHU Varanasi
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link href={"/pricing"}>
            <Button size={"lg"}>
              <Icons.ticket className={"h-4 w-4 mr-2"} />
              Get Ticket
            </Button>
          </Link>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            GLOBAL SPONSORS
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              {/*<Image src={Google} alt={"Google"} height={200} width={200} />*/}
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              {/*<Image*/}
              {/*  src={gd}*/}
              {/*  alt={"GD"}*/}
              {/*  height={200}*/}
              {/*  width={200}*/}
              {/*  className={"p-4"}*/}
              {/*/>*/}
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              {/*<Image*/}
              {/*  src={brex}*/}
              {/*  alt={"Brex"}*/}
              {/*  height={200}*/}
              {/*  width={200}*/}
              {/*  className={"p-4"}*/}
              {/*/>*/}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import HomeHeader from "@/components/HomeHeader";
import TeamDeatils from "@/components/TeamDetails";
import { SlideInFromLeft } from "@/components/animations/animations";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import LoadingSkeleton from "../../loading";
import getData from "@/app/utils/getData";
import { useFetchDataOnClient } from "../../../../utils/useFetchDataOnClient";
type Props = {};

const doctorsss = [
  {
    name: "John Caret 01",
    img: "/Assets/doc images/doc-1.webp",
    professional_qualifications: ["pro 1 ", "pro 2"],
    Certification_Qulaifications: ["qualification name 1"],
    Hobbies: [],
    about_yourself:
      "Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm. Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm.",
    meaning:
      "Life is defined as any system capable of performing functions such as eating, metabolizing, excreting, breathing, moving, growing, reproducing, and responding to external stimuli",
    role: "Senior advisor",
  },
  {
    name: "elisa Ercier",
    img: "/Assets/doc images/doc-2.webp",
    professional_qualifications: ["school name ", "school name name "],
    Certification_Qulaifications: ["qualification name"],
    Hobbies: [],
    about_yourself:
      "Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm.Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm. ",
    role: "Senior advisor",
    meaning:
      "Life is defined as any system capable of performing functions such as eating, metabolizing, excreting, breathing, moving, growing, reproducing, and responding to external stimuli",
  },
  {
    name: "Sarah Beyar",
    img: "/Assets/doc images/doc-3.webp",
    professional_qualifications: ["school name ", "school name name "],
    Certification_Qulaifications: ["qualification name"],
    Hobbies: [],
    about_yourself:
      "Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm.Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm. ",
    role: "Senior advisor",
    meaning:
      "Life is defined as any system capable of performing functions such as eating, metabolizing, excreting, breathing, moving, growing, reproducing, and responding to external stimuli",
  },
  {
    name: "Maria Cloud",
    img: "/Assets/doc images/doc-4.jpg",
    professional_qualifications: ["school name ", "school name name "],
    Certification_Qulaifications: ["qualification name"],
    Hobbies: [],
    about_yourself:
      "Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm.Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm. ",
    role: "Senior advisor",
  },
  {
    name: "Jessica Baileys",
    img: "/Assets/doc images/doc-5.jpg",
    professional_qualifications: ["school name ", "school name name "],
    Certification_Qulaifications: ["qualification name"],
    Hobbies: [],
    about_yourself:
      "Jack Abraham is the Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm.",
    role: "Senior advisor",
  },
  {
    name: "Samantha Youn",
    img: "/Assets/doc images/doc-6.jpg",
    professional_qualifications: ["school name ", "school name name "],
    Certification_Qulaifications: ["qualification name"],

    Hobbies: [],
    about_yourself:
      "Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm.Managing Partner and CEO of Atomic, and is a pioneer of now popular studio fund model for exclusively investing in companies founded at the firm. ",
    role: "Senior advisor",
  },
];

const page = (props: Props) => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const doctors = useFetchDataOnClient("ourteam");

  return (
    <>
      <HomeHeader visibleSection={"Our-team"} />
      <div>
        <div className="max-screen mx-auto my-5 p-5 flex flex-col justify-center items-start ">
          <div className="flex items-center flex-col gap-5 my-10 max-screen">
            <h1 className="lg:text-6xl text-3xl font-bold text-dark">
              Meet the team
            </h1>
          </div>
          <SlideInFromLeft className="grid grid-cols-2 lg:grid-cols-4 max-screen md:grid-cols-3 gap-7 lg:gap-y-24 md:gap-y-16 my-10 mt-5 ">
            {doctors &&
              doctors.map((info: any) => (
                <div key={info.fullName} onClick={() => setSelectedUser(info)}>
                  <TeamDeatils team={selectedUser}>
                    {/* Aspect square cuts the image in 1/2 */}
                    <div className="max-w-[250px] md:max-w-[250px] lg:max-w-none aspect-square overflow-hidden rounded-md">
                      <Suspense fallback={<LoadingSkeleton />}>
                        <Image
                          draggable={false}
                          src={info.profileImage}
                          width={450}
                          height={450}
                          alt="doc image"
                          className="w-full aspect-square object-cover object-top"
                        />
                      </Suspense>
                    </div>
                    <h2 className="text-start mt-3 font-bold w-full lg:text-2xl text-xl text-dark">
                      {info.fullName.charAt(0).toUpperCase() +
                        info.fullName.slice(1)}
                    </h2>
                    <p className="text-start lg:text-md text-sm text-medium italic">
                      {info.role.charAt(0).toUpperCase() + info.role.slice(1)}
                    </p>
                  </TeamDeatils>
                </div>
              ))}
          </SlideInFromLeft>
          <div className="my-10 text-center flex justify-center items-center w-full">
            <Button>Load more</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
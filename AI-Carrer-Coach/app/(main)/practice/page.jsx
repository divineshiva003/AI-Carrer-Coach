import React from "react";
// import "./practice.css";

import Icon from "@mdi/react"
import { mdiChartDonutVariant } from "@mdi/js"
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js"
import { mdiTableClock } from "@mdi/js"
import { mdiAccountSupervisor } from "@mdi/js"
import { mdiClipboardList } from "@mdi/js"
import { mdiCodeJson} from "@mdi/js"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlignLeft,
  ArrowLeft,
  ArrowRight,
  MoveLeft,
  MoveRightIcon,
} from "lucide-react";
import Link from "next/link";

const Practice = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row m-auto px-1 py-5 gap-4 justify-center ">
        <div>
          <Card className="w-100 h-60 ">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                Quantitative Aptitude
              </CardTitle>
            </CardHeader>
            <CardContent className="text-1xl flex">
              <ul className="space-y-2">
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →{" "}
                  </span>
                  <span className="hover:underline">Arithmetic Aptitude</span>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <span className="hover:underline">Data Interpretation</span>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <span className="hover:underline">Online Aptitude Test</span>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <span className="hover:underline">Data Interpretation Test</span>
                </li>
              </ul>
               <div className="flex items-center gap-2">
                     <Icon path={mdiChartDonutVariant} size={5} className="text-primary mx-5 " />
                </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-100 h-60 ">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="text-1xl flex">
              <ul className="space-y-2">
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →{" "}
                  </span>
                  <span className="hover:underline">Web Development</span>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <span className="hover:underline">Data Interpretation</span>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <Link href="/reasoning" className="underline">Reasoning</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                   <Link href="/time&age" className="underline">Time & Age</Link>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                     <Icon path={mdiCheckboxMarkedCircleOutline} size={5} className="text-primary mx-5 " />
                </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-100 h-60 ">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                Verbal Ability
              </CardTitle>
            </CardHeader>
            <CardContent className="text-1xl flex">
              <ul className="space-y-2">
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →{" "}
                  </span>
                   <Link href="/verbal_ability" className="underline">Verbal Ability</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <Link href="/antonym" className="underline">Antonym</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                   <Link href="/synnonym" className="underline">Synnonym</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                   <Link href="/phrase" className="underline">Phrase</Link>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                     <Icon path={mdiTableClock} size={5} className="text-primary mx-5 " />
                </div>
            </CardContent>
          </Card>
        </div>
        </div>
        <div className="flex flex-col md:flex-row m-auto px-1 py-5 gap-4 justify-center">
        <div>
          <Card className="w-100 h-60 ">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                General Awareness
              </CardTitle>
            </CardHeader>
            <CardContent className="text-1xl flex">
              <ul className="space-y-2">
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1 ">
                    {" "}
                    →{" "}
                  </span>
                  <Link href="/gk" className="underline">General Knowledge</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <Link href="/general_science" className="underline">General Science</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <Link href="/indian_politics" className="underline">Indian Politics</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                 <Link href="/current_affair" className="underline">Current Affair</Link>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                     <Icon path={ mdiAccountSupervisor} size={5} className="text-primary mx-5 " />
                </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-100 h-60 ">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                Interview
              </CardTitle>
            </CardHeader>
            <CardContent className="text-1xl flex">
              <ul className="space-y-2">
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →{" "}
                  </span>
                  <Link href="/webdev" className="underline">Web Development</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <Link href="/python" className="underline">Python</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <Link href="/java" className="underline">Java</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <Link href="/cplusplus_programming" className="underline">C++</Link>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                     <Icon path={mdiCodeJson} size={5} className="text-primary mx-5 " />
                </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-100 h-60 ">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                Engineering subjects
              </CardTitle>
            </CardHeader>
            <CardContent className="text-1xl flex">
              <ul className="space-y-2">
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →{" "}
                  </span>
                  <Link href="/digital_electronics" className="underline">Digital Electronics</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                  <Link href="/networking" className="underline">Networking</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                   <Link href="/basic_electronics" className="underline">Basic Electronics</Link>
                </li>
                <li className="group flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-primary">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {" "}
                    →
                  </span>
                   <Link href="/os" className="underline">Operating Systems</Link>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                     <Icon path={mdiClipboardList} size={5} className="text-primary mx-5" />
                </div>
            </CardContent>
          </Card>
        </div>
        </div>
        </>
  );
};

export default Practice;

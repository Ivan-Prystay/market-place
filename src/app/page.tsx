"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import aboutAstrology from "../../public/img/about_astrology.jpg";
import aboutNumerology from "../../public/img/about_numerology.jpg";
import aboutTarot from "../../public/img/about_tarot.jpg";
import Link from "next/link";
import {
  TextField,
  InputAdornment,
  FormControl,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import round from "../../public/img/radial_gradient.png";
import Categories from "./components/Inputs/Categories";
import Price from "./components/Inputs/Price";
import TypeSession from "./components/Inputs/TypeSession";
import SortBy from "./components/Inputs/SortBy";
import SpecialistCard from "./components/SpecialistCard";

// ************************  DB  ******************
import specialists from "./db/specialist.json";

// type Request = {
//   categories?: string[];
//   price?: number[];
// };

export default function Page(): React.ReactNode {
  // const [request, setRequest] = useState({});

  return (
    <main>
      <section className="tw-px-20 ">
        <div className="tw-flex tw-flex-col tw-pt-[170px] tw-items-center ">
          <h1 className="tw-text-[83px] tw-uppercase tw-bg-gradient-to-b tw-from-gray-100 tw-to-transparent tw-text-transparent tw-bg-clip-text tw-font-myanmarmn">
            Discover Your Destiny:
          </h1>
          <h2 className="tw-text-[#BDCAD2] tw-text-[70px] tw-font-nixieone tw-mt-[22px]">
            Tarot, Astrology, Numerology
          </h2>
          <button
            className="tw-bg-accent-color tw-w-[302px] tw-py-4 tw-text-[24px] tw-rounded-xl tw-text-white tw-mt-[130px] tw-mx-auto tw-capitalize first-letter: tw-ease-linear tw-duration-700 hover:tw-duration-300 hover:tw-ease-linear hover:tw-bg-accent-hover 
          "
          >
            Get started
          </button>
        </div>

        {/* **********   Choose your specialist ************/}
        <div className=" tw-mt-[437px]  tw-mx-auto tw-max-w-[1440px]">
          <div className="tw-relative tw-mt-[120px]">
            <p className="tw-font-nixieone tw-text-[90px] tw-text-[#BDCAD233] tw-blur-[2px] ">
              Choose your specialist
            </p>
            <Link
              href={"/services"}
              className="tw-absolute tw-font-nixieone tw-text-[70px] tw-text-[#BDCAD2] tw-top-[60px] tw-start-[245px]"
            >
              Choose your specialist
            </Link>
            <Image
              src={round}
              alt="round1"
              className=" tw-absolute tw-top-10 tw-left-[-105px]"
            ></Image>
            <Image
              src={round}
              alt="round1"
              className=" tw-absolute tw-top-[-105px] tw-right-[-90px]"
            ></Image>

            <div className="tw-w-4 tw-h-4 tw-rounded-full tw-bg-[#504F66] tw-relative">
              <div className="tw-absolute tw-w-[1024px] tw-h-[1px] tw-bg-[#504F66] tw-top-2 tw-left-4"></div>
            </div>
          </div>

          {/******************************* FORM *******************************/}

          <FormControl className="tw-mt-[250px] tw-w-[100%]">
            <TextField
              id="search"
              name="search"
              variant="outlined"
              placeholder="Search Service"
              autoComplete="off"
              className="tw-bg-[#79839B] tw-rounded-xl tw-w-[100%]"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
            />
            <div className="tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-mt-10 tw-bg-transparent">
              <Categories />
              <Price />
              <TypeSession />
              <SortBy />
            </div>
          </FormControl>

          <div></div>
          {/* *** *** ***  Specialists cards *** *** *** */}

          <List sx={{ mt: 10, p: 0 }} className="tw-space-y-20">
            {specialists.map(specialist => (
              <ListItem key={specialist.id} sx={{ m: 0, p: 0 }}>
                <SpecialistCard specialist={specialist} />
              </ListItem>
            ))}
          </List>
        </div>

        {/* *** *** ***  About us *** *** *** */}

        <div className=" tw-mt-[500px]">
          <div className="tw-relative">
            <p className="tw-font-nixieone tw-text-[90px] tw-text-[#BDCAD233] tw-blur-[2px] tw-ml-[350px]">
              About us
            </p>
            <Link
              href={"/about"}
              className="tw-absolute tw-font-nixieone tw-text-[70px] tw-text-[#BDCAD2] tw-top-[51px] tw-start-[163px] tw-ml-[350px]"
            >
              About us
            </Link>

            <div className="tw-w-4 tw-h-4 tw-rounded-full tw-bg-[#504F66] tw-ml-8  tw-relative">
              <div className="tw-absolute tw-w-[775px] tw-h-[1px] tw-bg-[#504F66] tw-top-2 tw-left-4"></div>
            </div>
          </div>
        </div>
        <div className="tw-mt-24">
          <ul className="tw-flex tw-flex-row tw-text-xl tw-text-[#3A475C]">
            <li>
              <Image src={aboutAstrology} width={409} alt="Astrology"></Image>
              <h3>Astrology</h3>
              <p>
                Is a service that helps you uncover and understand the influence
                of planets and stars on your life. Our astrologers analyse your
                astrological chart, identifying your strengths and weaknesses,
                and provide valuable insights to better understand yourself,
                your relationships, and your life path. Astrology assists you in
                making informed decisions and finding harmony in your life.
              </p>
            </li>
            <li>
              <Image src={aboutNumerology} width={409} alt="Numerology"></Image>
              <h3>Numerology</h3>
              <p>
                Is a service that is based on the study of numbers and their
                influence on your life. Numerologists analyse your name and
                birthdate, revealing deep insights into your personality,
                talents, and life path. They provide you with insights and
                recommendations for achieving harmony and success, using numbers
                as a tool for self-discovery and personal growth.
              </p>
            </li>
            <li>
              <Image src={aboutTarot} width={409} alt="Tarot"></Image>
              <h3>Tarot</h3>
              <p>
                Is a service that utilises tarot cards to explore your life and
                future. Our tarot readers help you find answers to your
                questions by interpreting the symbolism of each card and their
                relationships. They provide you with valuable insights and
                guidance so you can make informed decisions, unlock your
                potential, and discover your path to inner harmony and success.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

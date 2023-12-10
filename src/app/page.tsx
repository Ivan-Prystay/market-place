"use client";
import React, { useState } from "react";
import Image from "next/image";
import aboutAstrology from "../../public/img/astrology_card.png";
import aboutNumerology from "../../public/img/numerology_card.png";
import aboutTarot from "../../public/img/tarot_card.png";
import Link from "next/link";
import { Button, FormControl, List, ListItem } from "@mui/material";
import round from "../../public/img/radial_gradient.png";
import SearchText from "./components/Inputs/SearchText";
import Categories from "./components/Inputs/Categories";
import Price from "./components/Inputs/Price";
import TypeSession from "./components/Inputs/TypeSession";
import SortBy from "./components/Inputs/SortBy";
import SpecialistCard from "./components/SpecialistCard";
import SearchIcon from "@mui/icons-material/Search";
import ChipsArray from "./components/Inputs/ChipArray";

// ************************  DB  ******************
import specialists from "./db/specialist.json";

export interface ChipData {
  key: number;
  label: string;
}

export default function Page(): React.ReactNode {
  const [searchText, setSearchText] = useState("");
  console.log("searchText: ", searchText);
  const handleSearchText = (text: string) => {
    setSearchText(text);
  };

  const [changeCategories, setChangeCategories] = useState<string[]>([]);
  console.log("changeCategories: ", changeCategories);
  const handleChangeCategories = (categories: string[]) => {
    setChangeCategories(categories);
  };

  const [changePrise, setChangePrice] = useState<number[]>([0, 400]);
  console.log("changePrise: ", changePrise);
  const handleChangePrice = (price: number[]) => {
    setChangePrice(price);
  };

  const [changeTypeSession, setChangeTypeSession] = useState<string | null>(
    null
  );
  console.log("changeTypeSession: ", changeTypeSession);

  const handleChangeTypeSession = (typeSession: string | null) => {
    setChangeTypeSession(typeSession);
  };

  const [changeSortBy, setChangeSortBy] = useState<string | null>(null);
  console.log("changeSortBy: ", changeSortBy);

  const handleChangeSortBy = (sortName: string | null) => {
    setChangeSortBy(sortName);
  };

  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: "Numerology's" },
    { key: 1, label: "Astrology's" },
    { key: 2, label: "Tarot" },
    { key: 3, label: "On-line" },
    { key: 4, label: "Price: lowest first" },
    { key: 5, label: "200 - 350$" },
  ]);

  const formattedChipData = [
    { key: 0, label: searchText },
    // Format category as individual chips
    ...changeCategories.map((cat, index) => ({ key: index + 1, label: cat })),
    // Format price as a range
    {
      key: changeCategories.length + 1,
      label: `${changePrise[0]} - ${changePrise[1]}`,
    },
    { key: changeCategories.length + 2, label: changeTypeSession },
    { key: changeCategories.length + 3, label: changeSortBy },
  ];

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

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
          <Button className="tw-px-[86px] hover:tw-px-[85px] tw-py-[13px] hover:tw-py-[12px] tw-bg-accent-color hover:tw-bg-accent-hover  tw-text-[24px] tw-rounded-[2px] tw-text-white tw-mt-[116px] tw-mx-auto tw-capitalize first-letter:tw-ease-linear tw-duration-700 hover:tw-duration-300 hover:tw-ease-linear hover:tw-border-solid hover:tw-border-accent-color hover:tw-border-[1px] tw-leading-normal">
            Get started
          </Button>
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

          <FormControl className="tw-mt-[250px] tw-w-[100%] tw-relative">
            <SearchText handleSearchText={handleSearchText} />
            <div className="tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-mt-10 tw-bg-transparent ">
              <Categories handleChangeCategories={handleChangeCategories} />
              <Price handleChangePrice={handleChangePrice} />
              <TypeSession handleChangeTypeSession={handleChangeTypeSession} />
              <SortBy handleChangeSortBy={handleChangeSortBy} />
            </div>

            <ChipsArray chipData={chipData} handleDelete={handleDelete} />

            <Button className="tw-bg-accent-color hover:tw-bg-accent-hover tw-py-[7px] tw-px-12 tw-text-[18px] tw-rounded-[2px] tw-text-white tw-mt-[276px] tw-capitalize first-letter:tw-ease-linear tw-duration-700 hover:tw-duration-300 hover:tw-ease-linear tw-border-solid tw-border-white tw-border-[1px] hover:tw-border-accent-color tw-box-border tw-mx-auto">
              <SearchIcon sx={{ mr: "20px" }} />
              Search
            </Button>
          </FormControl>

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

        <div className=" tw-mt-[120px]">
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
            <div className="tw-w-4 tw-h-4 tw-rounded-full tw-bg-[#b4b1f2] tw-ml-8  tw-relative">
              <div className="tw-absolute tw-w-[775px] tw-h-[1px] tw-bg-[#504F66] tw-top-2 tw-left-4"></div>
            </div>
          </div>
        </div>
        <div className="tw-my-20">
          <ul className="tw-flex tw-flex-row tw-text-xl tw-text-[#3A475C] tw-justify-between">
            <li className="tw-flex-1 tw-text-center">
              <div className="card tw-mb-5">
                <div className="card__front">
                  <Image
                    src={aboutAstrology}
                    width={405}
                    alt="Astrology"
                  ></Image>
                </div>
                <div className="card__back">
                  <p>
                    Is a service that helps you uncover and understand the
                    influence of planets and stars on your life. Our astrologers
                    analyse your astrological chart, identifying your strengths
                    and weaknesses, and provide valuable insights to better
                    understand yourself, your relationships, and your life path.
                    Astrology assists you in making informed decisions and
                    finding harmony in your life.
                  </p>
                </div>
              </div>
              <Link
                href={"/about"}
                className="tw-text-[#FFFCC7] tw-font-nixieone tw-text-[40px] tw-underline "
              >
                Astrology
              </Link>
            </li>
            <li className="tw-flex-1 tw-text-center">
              <div className="card tw-mb-5">
                <div className="card__front">
                  <Image
                    src={aboutNumerology}
                    width={405}
                    alt="Numerology"
                  ></Image>
                </div>
                <div className="card__back">
                  <p>
                    Is a service that is based on the study of numbers and their
                    influence on your life. Numerologists analyse your name and
                    birthdate, revealing deep insights into your personality,
                    talents, and life path. They provide you with insights and
                    recommendations for achieving harmony and success, using
                    numbers as a tool for self-discovery and personal growth.
                  </p>
                </div>
              </div>
              <Link
                href={"/about"}
                className="tw-text-[#FFFCC7] tw-font-nixieone tw-text-[40px] tw-underline"
              >
                Numerology
              </Link>
            </li>
            <li className="tw-flex-1 tw-text-center">
              <div className="card tw-mb-5">
                <div className="card__front">
                  <Image src={aboutTarot} width={405} alt="Tarot"></Image>
                </div>
                <div className="card__back">
                  <p>
                    Is a service that utilises tarot cards to explore your life
                    and future. Our tarot readers help you find answers to your
                    questions by interpreting the symbolism of each card and
                    their relationships. They provide you with valuable insights
                    and guidance so you can make informed decisions, unlock your
                    potential, and discover your path to inner harmony and
                    success.
                  </p>
                </div>
              </div>
              <Link
                href={"/about"}
                className="tw-text-[#FFFCC7] tw-font-nixieone tw-text-[40px] tw-underline"
              >
                Tarot
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

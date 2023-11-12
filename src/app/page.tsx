import Image from "next/image";
import title from "../../public/svg/title 2.min.svg";
import aboutAstrology from "../../public/img/about_astrology.jpg";
import aboutNumerology from "../../public/img/about_numerology.jpg";
import aboutTarology from "../../public/img/about_tarology.jpg";

export default function Page() {
  return (
    <main>
      <section>
        <div className="flex flex-col pt-36 items-center">
          <h1 className="text-[85px] uppercase bg-gradient-to-b from-gray-100 to-transparent text-transparent bg-clip-text font-myanmarmn">
            Discover Your Destiny:
          </h1>
          <h2 className="text-[#BDCAD2] text-[70px] font-nixieone mt-5">
            Tarot, Astrology, Numerology
          </h2>
          <button className="bg-[#FFFCC7] px-8 py-4 text-2xl rounded-xl text-2 mt-[137px] font-nicomoji">
            Get started
          </button>
        </div>
      </section>
      <section>
        <Image
          src={title}
          alt="About"
          width={500}
          style={{ marginLeft: "102px", marginTop: "422px" }}
        ></Image>
        {/* <p>About us</p> */}
        <div className="mt-24">
          <ul className="flex flex-row text-white text-xl text-[#3A475C]">
            <li>
              <Image src={aboutAstrology} width={409} alt="#"></Image>
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
              <Image src={aboutNumerology} width={409} alt="#"></Image>
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
              <Image src={aboutTarology} width={409} alt="#"></Image>
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

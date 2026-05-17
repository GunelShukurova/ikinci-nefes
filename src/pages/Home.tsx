import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import photo from "../assets/b38c660f0a8a06a0d16dc671632dc2945aadff93 (3).jpg";
import { MdArrowOutward } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";

import image from "../assets/23494090d9b04e61694b8d1ac85e55051dd4b58b.jpg";
import { IoIosArrowForward } from "react-icons/io";


const Home = () => {
  const { t } = useTranslation();
  const aboutFeatures = t("home.about_preview.features", {
    returnObjects: true,
  }) as Array<{ title: string; text: string }>;
  const serviceItems = t("home.services_section.items", {
    returnObjects: true,
  }) as Array<{ id: number; title: string; text: string }>;
  const specialistItems = t("home.specialists_section.items", {
    returnObjects: true,
  }) as Array<{
    name: string;
    role: string;
    experience: string;
    badge: string;
    button_text: string;
  }>;
  const testItems = t("home.tests_section.items", {
    returnObjects: true,
  }) as Array<{ title: string; tag: string }>;
  const blogItems = t("home.blog_section.items", {
    returnObjects: true,
  }) as Array<{ title: string; link_text: string }>;
  const gradientText = {
    background:
      "linear-gradient(90deg, #4CAF50 0%, #61AE4D 7.14%, #72AE4B 14.29%, #82AD48 21.43%, #90AC45 28.57%, #9DAB41 35.71%, #A9A93E 42.86%, #B5A83A 50%, #C0A636 57.14%, #CBA431 64.29%, #D6A22B 71.43%, #E1A025 78.57%, #EB9E1D 85.71%, #F59B12 92.86%, #FF9800 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <>
      <div className="w-full bg-[#F3F9F4] px-4 py-10 sm:px-6 lg:flex lg:min-h-[727px] lg:items-center lg:px-8 2xl:px-10">
        <div className="mx-auto flex w-full max-w-[1232px] 2xl:max-w-[1400px] min-[1710px]:max-w-[1710px] flex-col md:flex-row items-center justify-between gap-10 md:gap-12 min-[1710px]:gap-20">
          {/* TEXT */}
          <div className="w-full max-w-[900px] text-center md:text-left">
            <h1
              className="font-bold leading-[1.1] text-[36px] sm:text-[44px] lg:text-[60px] xl:text-[72px]"
              style={gradientText}
            >
              {t("home.hero.title_green")}
            </h1>

            <h2
              className="font-bold leading-[1.1] text-[36px] sm:text-[44px] lg:text-[60px] xl:text-[72px]"
              style={gradientText}
            >
              {t("home.hero.title_yellow")}
            </h2>

            

            <div className="relative inline-block mt-2">
              <svg
                width="180"
                height="10"
                viewBox="0 0 209 11"
                className="mx-auto md:mx-0"
                fill="none"
              >
                <path
                  d="M2.08594 8.34219C62.563 0.000520945 145.98 0.000520945 206.457 8.34219"
                  stroke="#81C784"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-6 text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] text-[#6B7280] leading-[1.6]">
              {t("home.hero.description")}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <button className="h-[52px] sm:w-[194px] w-full rounded-2xl bg-[#4CAF50] text-white flex items-center justify-center gap-2">
                {t("home.hero.buttons.appointment")} <IoIosArrowForward />
              </button>

              <button className="h-[52px] sm:w-[161px] w-full rounded-2xl border border-[#E0E0E0] bg-white font-semibold">
                {t("home.hero.buttons.start_test")}
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full max-w-[560px]">
            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px] overflow-hidden rounded-[20px]">
              <img src={image} alt="" className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

<section className="w-full bg-[#F8FAF8] py-10 md:py-10">
  <div className="max-w-[1232px] 2xl:max-w-[1400px] mx-auto px-4">

    {/* TOP CONTENT */}
    <div className="mb-10 md:mb-14 text-center lg:text-left">
      <h3 className="text-[32px] sm:text-[36px] md:text-[40px] font-normal mb-4 tracking-[0.2px]">
        {t("home.about_preview.header")}
      </h3>

      <p className="text-[#6B7280] text-[16px] md:text-[18px] font-normal">
        {t("home.about_preview.sub_header")}
      </p>
    </div>

    {/* BOTTOM CONTENT */}
    <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      {/* BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* BIG */}
        <div
          className="
            w-[280px] h-[280px]
            sm:w-[360px] sm:h-[360px]
            lg:w-[520px] lg:h-[520px]
            rounded-full opacity-[0.10]
            bg-[radial-gradient(70.71%_70.71%_at_50%_50%,#F7941D_38.46%,#FFF3E0_70%)]
          "
        />

        {/* SMALL */}
        <div
          className="
            absolute
            w-[120px] h-[120px]
            sm:w-[150px] sm:h-[150px]
            lg:w-[180px] lg:h-[180px]
            rounded-full
            opacity-[0.18]
            translate-x-2 translate-y-10
            sm:translate-x-3 sm:translate-y-16
            lg:translate-x-1 lg:translate-y-40
            bg-[#F7941D]
          "
        />

      </div>

      {/* IMAGE BLOCK */}
      <div className="w-full lg:w-[55%] relative z-10">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={photo}
            alt=""
            className="w-full h-[220px] sm:h-[300px] md:h-[340px] lg:h-[406px] object-cover shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]"
          />
        </div>
      </div>

      {/* RIGHT BLOCK */}
      <div className="w-full lg:w-[45%] flex flex-col gap-6 relative z-10">

        <div>
          <h4 className="font-medium text-[20px] sm:text-[22px] md:text-[24px] text-[#101828] mb-4">
            {t("home.about_preview.main_title")}
          </h4>

          <p className="font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#4A5565]">
            {t("home.about_preview.description")}
          </p>
        </div>

        {aboutFeatures.map((feature, index) => (
          <div key={feature.title} className="flex items-start gap-4">
            <div
              className={`min-w-[56px] sm:min-w-[60px] md:min-w-[64px]
              h-[56px] sm:h-[60px] md:h-[64px]
              rounded-2xl flex items-center justify-center border-[6px] sm:border-[7px] border-[#f0f8f1f0] ${
                index === 0 ? "bg-[#3593380c]" : "bg-[#4CAF500D]"
              }`}
            >
              <LuBrain className="text-[#4CAF50] w-[24px] sm:w-[28px] md:w-[30px] h-[24px] sm:h-[28px] md:h-[30px]" />
            </div>

            <div>
              <h4 className="font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-[#101828] mb-2">
                {feature.title}
              </h4>

              <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] text-[#4A5565]">
                {feature.text}
              </p>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-end gap-3 pt-2">
          <button className="text-[13px] sm:text-[14px] md:text-[16px] font-medium text-[#4CAF50]">
            {t("home.about_preview.more_link")}
          </button>

          <span className="text-lg sm:text-xl flex items-center justify-center text-[#4CAF50]">
            <MdArrowOutward />
          </span>
        </div>

      </div>
    </div>
  </div>
</section>
      <section className="bg-[#F8F8F9] w-full pt-8 md:pt-12  ">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 md:px-6 2xl:px-4 pb-15">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-4 md:mb-6 tracking-[0.2px]">
            {t("home.services_section.title")}
          </h4>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              {t("home.services_section.description")}
            </p>
          </div>

      <div className="relative mt-6">

  {/* BACKGROUND LAYER (behind cards) */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* BIG GLOW */}
    <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,#F7941D_0%,transparent_70%)] opacity-20" />

    {/* SECOND GLOW */}
    <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,#4CAF50_0%,transparent_70%)] opacity-10" />

  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 relative z-10">
    {serviceItems.map((item) => (
 <div
  key={item.id}
  className="
    relative
    w-full h-[415px]
    rounded-3xl
    overflow-hidden
    bg-white
    border border-gray-100
    shadow
    p-[20px]
  "
>

  {/* GLOW BACKGROUND FOR EACH CARD */}
  <div className="absolute inset-0 pointer-events-none">

    {/* ORANGE GLOW */}
    <div className="absolute -top-1 left-50 w-[250px] h-[250px] rounded-full
      bg-[#FEF7EF] " />


  </div>

  {/* CONTENT ABOVE GLOW */}
  <div className="relative z-10">

    <img
      className="w-full h-[240px] rounded-[16px] aspect-[3/4] object-cover"
      src="https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=UXPrlQx09d8EP4_kTdAa-vC2LxD_ppY1tiG7eTPGVbE="
      alt="psychologist"
    />

    <div className="p-2 md:p-5 flex flex-col">
      <span className="text-[24px] md:text-[20px] font-semibold text-[#4CAF50]">
        {item.title}
      </span>

      <span className="text-[#6B7280] font-normal text-[12px] md:text-[16px]">
        {item.text}
      </span>

      <div className="flex items-center justify-between gap-3 pt-5">
        <button className="text-[14px] md:text-[16px] font-medium text-[#4CAF50]">
          {t("home.about_preview.more_link")}
        </button>

        <span className="w-[30px] h-[30px] rounded-full bg-[#F8FCF8] flex items-center justify-center text-[#4CAF50]">
          <MdArrowOutward />
        </span>
      </div>
    </div>

  </div>
</div>
    ))}
  </div>
</div>
          <div className="flex justify-end mt-6">
            <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
              {t("home.services_section.view_all")} <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
     <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 py-10 md:py-14">
          {/* TITLE */}
          <h4 className="text-[24px] md:text-[40px] font-normal mb-3 tracking-[0.2px]">
            {t("home.specialists_section.title")}
          </h4>
          <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px] mb-6">
            {t("home.services_section.description")}
          </p>
          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
            {[
              "Psixoloq",
              "Psixopedaqoq",
              "Loqoped",
              "Duyu Bütövləmə",
              "Refleksoloq",
            ].map((item, i) => (
              <button
                key={i}
                className={`h-[40px] px-5 rounded-[16px] border text-sm transition
          ${
            i === 0
              ? "text-[#F7941D] border-[#F7941D]"
              : "text-[#5D5E5F] border-[#E0E0E0] bg-white"
          }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => {
              const specialist =
                specialistItems[index] ?? specialistItems[0];

              return (
              <div
                key={`${specialist.name}-${index}`}
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
              >
                {/* IMAGE */}
                <div className="relative h-[180px]">
                  <img
                    src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  {/* badge */}
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-2xl text-xs flex items-center gap-1">
                    <span className="text-[#4CAF50]">
                      <FaAward />
                    </span>
                    {specialist.badge}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-[16px] md:text-[18px] font-semibold">
                    {specialist.name}
                  </h3>

                  <p className="text-[#4CAF50] text-sm mt-1">{specialist.role}</p>

                  <span className="text-[#6B7280] text-sm mt-2">
                    {specialist.experience}
                  </span>

                  {/* BUTTON */}
                  <button className="mt-3 h-[44px] rounded-2xl border border-[#4CAF50] text-[#4CAF50] flex items-center justify-center gap-2 bg-[#F8FCF8] ">
                    {specialist.button_text}
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-6">
            <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
              Hamısına bax <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            {t("home.tests_section.title")}
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Özünüzü daha yaxşı tanıyın və inkişaf yollarını müəyyənləşdirin
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {testItems.map((item, index) => (
          <div
  key={`${item.title}-${index}`}
  className="
    relative
    w-full max-w-[389px]
    mx-auto
    h-auto
    rounded-3xl
    overflow-hidden
    bg-white
    border border-gray-100
    shadow
    p-6 md:p-10
  "
>

  {/* GLOW BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">

    {/* ORANGE GLOW */}
    <div className="absolute -top-10 left-70 w-[150px] h-[150px] rounded-full
      bg-[#FEF7EF] " />

  

  </div>

  {/* bottom orange accent */}
  <div
    className="
      absolute inset-0 rounded-3xl pointer-events-none
      border-b-[2px] border-[#F7941D]
    "
    style={{
      boxShadow: "0 12px 0px -18px #F7941D inset",
    }}
  />

  {/* content */}
  <div className="relative z-10 flex flex-col gap-5">

    <div className="flex justify-between items-start">
      <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
        <LuBrain className="text-[#4CAF50] w-[30px] h-[30px]" />
      </div>

      <button className="bg-[#4CAF501A] flex items-center justify-center gap-3 text-[#4CAF50] rounded-2xl h-[24px] w-[68px] text-[12px] font-semibold">
        {item.tag}
      </button>
    </div>

    <span className="text-[20px] font-semibold">{item.title}</span>

    <p className="text-[15px] font-normal text-[#6B7280] tracking-[0.2px]">
      Stress səviyyənizi qiymətləndirin və idarəetmə yollarını öyrənin
    </p>

    <div className="flex gap-[12px]">
      <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#F6FBF6] flex items-center justify-center gap-2">
        <IoMdTime className="text-[#4CAF50]" />5 dəqiqə
      </span>

      <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#F6FBF6] flex items-center justify-center gap-2">
        <FiFileText className="text-[#4CAF50]" />
        15 sual
      </span>
    </div>

    <div className="border-t border-gray-200"></div>

    <button className="bg-[#F8FCF8] border border-[#4CAF50] flex justify-center items-center gap-3 text-[#4CAF50] rounded-2xl h-[52px]">
      {t("home.hero.buttons.start_test")}
      <FaArrowRightLong />
    </button>

  </div>
</div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
              Hamısına bax <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            {t("home.blog_section.title")}
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Psixoloji sağlamlıq haqqında faydalı məlumatlar
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
            <div className="w-full max-w-[384px] mx-auto h-auto relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] sm:h-[260px] md:h-[330px] object-cover"
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                alt=""
              />

              <button className="bg-white absolute top-5 text-[12px] text-[#4CAF50] font-semibold flex items-center gap-2 px-2 py-1 rounded-2xl left-5">
                Psixoloji Sağlamlıq
              </button>

              <div className="p-5 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#4CAF50]">
                      <LuCalendar />
                    </span>
                    <span className="text-[14px] font-medium text-[#6B7280] tracking-[0.2px]">
                      15 Aprel 2026
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm mt-2">
                    <span className="text-[16px] md:text-[18px] font-semibold tracking-[0.2px]">
                      Streslə Necə Mübarizə Aparmaq Olar?
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <p className="text-[14px] md:text-[15px] font-normal text-[#6B7280]">
                    Gündəlik həyatda stresslə başa çıxmaq üçün effektiv metodlar
                    və praktiki məsləhətlər
                  </p>
                </div>

                <div className="border-t border-gray-200 mb-4"></div>

                <div className="flex items-center gap-3">
                  <span className="text-[15px] md:text-[16px] font-medium text-[#4CAF50]">
                    Məqaləni oxu
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#F8FCF8] text-[#4CAF50] flex justify-center items-center">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[384px] mx-auto h-auto relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] sm:h-[260px] md:h-[330px] object-cover"
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                alt=""
              />

              <button className="bg-white absolute top-5 text-[12px] text-[#4CAF50] font-semibold flex items-center gap-2 px-2 py-1 rounded-2xl left-5">
                Psixoloji Sağlamlıq
              </button>

              <div className="p-5 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#4CAF50]">
                      <LuCalendar />
                    </span>
                    <span className="text-[14px] font-medium text-[#6B7280] tracking-[0.2px]">
                      15 Aprel 2026
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm mt-2">
                    <span className="text-[16px] md:text-[18px] font-semibold tracking-[0.2px]">
                      Streslə Necə Mübarizə Aparmaq Olar?
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <p className="text-[14px] md:text-[15px] font-normal text-[#6B7280]">
                    Gündəlik həyatda stresslə başa çıxmaq üçün effektiv metodlar
                    və praktiki məsləhətlər
                  </p>
                </div>

                <div className="border-t border-gray-200 mb-4"></div>

                <div className="flex items-center gap-3">
                  <span className="text-[15px] md:text-[16px] font-medium text-[#4CAF50]">
                    Məqaləni oxu
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#F8FCF8] text-[#4CAF50] flex justify-center items-center">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[384px] mx-auto h-auto relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] sm:h-[260px] md:h-[330px] object-cover"
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                alt=""
              />

              <button className="bg-white absolute top-5 text-[12px] text-[#4CAF50] font-semibold flex items-center gap-2 px-2 py-1 rounded-2xl left-5">
                Psixoloji Sağlamlıq
              </button>

              <div className="p-5 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#4CAF50]">
                      <LuCalendar />
                    </span>
                    <span className="text-[14px] font-medium text-[#6B7280] tracking-[0.2px]">
                      15 Aprel 2026
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm mt-2">
                    <span className="text-[16px] md:text-[18px] font-semibold tracking-[0.2px]">
                      Streslə Necə Mübarizə Aparmaq Olar?
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <p className="text-[14px] md:text-[15px] font-normal text-[#6B7280]">
                    Gündəlik həyatda stresslə başa çıxmaq üçün effektiv metodlar
                    və praktiki məsləhətlər
                  </p>
                </div>

                <div className="border-t border-gray-200 mb-4"></div>

                <div className="flex items-center gap-3">
                  <span className="text-[15px] md:text-[16px] font-medium text-[#4CAF50]">
                    Məqaləni oxu
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#F8FCF8] text-[#4CAF50] flex justify-center items-center">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
              Hamısına bax <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Home;

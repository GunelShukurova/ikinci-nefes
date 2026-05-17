import photo from "../assets/826bbec161d35d870c840383173f57f09e485ecd.jpg";
import photo2 from "../assets/61dde147b925875272f6ca80d9801613c3e45e00.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

type StatCounterProps = {
  duration?: number;
  end: number;
  start: boolean;
};

const StatCounter = ({ duration = 2, end, start }: StatCounterProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    let frameId = 0;
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setValue(Math.round(end * progress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [duration, end, start]);

  return <>{value}</>;
};

const About = () => {
  const { t } = useTranslation();
  const valueItems = t("about_page.values_section.items", {
    returnObjects: true,
  }) as Array<{ title: string; text: string }>;
  const leaderItems = t("about_page.team_section.leaders", {
    returnObjects: true,
  }) as Array<{ role: string; name: string; bio: string }>;
  const memberItems = t("about_page.team_section.members", {
    returnObjects: true,
  }) as Array<{ name: string; role: string }>;
  const eventItems = t("about_page.events_section.items", {
    returnObjects: true,
  }) as Array<{ title: string; type: string; date: string; button: string }>;
  const statItems = t("about_page.stats_section.items", {
    returnObjects: true,
  }) as Array<{ value: string; label: string }>;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  return (
    <>
      <section className="bg-[#F8F8F9]">
        <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-[52px]">
          <div className="flex flex-col lg:flex-row justify-between gap-5 w-full">
            <h1 className="font-bold text-[32px] sm:text-[38px] lg:text-[48px] tracking-[0.2px] text-[#4CAF50] max-w-[584px] leading-[110%]">
              {t("about_page.mission_section.title")}
            </h1>

            <div className="text-[16px] md:text-[17px] lg:text-[18px] text-[#364153] leading-[24px] lg:leading-[28px] border-l-2 pl-3 border-l-[#F7941D] tracking-[0.2px] max-w-[503px] font-normal">
              <p>
                {t("about_page.mission_section.description")}
              </p>
            </div>
          </div>

          <div>
            <img
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] object-cover rounded-[20px] mt-10"
              src={photo}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            {t("about_page.values_section.title")}
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#4A5565] tracking-[0.2px] font-normal">
              {t("about_page.values_section.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* LEFT */}
            <div className="flex flex-col gap-5">
              {valueItems.slice(0, 2).map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col w-full min-h-[180px] gap-5 p-6 bg-white rounded-[24px] border border-[#E0E0E0]"
                >
                  <span className="text-[22px] md:text-[24px] font-normal text-[#4CAF50]">
                    {item.title}
                  </span>

                  <p className="text-[15px] md:text-[16px] font-normal text-[#364153] leading-[24px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div>
              <img
                className="w-full h-[280px] md:h-[376px] border border-[#E0E0E0] rounded-[24px] object-cover"
                src={photo2}
                alt=""
              />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5">
              {valueItems.slice(2, 4).map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col w-full min-h-[180px] gap-5 p-6 bg-white rounded-[24px] border border-[#E0E0E0]"
                >
                  <span className="text-[22px] md:text-[24px] font-normal text-[#4CAF50]">
                    {item.title}
                  </span>

                  <p className="text-[15px] md:text-[16px] font-normal text-[#364153] leading-[24px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 py-[32px]">
          {/* HEADER */}
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            {t("about_page.team_section.title")}
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#4A5565] tracking-[0.2px]">
              {t("about_page.team_section.description")}
            </p>
          </div>

          {/* TOP CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {leaderItems.map((leader, index) => (
              <div
                key={`${leader.name}-${index}`}
                className="relative w-full h-full p-6 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow flex flex-col"
              >
                <img
                  className="w-full h-[260px] md:h-[340px] lg:h-[420px] object-cover rounded-[24px]"
                  src="https://img.freepik.com/free-photo/young-business-woman-working-laptop-office_1303-22814.jpg"
                  alt="psychologist"
                />

                <div className="p-2 md:p-5 flex flex-col gap-2">
                  <span className="text-[18px] md:text-[24px] font-semibold">
                    {leader.role}
                  </span>

                  <span className="text-[16px] md:text-[20px] font-medium">
                    {leader.name}
                  </span>

                  <p className="text-[15px] md:text-[17px] text-[#6B7280] font-normal leading-[24px]">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
            {memberItems.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="relative bg-white rounded-[16px] overflow-hidden shadow-sm border border-gray-100 flex flex-col"
              >
                {/* bottom glow */}
                <div
                  className="absolute inset-0 rounded-[16px] pointer-events-none border-b-[2px] border-[#F7941D]"
                  style={{
                    boxShadow: "0 12px 0px -18px #F7941D inset",
                  }}
                />

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                    className="w-full h-[240px] object-cover"
                    alt=""
                  />

                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-2xl text-xs flex items-center gap-1 shadow-sm">
                    <span className="text-[#4CAF50]">
                      <FaAward />
                    </span>
                    {t("home.specialists_section.items.0.badge")}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-[16px] md:text-[18px] font-semibold mt-2">
                    {member.name}
                  </h3>

                  <p className="text-[#4CAF50] text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            {t("about_page.events_section.title")}
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              {t("about_page.events_section.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
            {eventItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="w-full mx-auto relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 flex flex-col"
              >
                <img
                  className="w-full h-[180px] sm:h-[200px] object-cover"
                  src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                  alt=""
                />

                <div className="p-5 flex flex-col flex-1 gap-2">
                  <span className="text-[16px] md:text-[18px] font-medium tracking-[0.2px]">
                    {item.title}
                  </span>

                  <span className="text-[#F7941D] text-[14px] md:text-[16px] font-bold">
                    {item.type}
                  </span>

                  <span className="text-[13px] md:text-[14px] font-medium text-[#6B7280]">
                    {item.date}
                  </span>

                  <p className="text-[13px] md:text-[15px] font-normal text-[#6B7280]">
                    Uşaqlarda emosional inkişafın necə formalaşdığı və valideyn
                    davranışlarının uşağın psixologiyasına təsiri mövzusunda
                    tövsiyələr.
                  </p>

                  <div className="mt-auto pt-4">
                    <button className="w-full h-[44px] rounded-2xl border border-[#4CAF50] text-[#4CAF50] flex items-center justify-center gap-2 bg-[#F8FCF8]">
                      {item.button}
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto py-[50px] px-4 md:px-6 2xl:px-4">
          <div
            ref={ref}
            className="rounded-[20px] bg-white border border-[#E5E7EB] shadow-sm border-l-[20px] border-r-[20px] border-l-[#F7941D] border-r-[#F7941D] py-10 px-6 md:px-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {statItems.map((item) => {
                const numericValue = Number.parseInt(item.value.replace(/\D/g, ""), 10);
                const suffix = item.value.replace(/[0-9]/g, "");

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center border-t-4 border-t-[#F7941D] pt-4"
                  >
                    <span className="text-[40px] md:text-[56px] font-bold text-[#364153] min-h-[60px] md:min-h-[84px]">
                      <StatCounter
                        end={Number.isNaN(numericValue) ? 0 : numericValue}
                        duration={numericValue > 100 ? 2.5 : 2}
                        start={inView}
                      />
                      {suffix}
                    </span>

                    <span className="text-[14px] font-normal text-[#4A5565]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { LuBrain } from "react-icons/lu";
import { useTranslation } from "react-i18next";

type TestItem = {
  tag: string;
  title: string;
  description: string;
  duration: string;
  questions: string;
  button_text: string;
};

const Tests = () => {
  const { t } = useTranslation();
  const items = t("tests_page.items", { returnObjects: true }) as TestItem[];

  return (
    <section className="bg-[#F8F8F9] w-full">
      <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
        <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
          {t("tests_page.title")}
        </h4>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
            {t("tests_page.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {items.map((item, index) => (
          <div
  key={`${item.title}-${index}`}
  className="relative w-full max-w-[389px] mx-auto h-auto rounded-3xl overflow-hidden bg-white border border-gray-100 shadow p-6 md:p-10"
>

  {/* GLOW BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">

    {/* ORANGE GLOW */}
    <div className="absolute -top-10 left-70 w-[150px] h-[150px] rounded-full
      bg-[#FEF7EF] " />

  </div>

  {/* bottom accent (оставляем как есть) */}
  <div
    className="absolute inset-0 rounded-3xl pointer-events-none border-b-[2px] border-[#F7941D]"
    style={{ boxShadow: "0 12px 0px -18px #F7941D inset" }}
  />

  {/* CONTENT */}
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
      {item.description}
    </p>

    <div className="flex gap-[12px]">
      <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#F6FBF6] flex items-center justify-center gap-2">
        <IoMdTime className="text-[#4CAF50]" />
        {item.duration}
      </span>

      <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#F6FBF6] flex items-center justify-center gap-2">
        <FiFileText className="text-[#4CAF50]" />
        {item.questions}
      </span>
    </div>

    <div className="border-t border-gray-200"></div>

    <button className="bg-[#F8FCF8] border border-[#4CAF50] flex justify-center items-center gap-3 text-[#4CAF50] rounded-2xl h-[52px]">
      {item.button_text}
      <FaArrowRightLong />
    </button>

  </div>
</div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
            {t("tests_page.view_all")} <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tests;

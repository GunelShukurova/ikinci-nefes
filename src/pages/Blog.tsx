import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import { useTranslation } from "react-i18next";

type BlogItem = {
  date: string;
  title: string;
  description: string;
  link_text: string;
};

const Blog = () => {
  const { t } = useTranslation();
  const items = t("blog_page.items", { returnObjects: true }) as BlogItem[];

  return (
    <section className="bg-[#F8F8F9] w-full">
      <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
        <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px] text-[#364153]">
          {t("blog_page.title")}
        </h4>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
            {t("blog_page.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
          {items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="w-full max-w-[384px] mx-auto h-auto relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100"
            >
              <img
                className="w-full h-[220px] sm:h-[260px] md:h-[330px] object-cover"
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                alt={item.title}
              />

              <div className="p-5 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#4CAF50]">
                      <LuCalendar />
                    </span>
                    <span className="text-[14px] font-medium text-[#6B7280] tracking-[0.2px]">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm mt-2">
                    <span className="text-[16px] md:text-[18px] font-semibold tracking-[0.2px]">
                      {item.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <p className="text-[14px] md:text-[15px] font-normal text-[#6B7280]">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-gray-200 mb-4"></div>

                <div className="flex items-center gap-3">
                  <span className="text-[15px] md:text-[16px] font-medium text-[#4CAF50]">
                    {item.link_text}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#F8FCF8] text-[#4CAF50] flex justify-center items-center">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
            {t("blog_page.view_all")} <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

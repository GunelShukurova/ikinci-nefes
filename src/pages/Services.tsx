import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type ServiceItem = {
  title: string;
  subtitle: string;
  button_text: string;
};

const Services = () => {
  const { t } = useTranslation();
  const items = t("services_page.items", { returnObjects: true }) as ServiceItem[];

  return (
    <>
      <section className="bg-[#F8F8F9] w-full pt-8 md:pt-12">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 md:px-6 2xl:px-4 pb-15">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-4 md:mb-6 tracking-[0.2px]">
            {t("services_page.title")}
          </h4>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              {t("services_page.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
            {items.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="relative w-full h-[415px] rounded-3xl overflow-hidden bg-white border border-gray-100 shadow p-[20px]"
              >
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none border-b-[2px] border-[#F7941D]"
                  style={{
                    boxShadow: "0 12px 0px -18px #F7941D inset",
                  }}
                ></div>

                <img
                  className="w-full h-[240px] rounded-[16px] aspect-[3/4] object-cover"
                  src="https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=UXPrlQx09d8EP4_kTdAa-vC2LxD_ppY1tiG7eTPGVbE="
                  alt={item.title}
                />

                <div className="p-2 md:p-5 flex flex-col">
                  <span className="text-[24px] md:text-[20px] font-semibold text-[#4CAF50]">
                    {item.title}
                  </span>

                  <span className="text-[#6B7280] font-normal text-[12px] md:text-[16px]">
                    {item.subtitle}
                  </span>

                  <div className="flex items-center justify-between gap-3 pt-5">
                    <button className="text-[14px] md:text-[16px] font-medium text-[#4CAF50]">
                      {item.button_text}
                    </button>

                    <span className="w-[30px] h-[30px] rounded-full bg-[#F8FCF8] flex items-center justify-center text-[#4CAF50]">
                      <MdArrowOutward />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
              {t("services_page.view_all")} <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F9] py-8 px-4">
        <div className="max-w-[1232px] w-full mx-auto bg-white rounded-[24px] shadow-[0px_20px_25px_-12px_#0000001A] flex flex-col gap-6 sm:gap-[32px] py-8 sm:py-[32px] items-center text-center">
          <h4 className="font-medium text-[24px] sm:text-[28px] md:text-[32px]">
            {t("services_page.cta.title_prefix")}{" "}
            <span className="text-[#4CAF50]">
              {t("services_page.cta.title_highlight")}
            </span>
          </h4>

          <p className="text-[14px] sm:text-[18px] md:text-[20px] font-medium text-[#4A5565] max-w-[671px] w-full px-2 sm:px-0">
            {t("services_page.cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[24px] w-full justify-center px-4 sm:px-0">
            <button className="flex w-full sm:w-[230px] h-[56px] sm:h-[71px] justify-center items-center gap-2 text-[16px] sm:text-[18px] rounded-[14px] bg-gradient-to-r from-[#4CAF50] via-[#47A74B] to-[#43A047] text-white shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">
              <FiCalendar />
              <span>{t("services_page.cta.button")}</span>
            </button>

            <button className="flex w-full sm:w-[230px] h-[56px] sm:h-[71px] justify-center items-center gap-2 text-[16px] sm:text-[18px] border border-[#4CAF50] rounded-[14px] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">
              <span className="text-[#4CAF50]">{t("services_page.cta.phone")}</span>
            </button>
          </div>

          <div className="border-t border-[#E5E7EB] w-full pt-5 flex flex-col items-center gap-3 px-4">
            <span className="text-[#4A5565] text-[14px] sm:text-[16px]">
              {t("services_page.cta.question")}
            </span>

            <span className="text-[#4CAF50] text-[16px] sm:text-[18px] font-medium">
              {t("services_page.cta.email")}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

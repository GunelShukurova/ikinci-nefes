import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const requestTypeOptions = t("contact_page.form.request_type_options", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="bg-[#F8F8F9] w-full">
      <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[32px] md:px-6 2xl:px-4">
        <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px] text-[#364153] leading-[120%]">
          {t("contact_page.title")}
        </h4>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px] leading-[28px] max-w-[900px]">
            {t("contact_page.description")}
          </p>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-8 items-stretch">
          <form className="flex flex-col gap-6 w-full lg:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-[#364153]">
                    {t("contact_page.form.full_name_label")}
                  </label>

                  <input
                    type="text"
                    placeholder={t("contact_page.form.full_name_placeholder")}
                    className="w-full h-[47px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-[#364153]">
                    {t("contact_page.form.phone_label")}
                  </label>

                  <input
                    type="text"
                    placeholder={t("contact_page.form.phone_placeholder")}
                    className="w-full h-[47px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-[#364153]">
                    {t("contact_page.form.email_label")}
                  </label>

                  <input
                    type="email"
                    placeholder={t("contact_page.form.email_placeholder")}
                    className="w-full h-[47px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-[#364153]">
                    {t("contact_page.form.request_type_label")}
                  </label>

                  <select className="w-full h-[47px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 outline-none">
                    <option>{t("contact_page.form.request_type_placeholder")}</option>
                    {requestTypeOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium text-[#364153]">
                {t("contact_page.form.message_label")}
              </label>

              <textarea
                rows={6}
                placeholder={t("contact_page.form.message_placeholder")}
                className="w-full rounded-[12px] h-[97px] border border-[#E5E7EB] bg-white px-4 py-3 outline-none resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 w-[18px] h-[18px] accent-[#F7941D]"
              />

              <p className="text-[14px] md:text-[16px] text-[#6B7280] leading-[24px]">
                {t("contact_page.form.checkbox_text")}
              </p>
            </div>

            <button className="w-full h-[48px] rounded-[12px] bg-[#F7941D] text-white font-medium">
              {t("contact_page.form.submit_button")}
            </button>
          </form>

          <div className="relative bg-white rounded-[24px] p-6 w-full lg:max-w-[390px] flex flex-col gap-6 border border-[#E5E7EB] lg:self-stretch pt-15">
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none border-b-[2px] border-[#F7941D]"
              style={{
                boxShadow: "0 12px 0px -18px #F7941D inset",
              }}
            ></div>

            <div className="flex gap-4 items-start">
              <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                <LuPhone className="text-[#4CAF50] w-[30px] h-[30px]" />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-medium text-[20px] text-[#4CAF50]">
                  {t("contact_page.info.phone_title")}
                </h4>

                <h5 className="text-[#6B7280] text-[14px] font-medium">
                  {t("contact_page.info.phone_description")}
                </h5>

                <span className="text-[#4CAF50] text-[16px] font-medium">
                  {t("contact_page.info.phone_value")}
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                <LuMail className="text-[#4CAF50] w-[30px] h-[30px]" />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-medium text-[20px] text-[#4CAF50]">
                  {t("contact_page.info.email_title")}
                </h4>

                <h5 className="text-[#6B7280] text-[14px] font-medium">
                  {t("contact_page.info.email_description")}
                </h5>

                <span className="text-[#4CAF50] text-[16px] font-medium break-all">
                  {t("contact_page.info.email_value")}
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                <LuMapPin className="text-[#4CAF50] w-[30px] h-[30px]" />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-medium text-[20px] text-[#4CAF50]">
                  {t("contact_page.info.address_title")}
                </h4>

                <h5 className="text-[#6B7280] text-[14px] font-medium">
                  {t("contact_page.info.address_description")}
                </h5>

                <span className="text-[#4CAF50] text-[16px] font-medium leading-[24px]">
                  {t("contact_page.info.address_value")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

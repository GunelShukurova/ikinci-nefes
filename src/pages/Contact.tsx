import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";

const Contact = () => {
  return (
    <>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[32px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px] text-[#364153] leading-[120%]">
            Əlaqə
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px] leading-[28px] max-w-[900px]">
              Suallarınız və ya təklifləriniz varsa, bizimlə əlaqə saxlayın və
              biz sizə ən qısa müddətdə cavab verəcəyik.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-10 flex flex-col lg:flex-row gap-8">
            
            {/* FORM */}
            <form className="flex flex-col gap-6 w-full lg:w-[70%]">
              
              {/* TOP GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* LEFT */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-[#364153]">
                      Ad Soyad *
                    </label>

                    <input
                      type="text"
                      placeholder="Ad və soyadınızı daxil edin"
                      className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-[#364153]">
                      Telefon Nömrəsi *
                    </label>

                    <input
                      type="text"
                      placeholder="+994 50 555 55 55"
                      className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 outline-none"
                    />
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-[#364153]">
                      Email Ünvanı *
                    </label>

                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-[#364153]">
                      Sorğu Növü *
                    </label>

                    <select className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] bg-white px-4 outline-none">
                      <option>Seçin</option>
                      <option>Psixoloji dəstək</option>
                      <option>Rezervasiya</option>
                      <option>Məlumat almaq</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-medium text-[#364153]">
                  Mesaj *
                </label>

                <textarea
                  rows={6}
                  placeholder="Mesajınızı yazın..."
                  className="w-full rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-3 outline-none resize-none"
                />
              </div>

              {/* CHECKBOX */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 w-[18px] h-[18px] accent-[#F7941D]"
                />

                <p className="text-[14px] md:text-[16px] text-[#6B7280] leading-[24px]">
                  Məxfilik siyasətini qəbul edirəm və məlumatlarımın
                  işlənməsinə razıyam
                </p>
              </div>

              {/* BUTTON */}
              <button className="w-full h-[48px] rounded-[12px] bg-[#F7941D] text-white font-medium">
                Mesaj Göndər
              </button>
            </form>

            {/* CONTACT INFO */}
            <div className="bg-white rounded-[24px] p-6 w-full lg:max-w-[390px] flex flex-col gap-6 border border-[#E5E7EB] h-fit">
              
              {/* PHONE */}
              <div className="flex gap-4 items-start">
                <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                  <LuPhone className="text-[#4CAF50] w-[30px] h-[30px]" />
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-medium text-[20px] text-[#4CAF50]">
                    Bizə Zəng Edin
                  </h4>

                  <h5 className="text-[#6B7280] text-[14px] font-medium">
                    Hər gün 09:00-dan 18:00-dək
                  </h5>

                  <span className="text-[#4CAF50] text-[16px] font-medium">
                    +994 12 345 67 89
                  </span>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4 items-start">
                <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                  <LuMail className="text-[#4CAF50] w-[30px] h-[30px]" />
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-medium text-[20px] text-[#4CAF50]">
                    Email Göndərin
                  </h4>

                  <h5 className="text-[#6B7280] text-[14px] font-medium">
                    İstənilən vaxt email göndərin
                  </h5>

                  <span className="text-[#4CAF50] text-[16px] font-medium break-all">
                    info@ikincinefes.az
                  </span>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-4 items-start">
                <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                  <LuMapPin className="text-[#4CAF50] w-[30px] h-[30px]" />
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-medium text-[20px] text-[#4CAF50]">
                    Ofisimiz
                  </h4>

                  <h5 className="text-[#6B7280] text-[14px] font-medium">
                    Ofisimizə gəlin
                  </h5>

                  <span className="text-[#4CAF50] text-[16px] font-medium leading-[24px]">
                    A. Nəbiyev küç. 15, Nəsimi Bakı, Azərbaycan
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
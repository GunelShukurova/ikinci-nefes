import { FiBriefcase } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { LuBrain } from "react-icons/lu";
import { useState } from "react";

const Specialist1 = () => {


  const [lang, setLang] = useState("AZ");

  return (
    <>
      <section className="bg-[#F8F8F9]">
        <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-[52px]">
          <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[32px]">
            {/* IMAGE */}
            <div className="w-full lg:w-auto">
              <img
                className="w-full lg:w-[387px] h-[260px] sm:h-[320px] lg:h-[284px] rounded-[16px] object-cover"
                src="https://static.vecteezy.com/system/resources/previews/008/570/352/large_2x/charming-asian-female-office-worker-working-on-a-laptop-computer-and-enjoying-drinking-coffee-in-a-modern-office-free-photo.jpg"
                alt=""
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] md:text-[32px] font-medium text-[#F7941D]">
                Psixoloq
              </h1>

              <div>
                <h2 className="text-[#364153] text-[26px] md:text-[30px] font-medium leading-[120%]">
                  Dr. Aysel Məmmədova
                </h2>

                <h3 className="text-[#5D5E5F70] font-normal text-[16px] md:text-[18px] mt-1">
                  Klinik Psixoloq
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[#5D5E5F70] font-normal text-[16px] md:text-[18px]">
                  Dil
                </span>

                 <div className="flex flex-wrap gap-[10px]">
                    <button
                      onClick={() => setLang("AZ")}
                      className={`text-[14px] font-normal hover:cursor-pointer min-w-[120px] h-[40px] rounded-[12px] border transition
    ${
      lang === "AZ"
        ? "bg-[#4CAF50] text-white border-[#4CAF50]"
        : "border-[#E0E0E0] bg-white text-[#364153]"
    }
  `}
                    >
                      Azərbaycan
                    </button>

                    <button
                      onClick={() => setLang("EN")}
                      className={`text-[14px] font-normal  hover:cursor-pointer  min-w-[120px] h-[40px] rounded-[12px] border transition
    ${
      lang === "EN"
        ? "bg-[#4CAF50] text-white border-[#4CAF50]"
        : "border-[#E0E0E0] bg-white text-[#364153]"
    }
  `}
                    >
                      İngilis
                    </button>

                    <button
                      onClick={() => setLang("RU")}
                      className={`text-[14px] font-normal hover:cursor-pointer  min-w-[120px] h-[40px] rounded-[12px] border transition
    ${
      lang === "RU"
        ? "bg-[#4CAF50] text-white border-[#4CAF50]"
        : "border-[#E0E0E0] bg-white text-[#364153]"
    }
  `}
                    >
                      Rus
                    </button>
                  </div>

                <button className="w-full hover:cursor-pointer  sm:w-[150px] h-[48px] rounded-[12px] bg-[#4CAF50] text-white text-sm">
                  Seansa yazıl
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
   <section className="bg-[#F8F8F9]">
  <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-[32px] pb-20">
    
    <div>
      
      <div>
        <p className="text-[16px] md:text-[18px] leading-[28px] font-normal text-[#6B7280]">
          12 illik təcrübəyə malik klinik psixoloq olaraq, müxtəlif yaş
          qruplarından olan insanlara kömək etmişəm. Mənim yanaşmam hər
          bir insanın unikal olduğuna və ona uyğun fərdi terapiya planının
          hazırlanmasına əsaslanır. CBT və EMDR metodlarından istifadə
          edərək, siz özünüzün ən yaxşı versiyası olmağınıza kömək edirəm.
        </p>
      </div>

      {/* EXPERIENCE */}
      <div className="flex items-center gap-3 mt-8 md:mt-10">
        <span>
          <FiBriefcase className="text-[#F7941D] text-xl md:text-2xl" />
        </span>

        <span className="font-normal text-[15px] md:text-[16px] text-[#364153]">
          12 il təcrübə
        </span>
      </div>

      {/* EDUCATION */}
      <div className="flex items-center gap-3 mt-8 md:mt-10">
        <span>
          <PiGraduationCap className="text-[#F7941D] text-xl md:text-2xl" />
        </span>

        <span className="font-medium text-[20px] md:text-[24px] text-[#364153]">
          Təhsil
        </span>
      </div>

      <div className="mt-4 md:mt-5">
        <ul className="text-[15px] md:text-[16px] leading-[28px] font-normal text-[#6B7280] flex flex-col gap-3">
          <li>
            Ph.D. Klinik Psixologiya - Bakı Dövlət Universiteti, 2015
          </li>

          <li>
            Magistr - Psixologiya, London Universiteti, 2011
          </li>

          <li>
            Bakalavr - Psixologiya, Bakı Dövlət Universiteti, 2009
          </li>
        </ul>
      </div>

      {/* CERTIFICATES */}
      <div className="flex items-center gap-3 mt-8 md:mt-10">
        <span>
          <FaAward className="text-[#F7941D] text-xl md:text-2xl" />
        </span>

        <span className="font-medium text-[20px] md:text-[24px] text-[#364153]">
          Sertifikatlar
        </span>
      </div>

      <div className="mt-4 md:mt-5">
        <ul className="text-[15px] md:text-[16px] leading-[28px] font-normal text-[#6B7280] flex flex-col gap-3">
          <li>CBT Sertifikatı - Beck İnstitutu, 2016</li>

          <li>EMDR Terapiya - EMDR İnstitutu, 2018</li>

          <li>Mindfulness Terapiya Sertifikatı, 2020</li>
        </ul>
      </div>

      {/* SPECIALIZATION */}
      <div className="flex items-center gap-3 mt-8 md:mt-10">
        <span>
          <LuBrain className="text-[#F7941D] text-xl md:text-2xl" />
        </span>

        <span className="font-medium text-[20px] md:text-[24px] text-[#364153]">
          İxtisaslaşma sahələri
        </span>
      </div>

      <div className="flex flex-wrap gap-[10px] w-full md:w-[603px] mt-5">
        
        <button className="text-[13px] md:text-[14px] px-4 min-h-[40px] font-normal border border-[#E0E0E0] text-[#6B7280] bg-white rounded-[12px]">
          Depressiya müalicəsi
        </button>

        <button className="text-[13px] md:text-[14px] px-4 min-h-[40px] font-normal border border-[#E0E0E0] bg-white text-[#6B7280] rounded-[12px]">
          Anksiyete pozğunluqları
        </button>

        <button className="text-[13px] md:text-[14px] px-4 min-h-[40px] font-normal border border-[#E0E0E0] bg-white text-[#6B7280] rounded-[12px]">
          Travma terapiyası
        </button>

        <button className="text-[13px] md:text-[14px] px-4 min-h-[40px] font-normal border border-[#E0E0E0] bg-white text-[#6B7280] rounded-[12px]">
          Şəxsiyyət inkişafı
        </button>

        <button className="text-[13px] md:text-[14px] px-4 min-h-[40px] font-normal border border-[#E0E0E0] bg-white text-[#6B7280] rounded-[12px]">
          Stress idarəetməsi
        </button>

      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default Specialist1;

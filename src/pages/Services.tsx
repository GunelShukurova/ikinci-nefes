import photo from "../assets/509f6710483943220181e3ecbf1a7c221e396cbd.jpg";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
const Services = () => {
  return (
    <>
 <section className="relative h-[606px] w-full overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center bg-[#4caf4f0e]"
    style={{ backgroundImage: `url(${photo})` }}
  />
  <div className="absolute inset-0 bg-[#4caf4f2e]" />

  <div className="relative z-10 
                  p-6 sm:p-10 lg:p-26 
                  flex flex-col gap-6">

    <div className="flex flex-col gap-1">
      <h1 className="font-medium text-[36px] sm:text-[48px] lg:text-[72px]">
        Sizə uyğun
      </h1>

      <h2 className="font-bold text-[28px] sm:text-[40px] lg:text-[56px] text-[#2E6930]">
        Psixoloji Dəstək
      </h2>
    </div>

    <p className="text-[16px] sm:text-[18px] lg:text-[24px] font-normal text-[#1B1B1B] max-w-[1000px] w-full">
      Hər kəsin ehtiyaclarına uyğun kompleks və fərdi psixoloji xidmətlər.
      Narahatlıqdan tutmuş şəxsi inkişafa qədər geniş spektrdə professional
      dəstək.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-[36px]">

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#4A5565] rounded-full"></span>
        <span className="text-[#3C3C3C] text-[16px] lg:text-[18px] font-normal">
          Fərdi yanaşma
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#4A5565] rounded-full"></span>
        <span className="text-[#3C3C3C] text-[16px] lg:text-[18px] font-normal">
          Online və ofis sessiyaları
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#4A5565] rounded-full"></span>
        <span className="text-[#3C3C3C] text-[16px] lg:text-[18px] font-normal">
          6 Xidmət sahəsi
        </span>
      </div>

    </div>

  </div>
</section>
  <section className="bg-[#F8F8F9] w-full pt-8 md:pt-12 pb-10">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-semibold mb-4 md:mb-6 tracking-[0.2px]">
            Xidmətlərimiz
          </h4>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Sizin ehtiyaclarınıza uyğun psixoloji xidmətlər
            </p>

            <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
              Hamısına bax <FaArrowRight />
            </button>
          </div>

          {/* GRID FIX */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
            <div className="w-full h-auto md:h-[323px] border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)] border border-[#f0f8f1f0] border-[7px]">
                <LuBrain className="text-white w-[32px] h-[32px]" />
              </div>

              <span className="text-[18px] md:text-[20px] font-semibold">
                Ailə Məsləhətləşməsi
              </span>

              <p className="text-[14px] md:text-[15px] text-[#6B7280] tracking-[0.2px]">
                Ailə münasibətlərini gücləndirmək və ünsiyyət problemlərini həll
                etmək
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button className="text-[14px] md:text-[16px] text-[#4CAF50]">
                  Ətraflı öyrən
                </button>

                <span className="w-[40px] h-[40px] border rounded-full text-[20px] border-[#4CAF5033] flex items-center justify-center text-[#4CAF50]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
            <div className="w-full h-auto md:h-[323px] border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)] border border-[#f0f8f1f0] border-[7px]">
                <LuBrain className="text-white w-[32px] h-[32px]" />
              </div>

              <span className="text-[18px] md:text-[20px] font-semibold">
                Ailə Məsləhətləşməsi
              </span>

              <p className="text-[14px] md:text-[15px] text-[#6B7280] tracking-[0.2px]">
                Ailə münasibətlərini gücləndirmək və ünsiyyət problemlərini həll
                etmək
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button className="text-[14px] md:text-[16px] text-[#4CAF50]">
                  Ətraflı öyrən
                </button>

                <span className="w-[40px] h-[40px] border rounded-full text-[20px] border-[#4CAF5033] flex items-center justify-center text-[#4CAF50]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
            <div className="w-full h-auto md:h-[323px] border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)] border border-[#f0f8f1f0] border-[7px]">
                <LuBrain className="text-white w-[32px] h-[32px]" />
              </div>

              <span className="text-[18px] md:text-[20px] font-semibold">
                Ailə Məsləhətləşməsi
              </span>

              <p className="text-[14px] md:text-[15px] text-[#6B7280] tracking-[0.2px]">
                Ailə münasibətlərini gücləndirmək və ünsiyyət problemlərini həll
                etmək
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button className="text-[14px] md:text-[16px] text-[#4CAF50]">
                  Ətraflı öyrən
                </button>

                <span className="w-[40px] h-[40px] border rounded-full text-[20px] border-[#4CAF5033] flex items-center justify-center text-[#4CAF50]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
            <div className="w-full h-auto md:h-[323px] border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)] border border-[#f0f8f1f0] border-[7px]">
                <LuBrain className="text-white w-[32px] h-[32px]" />
              </div>

              <span className="text-[18px] md:text-[20px] font-semibold">
                Ailə Məsləhətləşməsi
              </span>

              <p className="text-[14px] md:text-[15px] text-[#6B7280] tracking-[0.2px]">
                Ailə münasibətlərini gücləndirmək və ünsiyyət problemlərini həll
                etmək
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button className="text-[14px] md:text-[16px] text-[#4CAF50]">
                  Ətraflı öyrən
                </button>

                <span className="w-[40px] h-[40px] border rounded-full text-[20px] border-[#4CAF5033] flex items-center justify-center text-[#4CAF50]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>

            <div className="w-full h-auto md:h-[323px] border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)] border border-[#f0f8f1f0] border-[7px]">
                <LuBrain className="text-white w-[32px] h-[32px]" />
              </div>

              <span className="text-[18px] md:text-[20px] font-semibold">
                Ailə Məsləhətləşməsi
              </span>

              <p className="text-[14px] md:text-[15px] text-[#6B7280] tracking-[0.2px]">
                Ailə münasibətlərini gücləndirmək və ünsiyyət problemlərini həll
                etmək
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button className="text-[14px] md:text-[16px] text-[#4CAF50]">
                  Ətraflı öyrən
                </button>

                <span className="w-[40px] h-[40px] border rounded-full text-[20px] border-[#4CAF5033] flex items-center justify-center text-[#4CAF50]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>

            <div className="w-full h-auto md:h-[323px] border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)] border border-[#f0f8f1f0] border-[7px]">
                <LuBrain className="text-white w-[32px] h-[32px]" />
              </div>

              <span className="text-[18px] md:text-[20px] font-semibold">
                Ailə Məsləhətləşməsi
              </span>

              <p className="text-[14px] md:text-[15px] text-[#6B7280] tracking-[0.2px]">
                Ailə münasibətlərini gücləndirmək və ünsiyyət problemlərini həll
                etmək
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button className="text-[14px] md:text-[16px] text-[#4CAF50]">
                  Ətraflı öyrən
                </button>

                <span className="w-[40px] h-[40px] border rounded-full text-[20px] border-[#4CAF5033] flex items-center justify-center text-[#4CAF50]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default Services;

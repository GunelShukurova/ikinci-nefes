import { FaArrowRight } from "react-icons/fa6";
import photo from "../assets/b38c660f0a8a06a0d16dc671632dc2945aadff93 (3).jpg";
import { MdArrowOutward } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";
import location from "../assets/c64634f190d431874d2b5548fcad4e8e6f0d2c60.jpg";

const Home = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#E8F5E9] to-[#C8E6C9] px-4 py-12 sm:px-6 lg:flex lg:min-h-[727px] lg:items-center lg:px-6 lg:py-8 2xl:px-10 min-[1710px]:px-8">
        <div className="mx-auto flex w-full max-w-[1232px] 2xl:max-w-[1400px] min-[1710px]:max-w-[1710px] flex-col-reverse items-center justify-center gap-10 lg:min-h-[569px] lg:gap-12 xl:flex-row xl:items-center xl:justify-between min-[1710px]:gap-20">
          {/* TEXT */}
          <div className="flex w-full max-w-[461px] flex-col text-center leading-none lg:max-w-[520px] xl:flex-1 xl:text-left">
            <h1 className="text-[40px] font-bold text-[#2E7D32] sm:text-[52px] lg:text-[60px] xl:text-[72px]">
              İkinci
            </h1>

            <div className="text-[40px] font-bold sm:text-[52px] lg:text-[60px] xl:text-[72px]">
              Nəfəsinizi
            </div>

            <div className="relative mx-auto inline-block pb-3 xl:mx-0 xl:pb-0">
              <h2 className="mb-5 text-[40px] font-bold text-[#4CAF50] sm:text-[52px] lg:text-[60px] xl:text-[72px]">
                Tapın
              </h2>

              <svg
                width="209"
                height="11"
                viewBox="0 0 209 11"
                className="absolute bottom-0 left-1/2 w-[150px] -translate-x-1/2 scale-90 xl:left-0 xl:w-auto xl:translate-x-0 xl:scale-100"
                fill="none"
              >
                <path
                  d="M2.08594 8.34219C62.563 0.000520945 145.98 0.000520945 206.457 8.34219"
                  stroke="#81C784"
                  strokeWidth="4.17083"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-6 text-[14px] font-light leading-[26px] text-[#3C3C3C] sm:text-[16px] lg:mt-8 lg:text-[18px] lg:leading-[30px] xl:text-[20px] xl:leading-[32.5px]">
              Elmi əsaslı testlərimizlə psixoloji vəziyyətinizi qiymətləndirin
              və nəticənizə uyğun dəstək alın.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:mt-8 lg:gap-4 xl:justify-start">
              <button className="flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#4CAF50] text-[14px] text-white sm:w-[194px] lg:h-[60px] lg:text-[16px]">
                Seansa yazıl <FaArrowRight />
              </button>

              <button className="flex h-[52px] w-full items-center justify-center rounded-2xl border border-[#E0E0E0] bg-white text-[14px] font-semibold sm:w-[161px] lg:h-[60px] lg:text-[16px]">
                Testə başla
              </button>
            </div>
          </div>

          {/* IMAGES */}
          <div className="grid w-full max-w-[300px] grid-cols-[1.15fr_0.95fr] gap-4 sm:max-w-[390px] sm:gap-5 md:max-w-[560px] md:grid-cols-[1fr_0.78fr] md:gap-6 lg:max-w-[320px] lg:grid-cols-1 lg:flex-shrink-0 xl:max-w-[560px] xl:grid-cols-[320px_224px]">
            <img
              className="h-[300px] w-full -rotate-3 self-center rounded-[32px] object-cover shadow-[0_18px_45px_rgba(46,125,50,0.16)] sm:h-[390px] md:h-[420px] lg:h-[360px] xl:h-[450px] xl:rounded-[40px]"
              src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
              alt="Psixoloji dəstək seansı"
            />

            <div className="flex flex-col justify-between gap-4 sm:gap-5 md:gap-6">
              <img
                className="h-[138px] w-full rotate-3 rounded-[24px] border border-white object-cover shadow-[0_14px_32px_rgba(46,125,50,0.14)] sm:h-[182px] sm:rounded-[32px] md:h-[196px] lg:h-[170px] xl:h-[210px] xl:rounded-[40px]"
                src="https://static.vecteezy.com/system/resources/thumbnails/015/128/126/small/smiling-young-african-female-entrepreneur-sitting-at-a-desk-in-her-home-office-working-online-with-a-laptop-photo.jpg"
                alt="Onlayn konsultasiya"
              />

              <img
                className="h-[138px] w-full rotate-6 rounded-[24px] border border-white object-cover shadow-[0_14px_32px_rgba(46,125,50,0.14)] sm:h-[182px] sm:rounded-[32px] md:h-[196px] lg:h-[170px] xl:h-[210px] xl:rounded-[40px]"
                src="https://www.shutterstock.com/image-photo/marketing-portrait-black-woman-agency-600nw-2701996255.jpg"
                alt="Xoşbəxt müştəri portreti"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-[#F8F8F9]">
        <div className="h-[40px] md:h-[80px]"></div>

        <div
          className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto py-6 md:py-[32px] 
                  flex flex-col md:flex-row 
                  justify-between gap-6 md:gap-[24px] px-4"
        >
          {/* LEFT */}
          <div className="w-full md:w-[568px]">
            <h3 className="text-[28px] md:text-[40px] font-semibold mb-4 md:mb-6 tracking-[0.2px]">
              Haqqımızda
            </h3>

            <div
              className="flex flex-col gap-4 md:gap-[16px] 
                      text-[16px] md:text-[18px] 
                      text-[#6B7280] leading-[22px] md:leading-[24px] tracking-[0.2px]"
            >
              <p>
                İkinci Nəfəs psixologiya mərkəzi 2015-ci ildə bir arzunun
                reallaşması ilə yaranıb. Məqsədimiz hər bir insana keyfiyyətli
                və əlçatan psixoloji yardım təqdim etmək idi.
              </p>

              <p>
                Bu gün biz 15-dən çox sertifikatlı psixoloq, 2500-dən artıq
                xoşbəxt müştəri və 8000-dən çox uğurlu seansla Azərbaycanın
                aparıcı psixologiya mərkəzlərindən biriyik.
              </p>

              <p>
                Komandamız davamlı təhsil alır, beynəlxalq təcrübələri öyrənir
                və ən müasir terapevtik metodları tətbiq edir.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-[600px]">
            <img
              src={photo}
              alt=""
              className="w-full h-[250px] md:h-[406px] rounded-3xl object-cover shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full pt-8 md:pt-12">
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

      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto min-h-[720px] py-[32px] md:py-[52px] px-4 md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-semibold mb-6 tracking-[0.2px]">
            Psixoloqlarımız
          </h4>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Təcrübəli və sertifikatlı mütəxəssislərlə tanış olun
            </p>

            <button className="text-[#4CAF50] text-[14px] md:text-[16px] font-medium flex items-center gap-2">
              Hamısına bax <FaArrowRight />
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            <div className="w-full relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] md:h-[260px] object-cover"
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                alt=""
              />

              <button className="bg-white absolute top-3 md:top-5 right-3 md:right-5 text-xs md:text-sm flex items-center gap-2 px-2 py-1 rounded-2xl">
                <span className="text-[#4CAF50]">
                  <FaAward />
                </span>
                Sertifikatlı
              </button>

              <div className="p-4 md:p-5 flex flex-col">
                <div className="mb-4">
                  <span className="text-[16px] md:text-[18px] font-semibold tracking-[0.2px]">
                    Dr. Leyla Əliyeva
                  </span>

                  <div className="flex items-center gap-2 text-xs md:text-sm mt-2">
                    <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full"></span>
                    <span className="text-[#4CAF50]">Klinik Psixoloq</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm mb-4">
                  <FaStar className="text-[#4CAF50]" />
                  <span>4.9</span>
                  <span className="text-[#E0E0E0]">|</span>
                  <span className="text-[#6B7280]">12 il təcrübə</span>
                </div>

                <div className="border-t border-gray-200 mb-4"></div>

                <button
                  className="bg-gradient-to-r from-[#4CAF50]/5 to-[#81C784]/5 
            flex justify-center items-center gap-3 
            text-[#4CAF50] rounded-2xl h-[44px] md:h-[48px] text-sm md:text-base"
                >
                  Profilə bax
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="w-full relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] md:h-[260px] object-cover"
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                alt=""
              />

              <button className="bg-white absolute top-3 md:top-5 right-3 md:right-5 text-xs md:text-sm flex items-center gap-2 px-2 py-1 rounded-2xl">
                <span className="text-[#4CAF50]">
                  <FaAward />
                </span>
                Sertifikatlı
              </button>

              <div className="p-4 md:p-5 flex flex-col">
                <div className="mb-4">
                  <span className="text-[16px] md:text-[18px] font-semibold tracking-[0.2px]">
                    Dr. Leyla Əliyeva
                  </span>

                  <div className="flex items-center gap-2 text-xs md:text-sm mt-2">
                    <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full"></span>
                    <span className="text-[#4CAF50]">Klinik Psixoloq</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm mb-4">
                  <FaStar className="text-[#4CAF50]" />
                  <span>4.9</span>
                  <span className="text-[#E0E0E0]">|</span>
                  <span className="text-[#6B7280]">12 il təcrübə</span>
                </div>

                <div className="border-t border-gray-200 mb-4"></div>

                <button
                  className="bg-gradient-to-r from-[#4CAF50]/5 to-[#81C784]/5 
            flex justify-center items-center gap-3 
            text-[#4CAF50] rounded-2xl h-[44px] md:h-[48px] text-sm md:text-base"
                >
                  Profilə bax
                  <FaArrowRightLong />
                </button>
              </div>
            </div>

            <div className="w-full relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] md:h-[260px] object-cover"
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                alt=""
              />

              <button className="bg-white absolute top-3 md:top-5 right-3 md:right-5 text-xs md:text-sm flex items-center gap-2 px-2 py-1 rounded-2xl">
                <span className="text-[#4CAF50]">
                  <FaAward />
                </span>
                Sertifikatlı
              </button>

              <div className="p-4 md:p-5 flex flex-col">
                <div className="mb-4">
                  <span className="text-[16px] md:text-[18px] font-semibold tracking-[0.2px]">
                    Dr. Leyla Əliyeva
                  </span>

                  <div className="flex items-center gap-2 text-xs md:text-sm mt-2">
                    <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full"></span>
                    <span className="text-[#4CAF50]">Klinik Psixoloq</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm mb-4">
                  <FaStar className="text-[#4CAF50]" />
                  <span>4.9</span>
                  <span className="text-[#E0E0E0]">|</span>
                  <span className="text-[#6B7280]">12 il təcrübə</span>
                </div>

                <div className="border-t border-gray-200 mb-4"></div>

                <button
                  className="bg-gradient-to-r from-[#4CAF50]/5 to-[#81C784]/5 
            flex justify-center items-center gap-3 
            text-[#4CAF50] rounded-2xl h-[44px] md:h-[48px] text-sm md:text-base"
                >
                  Profilə bax
                  <FaArrowRightLong />
                </button>
              </div>
            </div>

            <div className="w-full relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] md:h-[260px] object-cover"
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                alt=""
              />

              <button className="bg-white absolute top-3 md:top-5 right-3 md:right-5 text-xs md:text-sm flex items-center gap-2 px-2 py-1 rounded-2xl">
                <span className="text-[#4CAF50]">
                  <FaAward />
                </span>
                Sertifikatlı
              </button>

              <div className="p-4 md:p-5 flex flex-col">
                <div className="mb-4">
                  <span className="text-[16px] md:text-[18px] font-semibold tracking-[0.2px]">
                    Dr. Leyla Əliyeva
                  </span>

                  <div className="flex items-center gap-2 text-xs md:text-sm mt-2">
                    <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full"></span>
                    <span className="text-[#4CAF50]">Klinik Psixoloq</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm mb-4">
                  <FaStar className="text-[#4CAF50]" />
                  <span>4.9</span>
                  <span className="text-[#E0E0E0]">|</span>
                  <span className="text-[#6B7280]">12 il təcrübə</span>
                </div>

                <div className="border-t border-gray-200 mb-4"></div>

                <button
                  className="bg-gradient-to-r from-[#4CAF50]/5 to-[#81C784]/5 
            flex justify-center items-center gap-3 
            text-[#4CAF50] rounded-2xl h-[44px] md:h-[48px] text-sm md:text-base"
                >
                  Profilə bax
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-semibold mb-5 tracking-[0.2px]">
            Psixoloji Testlər
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Özünüzü daha yaxşı tanıyın və inkişaf yollarını müəyyənləşdirin
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="w-full max-w-[389px] mx-auto h-auto border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="flex justify-between items-start">
                {/* ICON BLOCK */}
                <div className="relative w-[64px] h-[64px]">
                  <div
                    className="w-[64px] h-[64px] rounded-2xl 
                      flex items-center justify-center
                      bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)]"
                  >
                    <FiFileText className="text-white w-[32px] h-[32px]" />
                  </div>
                  <div className="absolute -top-2 -right-4 ">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_dd_53_204)">
                        <path
                          d="M12 13.9961C12 7.37084 17.3708 2 23.9961 2C30.6214 2 35.9922 7.37084 35.9922 13.9961C35.9922 20.6214 30.6214 25.9922 23.9961 25.9922C17.3708 25.9922 12 20.6214 12 13.9961Z"
                          fill="#00C950"
                          shape-rendering="crispEdges"
                        />
                        <g clip-path="url(#clip0_53_204)">
                          <path
                            d="M23.9959 20.6579C27.6752 20.6579 30.6579 17.6752 30.6579 13.9959C30.6579 10.3166 27.6752 7.33398 23.9959 7.33398C20.3166 7.33398 17.334 10.3166 17.334 13.9959C17.334 17.6752 20.3166 20.6579 23.9959 20.6579Z"
                            stroke="white"
                            stroke-width="1.99859"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.998 13.9965L23.3304 15.3288L25.9952 12.6641"
                            stroke="white"
                            stroke-width="1.99859"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_dd_53_204"
                          x="0"
                          y="0"
                          width="47.9922"
                          height="47.9922"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="4"
                            operator="erode"
                            in="SourceAlpha"
                            result="effect1_dropShadow_53_204"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="3" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_53_204"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="3"
                            operator="erode"
                            in="SourceAlpha"
                            result="effect2_dropShadow_53_204"
                          />
                          <feOffset dy="10" />
                          <feGaussianBlur stdDeviation="7.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_dropShadow_53_204"
                            result="effect2_dropShadow_53_204"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_53_204"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_53_204">
                          <rect
                            width="15.9887"
                            height="15.9887"
                            fill="white"
                            transform="translate(16.002 6.00195)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  className="bg-[#4CAF501A] 
                 flex justify-center items-center gap-3 
                 text-[#4CAF50] rounded-2xl 
                 h-[24px] w-[68px] text-[12px] font-semibold"
                >
                  PULSUZ
                </button>
              </div>
              <span className="text-[20px] font-semibold">
                Stress Səviyyəsi Testi
              </span>
              <p className="text-[15px] font-normal text-[#6B7280] tracking-[0.2px]">
                Stress səviyyənizi qiymətləndirin və idarəetmə yollarını öyrənin
              </p>
              <div className="flex gap-[12px]">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#C8E6C980] flex items-center justify-center ">
                    <span className="flex items-center gap-2">
                      <IoMdTime className="text-[#4CAF50]" />5 dəqiqə
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#C8E6C980] flex items-center justify-center ">
                    <span className="flex items-center gap-2">
                      <FiFileText className="text-[#4CAF50]" />
                      15 sual
                    </span>
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200 "></div>
              <button
                className="bg-gradient-to-r from-[#4CAF50] via-[#65BA68] to-[#81C784] 
               flex justify-center items-center gap-3 
               text-white rounded-2xl h-[52px]"
              >
                Testə başla
                <FaArrowRightLong />
              </button>
            </div>
            <div className="w-full max-w-[389px] mx-auto h-auto border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="flex justify-between items-start">
                <div className="relative w-[64px] h-[64px]">
                  <div
                    className="w-[64px] h-[64px] rounded-2xl 
                      flex items-center justify-center
                      bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)]"
                  >
                    <FiFileText className="text-white w-[32px] h-[32px]" />
                  </div>
                  <div className="absolute -top-2 -right-4 ">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_dd_53_204)">
                        <path
                          d="M12 13.9961C12 7.37084 17.3708 2 23.9961 2C30.6214 2 35.9922 7.37084 35.9922 13.9961C35.9922 20.6214 30.6214 25.9922 23.9961 25.9922C17.3708 25.9922 12 20.6214 12 13.9961Z"
                          fill="#00C950"
                          shape-rendering="crispEdges"
                        />
                        <g clip-path="url(#clip0_53_204)">
                          <path
                            d="M23.9959 20.6579C27.6752 20.6579 30.6579 17.6752 30.6579 13.9959C30.6579 10.3166 27.6752 7.33398 23.9959 7.33398C20.3166 7.33398 17.334 10.3166 17.334 13.9959C17.334 17.6752 20.3166 20.6579 23.9959 20.6579Z"
                            stroke="white"
                            stroke-width="1.99859"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.998 13.9965L23.3304 15.3288L25.9952 12.6641"
                            stroke="white"
                            stroke-width="1.99859"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_dd_53_204"
                          x="0"
                          y="0"
                          width="47.9922"
                          height="47.9922"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="4"
                            operator="erode"
                            in="SourceAlpha"
                            result="effect1_dropShadow_53_204"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="3" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_53_204"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="3"
                            operator="erode"
                            in="SourceAlpha"
                            result="effect2_dropShadow_53_204"
                          />
                          <feOffset dy="10" />
                          <feGaussianBlur stdDeviation="7.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_dropShadow_53_204"
                            result="effect2_dropShadow_53_204"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_53_204"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_53_204">
                          <rect
                            width="15.9887"
                            height="15.9887"
                            fill="white"
                            transform="translate(16.002 6.00195)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <button
                  className="bg-[#4CAF501A] 
                 flex justify-center items-center gap-3 
                 text-[#4CAF50] rounded-2xl 
                 h-[24px] w-[68px] text-[12px] font-semibold"
                >
                  PULSUZ
                </button>
              </div>
              <span className="text-[20px] font-semibold">
                Stress Səviyyəsi Testi
              </span>
              <p className="text-[15px] font-normal text-[#6B7280] tracking-[0.2px]">
                Stress səviyyənizi qiymətləndirin və idarəetmə yollarını öyrənin
              </p>
              <div className="flex gap-[12px]">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#C8E6C980] flex items-center justify-center ">
                    <span className="flex items-center gap-2">
                      <IoMdTime className="text-[#4CAF50]" />5 dəqiqə
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#C8E6C980] flex items-center justify-center ">
                    <span className="flex items-center gap-2">
                      <FiFileText className="text-[#4CAF50]" />
                      15 sual
                    </span>
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200 "></div>
              <button
                className="bg-gradient-to-r from-[#4CAF50] via-[#65BA68] to-[#81C784] 
               flex justify-center items-center gap-3 
               text-white rounded-2xl h-[52px]"
              >
                Testə başla
                <FaArrowRightLong />
              </button>
            </div>
            <div className="w-full max-w-[389px] mx-auto h-auto border border-[#E0E0E0] bg-white rounded-3xl flex flex-col gap-5 p-6 md:p-10">
              <div className="flex justify-between items-start">
                <div className="relative w-[64px] h-[64px]">
                  <div
                    className="w-[64px] h-[64px] rounded-2xl 
                      flex items-center justify-center
                      bg-[linear-gradient(135deg,#4CAF50_0%,#81C784_100%)]"
                  >
                    <FiFileText className="text-white w-[32px] h-[32px]" />
                  </div>
                  <div className="absolute -top-2 -right-4 ">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_dd_53_204)">
                        <path
                          d="M12 13.9961C12 7.37084 17.3708 2 23.9961 2C30.6214 2 35.9922 7.37084 35.9922 13.9961C35.9922 20.6214 30.6214 25.9922 23.9961 25.9922C17.3708 25.9922 12 20.6214 12 13.9961Z"
                          fill="#00C950"
                          shape-rendering="crispEdges"
                        />
                        <g clip-path="url(#clip0_53_204)">
                          <path
                            d="M23.9959 20.6579C27.6752 20.6579 30.6579 17.6752 30.6579 13.9959C30.6579 10.3166 27.6752 7.33398 23.9959 7.33398C20.3166 7.33398 17.334 10.3166 17.334 13.9959C17.334 17.6752 20.3166 20.6579 23.9959 20.6579Z"
                            stroke="white"
                            stroke-width="1.99859"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.998 13.9965L23.3304 15.3288L25.9952 12.6641"
                            stroke="white"
                            stroke-width="1.99859"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_dd_53_204"
                          x="0"
                          y="0"
                          width="47.9922"
                          height="47.9922"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="4"
                            operator="erode"
                            in="SourceAlpha"
                            result="effect1_dropShadow_53_204"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="3" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_53_204"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="3"
                            operator="erode"
                            in="SourceAlpha"
                            result="effect2_dropShadow_53_204"
                          />
                          <feOffset dy="10" />
                          <feGaussianBlur stdDeviation="7.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_dropShadow_53_204"
                            result="effect2_dropShadow_53_204"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_53_204"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_53_204">
                          <rect
                            width="15.9887"
                            height="15.9887"
                            fill="white"
                            transform="translate(16.002 6.00195)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <button
                  className="bg-[#4CAF501A] 
                 flex justify-center items-center gap-3 
                 text-[#4CAF50] rounded-2xl 
                 h-[24px] w-[68px] text-[12px] font-semibold"
                >
                  PULSUZ
                </button>
              </div>
              <span className="text-[20px] font-semibold">
                Stress Səviyyəsi Testi
              </span>
              <p className="text-[15px] font-normal text-[#6B7280] tracking-[0.2px]">
                Stress səviyyənizi qiymətləndirin və idarəetmə yollarını öyrənin
              </p>
              <div className="flex gap-[12px]">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#C8E6C980] flex items-center justify-center ">
                    <span className="flex items-center gap-2">
                      <IoMdTime className="text-[#4CAF50]" />5 dəqiqə
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-medium rounded-xl w-[110px] h-[36px] bg-[#C8E6C980] flex items-center justify-center ">
                    <span className="flex items-center gap-2">
                      <FiFileText className="text-[#4CAF50]" />
                      15 sual
                    </span>
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200 "></div>
              <button
                className="bg-gradient-to-r from-[#4CAF50] via-[#65BA68] to-[#81C784] 
               flex justify-center items-center gap-3 
               text-white rounded-2xl h-[52px]"
              >
                Testə başla
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-semibold mb-5 tracking-[0.2px]">
            Bloq və Məqalələr
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
                  <span className="w-8 h-8 rounded-full bg-[#4CAF501A] text-[#4CAF50] flex justify-center items-center">
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
                  <span className="w-8 h-8 rounded-full bg-[#4CAF501A] text-[#4CAF50] flex justify-center items-center">
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
                  <span className="w-8 h-8 rounded-full bg-[#4CAF501A] text-[#4CAF50] flex justify-center items-center">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full pb-10">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 md:px-6 2xl:px-4">
          <div className="bg-gradient-to-br from-[#4CAF50] via-[#81C784] to-[#E8F5E9] rounded-[24px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-10 py-6 md:py-10 gap-6 items-center">
              {/* IMAGE */}
              <img
                className="w-full max-w-[495px] mx-auto h-[220px] sm:h-[300px] md:h-[380px] lg:h-[513px] rounded-[12px] object-cover"
                src={location}
                alt=""
              />

              {/* FORM */}
              <form className="bg-white w-full max-w-[495px] mx-auto rounded-[12px] p-4 md:p-6">
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#4CAF501A] text-[#4CAF50] text-lg md:text-xl flex justify-center items-center">
                    <LuCalendar />
                  </span>

                  <span className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold tracking-[0.2px]">
                    Online rezervasiya
                  </span>
                </div>

                <div className="flex flex-col gap-[10px] mt-5">
                  <label className="text-[14px] font-medium">
                    Psixoloq seçin
                  </label>
                  <input className="w-full h-[48px] md:h-[55px] bg-[#C8E6C94D] rounded-[16px]" />
                </div>

                <div className="flex flex-col gap-[10px] mt-5">
                  <label className="text-[14px] font-medium">Tarix seçin</label>
                  <input className="w-full h-[48px] md:h-[55px] bg-[#C8E6C94D] rounded-[16px]" />
                </div>

                <div className="flex flex-col gap-[10px] mt-5">
                  <label className="text-[14px] font-medium">Saat seçin</label>
                  <input className="w-full h-[48px] md:h-[55px] bg-[#C8E6C94D] rounded-[16px]" />
                </div>

                <button className="bg-[#4CAF50] text-[15px] md:text-[16px] font-semibold text-white w-full h-[48px] md:h-[56px] rounded-[16px] mt-7">
                  Mövcud saatları göstər
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

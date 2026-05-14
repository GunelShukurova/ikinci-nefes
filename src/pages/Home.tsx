import { FaArrowRight } from "react-icons/fa6";
import photo from "../assets/b38c660f0a8a06a0d16dc671632dc2945aadff93 (3).jpg";
import { MdArrowOutward } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";
import location from "../assets/c64634f190d431874d2b5548fcad4e8e6f0d2c60.jpg";
import image from "../assets/23494090d9b04e61694b8d1ac85e55051dd4b58b.jpg";
import { IoIosArrowForward } from "react-icons/io";


const Home = () => {
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
          İkinci Nəfəsinizi 
            </h1>

            <h2
              className="font-bold leading-[1.1] text-[36px] sm:text-[44px] lg:text-[60px] xl:text-[72px]"
              style={gradientText}
            >
          Tapın
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
              Uşaqlar və böyüklər üçün peşəkar psixoloji məsləhət. Təhlükəsiz,
              məxfi və effektiv terapiya xidmətləri ilə həyatınızı dəyişdirin.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <button className="h-[52px] sm:w-[194px] w-full rounded-2xl bg-[#4CAF50] text-white flex items-center justify-center gap-2">
                Seansa yazıl <IoIosArrowForward />
              </button>

              <button className="h-[52px] sm:w-[161px] w-full rounded-2xl border border-[#E0E0E0] bg-white font-semibold">
                Testə başla
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
              Haqqımızda
            </h3>

            <p className="text-[#6B7280] text-[16px] md:text-[18px] font-normal">
              Psixoloji sağlamlığınız üçün ən yaxşı seçim
            </p>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* IMAGE BLOCK */}
            <div className="w-full lg:w-[55%]">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={photo}
                  alt=""
                  className="w-full h-[260px] sm:h-[340px] md:h-[406px] object-cover shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]"
                />
              </div>
            </div>

            {/* RIGHT BLOCK */}
            <div className="w-full lg:w-[45%] flex flex-col gap-6">
              {/* TEXT */}
              <div>
                <h4 className="font-medium text-[22px] md:text-[24px] text-[#101828] mb-4">
                  Həqiqi insanlar, həqiqi nəticələr təqdim edirlər
                </h4>

                <p className="font-normal text-[15px] md:text-[16px] leading-[28px] text-[#4A5565]">
                  Psixologiya mərkəzimiz Azərbaycanda ən yüksək keyfiyyətli
                  psixoloji xidmətlər təqdim etməyi hədəf alıb. Komandamız
                  peşəkar psixoloq, psixoterapevt və məsləhətçilərdən ibarətdir.
                </p>
              </div>

              {/* CARD 1 */}
              <div className="flex items-start gap-4">
                <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                  <LuBrain className="text-[#4CAF50] w-[30px] h-[30px]" />
                </div>

                <div>
                  <h4 className="font-semibold text-[18px] text-[#101828] mb-2">
                    Fərdi Psixoterapiya
                  </h4>

                  <p className="text-[14px] md:text-[15px] leading-[24px] text-[#4A5565]">
                    Şəxsi inkişaf və emosional rifahınız üçün fərdi yanaşma ilə
                    peşəkar dəstək.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flex items-start gap-4">
                <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#4CAF500D] border-[7px] border-[#f0f8f1f0]">
                  <LuBrain className="text-[#4CAF50] w-[30px] h-[30px]" />
                </div>

                <div>
                  <h4 className="font-semibold text-[18px] text-[#101828] mb-2">
                    Fərdi Psixoterapiya
                  </h4>

                  <p className="text-[14px] md:text-[15px] leading-[24px] text-[#4A5565]">
                    Şəxsi inkişaf və emosional rifahınız üçün fərdi yanaşma ilə
                    peşəkar dəstək.
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button className="text-[14px] md:text-[16px] font-medium text-[#4CAF50]">
                  Ətraflı öyrən
                </button>

                <span className="text-xl flex items-center justify-center text-[#4CAF50]">
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
            Xidmətlərimiz
          </h4>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Sizin ehtiyaclarınıza uyğun psixoloji xidmətlər
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6 ">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
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
                {/* bottom glow */}

                <div
                  className="
      absolute inset-0 rounded-3xl pointer-events-none
      border-b-[2px] border-[#F7941D]
    "
                  style={{
                    boxShadow: "0 12px 0px -18px #F7941D inset",
                  }}
                ></div>
                <img
                  className="w-full h-[240px] rounded-[16px] aspect-[3/4] object-cover"
                  src="https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=UXPrlQx09d8EP4_kTdAa-vC2LxD_ppY1tiG7eTPGVbE="
                  alt="psychologist"
                />

                <div className="p-2 md:p-5 flex flex-col ">
                  <span className="text-[24px] md:text-[20px] font-semibold text-[#4CAF50]">
                    Ailə Terapiyası
                  </span>

                  <span className="text-[#6B7280] font-normal text-[12px] md:text-[16px]">
                    Şəxsi problemləriniz üçün
                  </span>

                  <div className="flex items-center justify-between gap-3 pt-5">
                    <button className="text-[14px] md:text-[16px] font-medium text-[#4CAF50]">
                      Ətraflı öyrən
                    </button>

                    <span className="w-[30px] h-[30px] rounded-full   bg-[#F8FCF8] flex items-center justify-center text-[#4CAF50]">
                      <MdArrowOutward />
                    </span>
                  </div>
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
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 py-10 md:py-14">
          {/* TITLE */}
          <h4 className="text-[24px] md:text-[40px] font-normal mb-3 tracking-[0.2px]">
            Mütəxəssislər
          </h4>
          <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px] mb-6">
            Sizin ehtiyaclarınıza uyğun psixoloji xidmətlər
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
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
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
                    Sertifikatlı
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-[16px] md:text-[18px] font-semibold">
                    Dr. Leyla Əliyeva
                  </h3>

                  <p className="text-[#4CAF50] text-sm mt-1">Klinik Psixoloq</p>

                  <span className="text-[#6B7280] text-sm mt-2">
                    12 il təcrübə
                  </span>

                  {/* BUTTON */}
                  <button className="mt-3 h-[44px] rounded-2xl border border-[#4CAF50] text-[#4CAF50] flex items-center justify-center gap-2 bg-[#F8FCF8] ">
                    Profilə bax
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
            Psixoloji Testlər
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Özünüzü daha yaxşı tanıyın və inkişaf yollarını müəyyənləşdirin
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="relative w-full max-w-[389px] mx-auto h-auto rounded-3xl overflow-hidden bg-white border border-gray-100 shadow p-6 md:p-10">
              {/* bottom orange accent (как ты показывал) */}
              <div
                className="
      absolute inset-0 rounded-3xl pointer-events-none
      border-b-[2px] border-[#F7941D]
    "
                style={{
                  boxShadow: "0 12px 0px -18px #F7941D inset",
                }}
              ></div>

              {/* content */}
              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex justify-between items-start">
                  <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                    <LuBrain className="text-[#4CAF50] w-[30px] h-[30px]" />
                  </div>

                  <button className="bg-[#4CAF501A] flex items-center justify-center gap-3 text-[#4CAF50] rounded-2xl h-[24px] w-[68px] text-[12px] font-semibold">
                    PULSUZ
                  </button>
                </div>

                <span className="text-[20px] font-semibold">
                  Stress Səviyyəsi Testi
                </span>

                <p className="text-[15px] font-normal text-[#6B7280] tracking-[0.2px]">
                  Stress səviyyənizi qiymətləndirin və idarəetmə yollarını
                  öyrənin
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
                  Testə başla
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="relative w-full max-w-[389px] mx-auto h-auto rounded-3xl overflow-hidden bg-white border border-gray-100 shadow p-6 md:p-10">
              {/* bottom orange accent (как ты показывал) */}
              <div
                className="
      absolute inset-0 rounded-3xl pointer-events-none
      border-b-[2px] border-[#F7941D]
    "
                style={{
                  boxShadow: "0 12px 0px -18px #F7941D inset",
                }}
              ></div>

              {/* content */}
              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex justify-between items-start">
                  <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                    <LuBrain className="text-[#4CAF50] w-[30px] h-[30px]" />
                  </div>

                  <button className="bg-[#4CAF501A] flex items-center justify-center gap-3 text-[#4CAF50] rounded-2xl h-[24px] w-[68px] text-[12px] font-semibold">
                    PULSUZ
                  </button>
                </div>

                <span className="text-[20px] font-semibold">
                  Stress Səviyyəsi Testi
                </span>

                <p className="text-[15px] font-normal text-[#6B7280] tracking-[0.2px]">
                  Stress səviyyənizi qiymətləndirin və idarəetmə yollarını
                  öyrənin
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
                  Testə başla
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="relative w-full max-w-[389px] mx-auto h-auto rounded-3xl overflow-hidden bg-white border border-gray-100 shadow p-6 md:p-10">
              {/* bottom orange accent (как ты показывал) */}
              <div
                className="
      absolute inset-0 rounded-3xl pointer-events-none
      border-b-[2px] border-[#F7941D]
    "
                style={{
                  boxShadow: "0 12px 0px -18px #F7941D inset",
                }}
              ></div>

              {/* content */}
              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex justify-between items-start">
                  <div className="min-w-[64px] h-[64px] rounded-2xl flex items-center justify-center bg-[#3593380c] border-[7px] border-[#f0f8f1f0]">
                    <LuBrain className="text-[#4CAF50] w-[30px] h-[30px]" />
                  </div>

                  <button className="bg-[#4CAF501A] flex items-center justify-center gap-3 text-[#4CAF50] rounded-2xl h-[24px] w-[68px] text-[12px] font-semibold">
                    PULSUZ
                  </button>
                </div>

                <span className="text-[20px] font-semibold">
                  Stress Səviyyəsi Testi
                </span>

                <p className="text-[15px] font-normal text-[#6B7280] tracking-[0.2px]">
                  Stress səviyyənizi qiymətləndirin və idarəetmə yollarını
                  öyrənin
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
                  Testə başla
                  <FaArrowRightLong />
                </button>
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
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
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
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            Aktual Xəbərlər
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Mental sağlamlıq və psixoloji rifahın təmin edilməsi üçün mütəmadi
              seminar və təlimlərimiz keçirilir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
            <div className="w-full max-w-[600px] mx-auto h-full flex flex-col relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] sm:h-[260px] md:h-[330px] object-cover"
                src="https://static.youngpostclub.com/article_image/sites/default/files/d8/images/canvas/2025/12/29/4fd0d437-cc46-467e-a727-5315920d66af_3abba7d0.jpg?image_process=image/resize,w_2180/crop,x_0,y_186,w_2179,h_1453/quality,Q_75"
                alt=""
              />

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="flex  flex-col gap-2 text-sm mt-2">
                    <span className="text-[24px] md:text-[24px] font-semibold tracking-[0.2px] text-[#F7941D]">
                      Stress və Anksiyete
                    </span>
                    <p className="text-[#364153] font-normal text-[14px]">
                      Gündəlik stress beyinə ciddi təsir göstərir və anksiyete
                      pozuntusu ilə nəticələnə bilər. 
                    </p>
                  </div>
                </div>

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
            <div className="w-full max-w-[600px] mx-auto h-full flex flex-col relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] sm:h-[260px] md:h-[330px] object-cover"
                src="https://static.youngpostclub.com/article_image/sites/default/files/d8/images/canvas/2025/12/29/4fd0d437-cc46-467e-a727-5315920d66af_3abba7d0.jpg?image_process=image/resize,w_2180/crop,x_0,y_186,w_2179,h_1453/quality,Q_75"
                alt=""
              />

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="flex  flex-col gap-2 text-sm mt-2">
                    <span className="text-[24px] md:text-[24px] font-semibold tracking-[0.2px] text-[#F7941D]">
                      Depressiya
                    </span>
                    <p className="text-[#364153] font-normal text-[14px]">
                      Depressiya ilə mübarizədə psixoloji dəstəyin rolu
                      əvəzolunmazdır. 
                    </p>
                  </div>
                </div>

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
            <div className="w-full max-w-[600px] mx-auto h-full flex flex-col relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] sm:h-[260px] md:h-[330px] object-cover"
                src="https://static.youngpostclub.com/article_image/sites/default/files/d8/images/canvas/2025/12/29/4fd0d437-cc46-467e-a727-5315920d66af_3abba7d0.jpg?image_process=image/resize,w_2180/crop,x_0,y_186,w_2179,h_1453/quality,Q_75"
                alt=""
              />

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="flex  flex-col gap-2 text-sm mt-2">
                    <span className="text-[24px] md:text-[24px] font-semibold tracking-[0.2px] text-[#F7941D]">
                      Stress və Anksiyete
                    </span>
                    <p className="text-[#364153] font-normal text-[14px]">
                      Gündəlik stress beyinə ciddi təsir göstərir və anksiyete
                      pozuntusu ilə nəticələnə bilər. 
                    </p>
                  </div>
                </div>

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
            <div className="w-full max-w-[600px] mx-auto h-full flex flex-col relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                className="w-full h-[220px] sm:h-[260px] md:h-[330px] object-cover"
                src="https://static.youngpostclub.com/article_image/sites/default/files/d8/images/canvas/2025/12/29/4fd0d437-cc46-467e-a727-5315920d66af_3abba7d0.jpg?image_process=image/resize,w_2180/crop,x_0,y_186,w_2179,h_1453/quality,Q_75"
                alt=""
              />

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="flex  flex-col gap-2 text-sm mt-2">
                    <span className="text-[24px] md:text-[24px] font-semibold tracking-[0.2px] text-[#F7941D]">
                      Depressiya
                    </span>
                    <p className="text-[#364153] font-normal text-[14px]">
                      Depressiya ilə mübarizədə psixoloji dəstəyin rolu
                      əvəzolunmazdır. 
                    </p>
                  </div>
                </div>

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
      <section className="bg-[#F8F8F9] w-full pb-10">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 md:px-6 2xl:px-4">
          <div className=" rounded-[24px]">
            {/* GRID FIX */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-4 md:px-6 lg:px-10 py-6 md:py-8 lg:py-10">
              {/* IMAGE */}
           
              {/* FORM */}
              <form className="bg-white w-full rounded-[12px] p-4 md:p-6">
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#4CAF501A] text-[#4CAF50] flex items-center justify-center">
                    <LuCalendar />
                  </span>

                  <span className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
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
                  <label className="text-[14px] font-medium">Tarix və saat seçin</label>
                  <input className="w-full h-[48px] md:h-[55px] bg-[#C8E6C94D] rounded-[16px]" />
                </div>

                <div className="flex flex-col gap-[10px] mt-5">
                  <label className="text-[14px] font-medium">Telefon</label>
                  <input className="w-full h-[48px] md:h-[55px] bg-[#C8E6C94D] rounded-[16px]  text-md px-3" placeholder="+994 50 555 55 55"/>
                </div>

                <button className="bg-[#4CAF50] text-white w-full h-[48px] md:h-[56px] rounded-[16px] mt-7">
                  Mövcud saatları göstər
                </button>
              </form>
                 <img
                className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[513px] rounded-[12px] object-cover"
                src={location}
                alt=""
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import photo from "../assets/826bbec161d35d870c840383173f57f09e485ecd.jpg";
import photo2 from "../assets/61dde147b925875272f6ca80d9801613c3e45e00.png";
import { useEffect, useState } from "react";
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
              Peşəkar Psixoloji Mərkəz
            </h1>

            <div className="text-[16px] md:text-[17px] lg:text-[18px] text-[#364153] leading-[24px] lg:leading-[28px] border-l-2 pl-3 border-l-[#F7941D] tracking-[0.2px] max-w-[503px] font-normal">
              <p>
                İkinci Nəfəs Psixologiya Mərkəzi olaraq missiyamız hər kəsə
                keyfiyyətli və əlçatan psixoloji xidmətlər təqdim etməkdir. Biz
                insanların psixoloji sağlamlığını qorumaq üçün çalışırıq.
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
            Dəyərlərimiz
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#4A5565] tracking-[0.2px] font-normal">
              Hər gün işimizdə rəhbər tutduğumuz əsas prinsiplər
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* LEFT */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col w-full min-h-[180px] gap-5 p-6 bg-white rounded-[24px] border border-[#E0E0E0]">
                <span className="text-[22px] md:text-[24px] font-normal text-[#4CAF50]">
                  Məxfilik
                </span>

                <p className="text-[15px] md:text-[16px] font-normal text-[#364153] leading-[24px]">
                  Hər bir müştərimizin şəxsi məlumatları və sessiyaları tam
                  təhlükəsiz və konfidensialdır.
                </p>
              </div>

              <div className="flex flex-col w-full min-h-[180px] gap-5 p-6 bg-white rounded-[24px] border border-[#E0E0E0]">
                <span className="text-[22px] md:text-[24px] font-normal text-[#4CAF50]">
                  Empatiya
                </span>

                <p className="text-[15px] md:text-[16px] font-normal text-[#364153] leading-[24px]">
                  Hər kəsin unikal ehtiyaclarını anlayır və dəstək göstəririk.
                </p>
              </div>
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
              <div className="flex flex-col w-full min-h-[180px] gap-5 p-6 bg-white rounded-[24px] border border-[#E0E0E0]">
                <span className="text-[22px] md:text-[24px] font-normal text-[#4CAF50]">
                  Nəticə Yönümlülük
                </span>

                <p className="text-[15px] md:text-[16px] font-normal text-[#364153] leading-[24px]">
                  Hər müştərimizin real və davamlı dəyişikliklər əldə etməsinə
                  çalışırıq.
                </p>
              </div>

              <div className="flex flex-col w-full min-h-[180px] gap-5 p-6 bg-white rounded-[24px] border border-[#E0E0E0]">
                <span className="text-[22px] md:text-[24px] font-normal text-[#4CAF50]">
                  Peşəkarlıq
                </span>

                <p className="text-[15px] md:text-[16px] font-normal text-[#364153] leading-[24px]">
                  Yalnız lisenziyalı və təcrübəli psixoloqlarla çalışırıq.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 py-[32px]">
          {/* HEADER */}
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            Komandamız
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#4A5565] tracking-[0.2px]">
              Təcrübəli və empatik psixoloqlarımız sizin yanınızdadır
            </p>
          </div>

          {/* TOP CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* CARD */}
            <div className="relative w-full h-full p-6 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow flex flex-col">
              <img
                className="w-full h-[260px] md:h-[340px] lg:h-[420px] object-cover rounded-[24px]"
                src="https://img.freepik.com/free-photo/young-business-woman-working-laptop-office_1303-22814.jpg"
                alt="psychologist"
              />

              <div className="p-2 md:p-5 flex flex-col gap-2">
                <span className="text-[18px] md:text-[24px] font-semibold">
                  Təsisçi
                </span>

                <span className="text-[16px] md:text-[20px] font-medium">
                  Dr. Aynur Həsənova
                </span>

                <p className="text-[15px] md:text-[17px] text-[#6B7280] font-normal leading-[24px]">
                  20 illik təcrübə ilə Azərbaycanda psixologiya sahəsində
                  aparıcı mütəxəssislərdən biri. İkinci Nəfəs Psixologiya
                  Mərkəzini 2020-ci ildə yaradıb 2500+ insana kömək edib.
                </p>
              </div>
            </div>

            {/* CARD */}
            <div className="relative w-full h-full p-6 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow flex flex-col">
              <img
                className="w-full h-[260px] md:h-[340px] lg:h-[420px] object-cover rounded-[24px]"
                src="https://img.freepik.com/free-photo/young-business-woman-working-laptop-office_1303-22814.jpg"
                alt="psychologist"
              />

              <div className="p-2 md:p-5 flex flex-col gap-2">
                <span className="text-[18px] md:text-[24px] font-semibold">
                  Baş Psixoloq
                </span>

                <span className="text-[16px] md:text-[20px] font-medium">
                  Dr. Aynur Həsənova
                </span>

                <p className="text-[15px] md:text-[17px] text-[#6B7280] font-normal leading-[24px]">
                  20 illik təcrübə ilə Azərbaycanda psixologiya sahəsində
                  aparıcı mütəxəssislərdən biri. İkinci Nəfəs Psixologiya
                  Mərkəzini 2020-ci ildə yaradıb 2500+ insana kömək edib.
                </p>
              </div>
            </div>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
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
                    Sertifikatlı
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-[16px] md:text-[18px] font-semibold mt-2">
                    Dr. Leyla Əliyeva
                  </h3>

                  <p className="text-[#4CAF50] text-sm mt-1">Klinik Psixoloq</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            Gələcək Tədbirlər
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Mental sağlamlıq və psixoloji rifahın təmin edilməsi üçün mütəmadi
              seminar və təlimlərimiz keçirilir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-full mx-auto relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 flex flex-col"
              >
                <img
                  className="w-full h-[180px] sm:h-[200px] object-cover"
                  src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_82_standard-3.jpg"
                  alt=""
                />

                <div className="p-5 flex flex-col flex-1 gap-2">
                  <span className="text-[16px] md:text-[18px] font-medium tracking-[0.2px]">
                    Uşaqlarda emosional inkişaf
                  </span>

                  <span className="text-[#F7941D] text-[14px] md:text-[16px] font-bold">
                    Vebinar
                  </span>

                  <span className="text-[13px] md:text-[14px] font-medium text-[#6B7280]">
                    15/05/2026 19:00
                  </span>

                  <p className="text-[13px] md:text-[15px] font-normal text-[#6B7280]">
                    Uşaqlarda emosional inkişafın necə formalaşdığı və valideyn
                    davranışlarının uşağın psixologiyasına təsiri mövzusunda
                    tövsiyələr.
                  </p>

                  <div className="mt-auto pt-4">
                    <button className="w-full h-[44px] rounded-2xl border border-[#4CAF50] text-[#4CAF50] flex items-center justify-center gap-2 bg-[#F8FCF8]">
                      Ətraflı bax
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
              {/* ITEM */}
              <div className="flex flex-col items-center text-center border-t-4 border-t-[#F7941D] pt-4">
                <span className="text-[40px] md:text-[56px] font-bold text-[#364153] min-h-[60px] md:min-h-[84px]">
                  <StatCounter end={12} duration={2} start={inView} />
                </span>

                <span className="text-[14px] font-normal text-[#4A5565]">
                  İl təcrübə
                </span>
              </div>

              {/* ITEM */}
              <div className="flex flex-col items-center text-center border-t-4 border-t-[#F7941D] pt-4">
                <span className="text-[40px] md:text-[56px] font-bold text-[#364153] min-h-[60px] md:min-h-[84px]">
                  <StatCounter end={1500} duration={2.5} start={inView} />+
                </span>

                <span className="text-[14px] font-normal text-[#4A5565]">
                  Uğurlu müalicə
                </span>
              </div>

              {/* ITEM */}
              <div className="flex flex-col items-center text-center border-t-4 border-t-[#F7941D] pt-4">
                <span className="text-[40px] md:text-[56px] font-bold text-[#364153] min-h-[60px] md:min-h-[84px]">
                  <StatCounter end={8} duration={2} start={inView} />
                </span>

                <span className="text-[14px] font-normal text-[#4A5565]">
                  Peşəkar psixoloq
                </span>
              </div>

              {/* ITEM */}
              <div className="flex flex-col items-center text-center border-t-4 border-t-[#F7941D] pt-4">
                <span className="text-[40px] md:text-[56px] font-bold text-[#364153] min-h-[60px] md:min-h-[84px]">
                  <StatCounter end={95} duration={2.5} start={inView} />%
                </span>

                <span className="text-[14px] font-normal text-[#4A5565]">
                  Müştəri məmnuniyyəti
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import photo from "../assets/a69e2642a3ee6efacf57bffd10d1edfec884786b.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { FaTv } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const Services1 = () => {
  return (
    <>
   <section className="relative min-h-[400px] sm:min-h-[450px] lg:h-[498px] w-full overflow-hidden">
  
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${photo})` }}
  />

  <div className="absolute inset-0 bg-[#4CAF5021]" />

<div
  className="relative z-10 
    px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26
    py-10 sm:py-12 lg:py-25
    flex flex-col gap-6"
>
    <h1 className="font-medium 
      text-[28px] sm:text-[40px] lg:text-[72px] 
      text-white leading-tight">
      Depressiya Müalicəsi
    </h1>

    <p className="text-[14px] sm:text-[16px] lg:text-[24px] 
      text-white max-w-[1000px] w-full leading-relaxed">
      Depressiya sadəcə kəmiyyət deyil, ciddi ruhi sağlamlıq problemidir.
      Bizim mütəxəssislərimiz sizə depressiyanın üzərindən gəlməyə və
      həyatınıza yenidən məna tapmağa kömək edirlər.
    </p>
  </div>

</section>
    <section className="bg-[#F8F8F9] py-8 sm:py-10">
  <div className="max-w-[1232px] w-full min-h-[253px] bg-white mx-auto rounded-[24px] 
    px-4 sm:px-6 lg:px-10 
    pt-8 sm:pt-10 lg:pt-12 
    pb-6 
    flex flex-col gap-4 sm:gap-6 
    shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.12)]">

    <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] font-medium">
      Xidmət Haqqında
    </h2>

    <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#364153] leading-relaxed">
      Depressiya fərdi psixoterapiya, dəstək və strukturlaşdırılmış
      müalicə planı ilə uğurla müalicə oluna bilər. Bizim yanaşmamız
      Kognitiv-Davranış Terapiyası, İnterpersonal Terapiya və Mindfulness
      əsaslı üsulları birləşdirir. Siz öyrənəcəksiniz mənfi düşüncə
      tərzlərini dəyişməyi, emosional tənzimləmə bacarıqlarını inkişaf
      etdirməyi və gündəlik həyatda aktivliyi artırmağı.
    </p>

  </div>
</section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[52px] md:px-6 2xl:px-4 ">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            Bu Xidmət Kimlər Üçündür?
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px]">
              Aşağıdakı vəziyyətlərdən hər hansı biri sizə aiddirsə, bu xidmət
              sizə kömək edə bilər
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-7">
            <div className="flex items-center gap-[8px] h-[96px] bg-white p-[24px] rounded-[24px] shadow-[0px_20px_25px_-5px_#0000001A]">
              <div className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#4CAF50] via-[#47A74B] to-[#43A047]  ">
                <IoMdCheckmarkCircleOutline className="text-white w-[32px] h-[32px]" />
              </div>
              <p className="font-normal text-[16px] text-[#364153]">
                Əvvəllər zövq aldığınız şeylərdən maraq itkisi
              </p>
            </div>
            <div className="flex items-center gap-[8px] h-[96px] bg-white p-[24px] rounded-[24px] shadow-[0px_20px_25px_-5px_#0000001A]">
              <div className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#4CAF50] via-[#47A74B] to-[#43A047]  ">
                <IoMdCheckmarkCircleOutline className="text-white w-[32px] h-[32px]" />
              </div>
              <p className="font-normal text-[16px] text-[#364153]">
                Əvvəllər zövq aldığınız şeylərdən maraq itkisi
              </p>
            </div>
            <div className="flex items-center gap-[8px] h-[96px] bg-white p-[24px] rounded-[24px] shadow-[0px_20px_25px_-5px_#0000001A]">
              <div className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#4CAF50] via-[#47A74B] to-[#43A047]  ">
                <IoMdCheckmarkCircleOutline className="text-white w-[32px] h-[32px]" />
              </div>
              <p className="font-normal text-[16px] text-[#364153]">
                Əvvəllər zövq aldığınız şeylərdən maraq itkisi
              </p>
            </div>
            <div className="flex items-center gap-[8px] h-[96px] bg-white p-[24px] rounded-[24px] shadow-[0px_20px_25px_-5px_#0000001A]">
              <div className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#4CAF50] via-[#47A74B] to-[#43A047]  ">
                <IoMdCheckmarkCircleOutline className="text-white w-[32px] h-[32px]" />
              </div>
              <p className="font-normal text-[16px] text-[#364153]">
                Əvvəllər zövq aldığınız şeylərdən maraq itkisi
              </p>
            </div>
            <div className="flex items-center gap-[8px] h-[96px] bg-white p-[24px] rounded-[24px] shadow-[0px_20px_25px_-5px_#0000001A]">
              <div className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#4CAF50] via-[#47A74B] to-[#43A047]  ">
                <IoMdCheckmarkCircleOutline className="text-white w-[32px] h-[32px]" />
              </div>
              <p className="font-normal text-[16px] text-[#364153]">
                Əvvəllər zövq aldığınız şeylərdən maraq itkisi
              </p>
            </div>
            <div className="flex items-center gap-[8px] h-[96px] bg-white p-[24px] rounded-[24px] shadow-[0px_20px_25px_-5px_#0000001A]">
              <div className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#4CAF50] via-[#47A74B] to-[#43A047]  ">
                <IoMdCheckmarkCircleOutline className="text-white w-[32px] h-[32px]" />
              </div>
              <p className="font-normal text-[16px] text-[#364153]">
                Əvvəllər zövq aldığınız şeylərdən maraq itkisi
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[32px] md:px-6 2xl:px-4 ">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            Terapiya Prosesində Nə Gözləmək Olar?
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#4A5565] tracking-[0.2px]">
              Addım-addım sizi gözləyən terapiya yolculuğu
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col gap-[16px] p-[24px] h-[185px] bg-white rounded-[24px] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
              <span className="text-[30px] font-light text-[#4CAF50] ">01</span>
              <p className="text-[16px] font-normal text-[#4A5565]">
                Təhlükəsiz və dəstəkləyici mühit
              </p>
            </div>
            <div className="flex flex-col gap-[16px] p-[24px] h-[185px] bg-white rounded-[24px] shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]">
              <span className="text-[30px] font-light text-[#4CAF50] ">02</span>
              <p className="text-[16px] font-normal text-[#4A5565]">
                Depressiyanın təzahürlərinin dərindən araşdırılmasıici mühit
              </p>
            </div>
            <div className="flex flex-col gap-[16px] p-[24px] h-[185px] bg-white rounded-[24px] shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]">
              <span className="text-[30px] font-light text-[#4CAF50] ">03</span>
              <p className="text-[16px] font-normal text-[#4A5565]">
                Depressiyanın təzahürlərinin dərindən araşdırılmasıici mühit
              </p>
            </div>
            <div className="flex flex-col gap-[16px] p-[24px] h-[185px] bg-white rounded-[24px] shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]">
              <span className="text-[30px] font-light text-[#4CAF50] ">04</span>
              <p className="text-[16px] font-normal text-[#4A5565]">
                Depressiyanın təzahürlərinin dərindən araşdırılmasıici mühit
              </p>
            </div>
            <div className="flex flex-col gap-[16px] p-[24px] h-[185px] bg-white rounded-[24px] shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]">
              <span className="text-[30px] font-light text-[#4CAF50] ">05</span>
              <p className="text-[16px] font-normal text-[#4A5565]">
                Depressiyanın təzahürlərinin dərindən araşdırılmasıici mühit
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[32px] md:px-6 2xl:px-4 ">
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px]">
            Sessiya Formatı
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#4A5565] tracking-[0.2px]">
              Özünüzə uyğun sessiya formatını seçin
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px] mt-10">
            <div className="w-full h-auto flex flex-col gap-3 bg-white rounded-4xl p-[24px]  shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]">
              <div className="flex items-center gap-[12px]">
                <div className="bg-gradient-to-br from-[#4CAF50] to-[#43A047] w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-[16px] flex justify-center items-center">
                  <span className="text-white text-2xl md:text-3xl">
                    <SlLocationPin />
                  </span>
                </div>

                <span className="text-[22px] md:text-[30px] font-medium">
                  Ofis Sessiyası
                </span>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] text-[#364153] mt-4 md:mt-4 leading-relaxed">
                  Rahat və arxayın mühitdə şəxsi sessiya
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[16px] font-medium rounded-xl  flex items-center justify-center ">
                    <span className="flex items-center gap-2 text-[#364153]">
                      <IoMdTime className="text-[#4CAF50]" />
                      50 dəqiqə
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-3 bg-white rounded-4xl p-[24px]  shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A]">
              <div className="flex items-center gap-[12px]">
                <div className="bg-gradient-to-br from-[#4CAF50] to-[#43A047] w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-[16px] flex justify-center items-center">
                  <span className="text-white text-2xl md:text-3xl">
                    <FaTv />
                  </span>
                </div>

                <span className="text-[22px] md:text-[30px] font-medium">
                  Online Sessiya
                </span>
              </div>

              <p className="text-[18px] md:text-[18px] text-[#364153] mt-4 md:mt-4 leading-relaxed">
                Təhlükəsiz video platformada konfidensial görüş
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-medium rounded-xl  flex items-center justify-center ">
                  <span className="flex items-center gap-2 text-[#364153]">
                    <IoMdTime className="text-[#4CAF50]" />
                    50 dəqiqə
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
 <section className="bg-[#F8F8F9] py-8 px-4">
  <div className="max-w-[1232px] w-full mx-auto 
    bg-white rounded-[24px] 
    shadow-[0px_20px_25px_-12px_#0000001A] 
    flex flex-col gap-6 sm:gap-[32px] 
    py-8 sm:py-[32px] 
    items-center text-center">

    <h4 className="font-medium text-[24px] sm:text-[28px] md:text-[32px]">
      İlk Addımı <span className="text-[#4CAF50]">Atın</span>
    </h4>

    <p className="text-[14px] sm:text-[18px] md:text-[20px] font-medium text-[#4A5565] 
      max-w-[671px] w-full px-2 sm:px-0">
      Psixoloqlarımızla görüşün və özünüzə uyğun terapiya planı qurub
      dəyişikliyə başlayın
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-[24px] w-full justify-center px-4 sm:px-0">

      <button className="flex w-full sm:w-[230px] h-[56px] sm:h-[71px] 
        justify-center items-center gap-2 
        text-[16px] sm:text-[18px] 
        rounded-[14px] 
        bg-gradient-to-r from-[#4CAF50] via-[#47A74B] to-[#43A047] 
        text-white 
        shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">

        <FiCalendar />
        <span>Seansa yazıl</span>
      </button>

      <button className="flex w-full sm:w-[230px] h-[56px] sm:h-[71px] 
        justify-center items-center gap-2 
        text-[16px] sm:text-[18px] 
        border border-[#4CAF50] 
        rounded-[14px] 
        shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">

        <span className="text-[#4CAF50]">+994 12 345 67 89</span>
      </button>

    </div>

    {/* FOOTER INFO */}
    <div className="border-t border-[#E5E7EB] w-full pt-5 flex flex-col items-center gap-3 px-4">

      <span className="text-[#4A5565] text-[14px] sm:text-[16px]">
        Sualınız var?
      </span>

      <span className="text-[#4CAF50] text-[16px] sm:text-[18px] font-medium">
        info@psixologiya.az
      </span>

    </div>

  </div>
</section>
    </>
  );
};

export default Services1;

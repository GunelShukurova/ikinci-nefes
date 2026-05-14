import { FaArrowRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";



const Specialists = () => {
  return (
    <>
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


<section className="bg-[#F8F8F9] w-full pb-10">
  <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 py-8 md:py-14 bg-[#EDF7EE] rounded-2xl">
    
    <div className="flex flex-col items-center justify-center gap-6 md:gap-[32px] mt-6 md:mt-10 text-center">
      
      <h3 className="font-medium text-[18px] sm:text-[20px] md:text-[24px] text-[#364153] leading-[28px] md:leading-[32px]">
        Hazırsınız? İlk addımı atmaq üçün seansa yazılın
      </h3>

      <button className="text-white w-[161px] h-[48px] bg-gradient-to-r from-[#4CAF50] via-[#46A54A] to-[#43A047] rounded-[12px]">
        Seansa yazıl
      </button>

    </div>

  </div>
</section>
      </>
  )
}

export default Specialists

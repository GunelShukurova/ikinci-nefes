const Blog1 = () => {
  return (
    <>
      <section className="bg-[#F8F8F9] w-full">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto h-auto px-4 py-[32px] md:px-6 2xl:px-4">
          
          <h4 className="text-[28px] md:text-[40px] font-normal mb-5 tracking-[0.2px] text-[#364153] leading-[120%]">
            Uşaqlarla Effektiv Ünsiyyət
          </h4>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-[16px] md:text-[18px] text-[#6B7280] tracking-[0.2px] leading-[28px]">
              Valideynlər üçün uşaqlarla sağlam əlaqə qurmaq və onları başa
              düşmək yolları
            </p>
          </div>

        </div>
      </section>

      <section className="bg-[#F8F8F9] w-full pb-10">
        <div className="max-w-[1232px] 2xl:max-w-[1400px] w-full mx-auto px-4 md:px-6 2xl:px-4">
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* IMAGE */}
            <div className="w-full lg:w-1/2">
              <img
                className="w-full h-[260px] sm:h-[320px] md:h-[408px] rounded-[24px] object-cover"
                src="https://dss.mo.gov/child-support/img/custodial-parents-tile.png"
                alt=""
              />
            </div>

            {/* CONTENT */}
            <div className="w-full max-w-[600px]">
              
              <h1 className="text-[#F7941D] font-medium text-[24px] md:text-[32px] leading-[120%]">
                Uşaqlarda Emosional İnkişaf
              </h1>

              <h2 className="font-medium text-[18px] md:text-[20px] text-[#364153] mt-3">
                Müasir dünyada stress və narahatlıq həyatımızın ayrılmaz
                hissəsinə çevrilib
              </h2>

              <p className="text-[16px] md:text-[18px] font-normal text-[#364153] mt-2 leading-[28px]">
                Uşaqlıq dövründə formalaşan emosional təcrübələr gələcək
                davranış və ünsiyyət bacarıqlarına təsir edir. Sevgi və
                təhlükəsizlik hissi uşağın psixoloji inkişafının əsasını təşkil
                edir.
              </p>

              <h2 className="font-medium text-[18px] md:text-[20px] text-[#364153] mt-5">
                Valideyn Dəstəyinin Rolu
              </h2>

              <p className="text-[16px] md:text-[18px] font-normal text-[#364153] mt-2 leading-[28px]">
                Valideynin anlayışlı və dəstəkləyici münasibəti uşağın özünü
                ifadə etməsini asanlaşdırır. Müsbət ünsiyyət emosional güvən
                hissini artırır.
              </p>

              <h2 className="font-medium text-[18px] md:text-[20px] text-[#364153] mt-5">
                Valideyn Dəstəyinin Rolu
              </h2>

              <p className="text-[16px] md:text-[18px] font-normal text-[#364153] mt-2 leading-[28px]">
                Valideynin anlayışlı və dəstəkləyici münasibəti uşağın özünü
                ifadə etməsini asanlaşdırır. Müsbət ünsiyyət emosional güvən
                hissini artırır.
              </p>

            </div>
          </div>

          {/* BLOCK */}
          <div className="mt-6">
            
            <h2 className="font-medium text-[18px] md:text-[20px] text-[#364153] mt-1 leading-[130%]">
              Müasir dünyada stress və narahatlıq həyatımızın ayrılmaz hissəsinə
              çevriliErkən Yaş Dövrünün Əhəmiyyəti
            </h2>

            <p className="text-[16px] md:text-[18px] font-normal text-[#364153] mt-2 leading-[28px]">
              Uşaqlıq dövründə formalaşan emosional təcrübələr gələcək davranış
              və ünsiyyət bacarıqlarına təsir edir. Sevgi və təhlükəsizlik hissi
              uşağın psixoloji inkişafının əsasını təşkil edir.
            </p>

          </div>

          {/* BLOCK */}
          <div className="mt-6">
            
            <h2 className="font-medium text-[18px] md:text-[20px] text-[#364153] mt-1">
              Valideyn Dəstəyinin Rolu
            </h2>

            <p className="text-[16px] md:text-[18px] font-normal text-[#364153] leading-[28px] mt-2">
              Valideynin anlayışlı və dəstəkləyici münasibəti uşağın özünü ifadə
              etməsini asanlaşdırır. Müsbət ünsiyyət emosional güvən hissini
              artırır.
            </p>

          </div>

          {/* BLOCK */}
          <div className="mt-6">
            
            <h2 className="font-medium text-[18px] md:text-[20px] text-[#364153] mt-1">
              Sosial Bacarıqların Formalaşması
            </h2>

            <p className="text-[16px] md:text-[18px] font-normal text-[#364153] leading-[28px] mt-2">
              Oyun, ünsiyyət və kollektiv fəaliyyətlər uşaqlarda empatiya və
              emosional idarəetmə bacarıqlarını inkişaf etdirir. Bu proses
              sosial adaptasiyada mühüm rol oynayır.
            </p>

          </div>

        </div>
      </section>
    </>
  );
};

export default Blog1;
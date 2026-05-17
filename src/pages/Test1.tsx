import { useState } from "react";

const questions = [
  {
    question: "Gün ərzində özünü gərgin hiss edirsənmi?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "Yuxuya getməkdə çətinlik yaşayırsan?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "Səbəbsiz narahatlıq hiss edirsən?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "Kiçik problemlər səni tez əsəbiləşdirir?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "Özünü tez yorğun hiss edirsən?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "Fikirlərini cəmləməkdə çətinlik çəkirsən?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "Ürək döyüntülərinin artdığını hiss edirsən?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "İstirahət etsən də rahatlamırsan?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "Gündəlik işlər sənə çətin gəlir?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
  {
    question: "Özünü tez stress altında hiss edirsən?",
    options: ["Heç vaxt", "Bəzən", "Tez-tez", "Hər zaman"],
  },
];

const scoreMap = {
  "Heç vaxt": 0,
  Bəzən: 1,
  "Tez-tez": 2,
  "Hər zaman": 3,
};

const Test1 = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [lang, setLang] = useState("AZ");
  const handleNext = () => {
    if (!selected) return;

    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);

    setSelected(null);
    setCurrent((prev) => prev + 1);
  };

  const handleBack = () => {
    if (current === 0) return;

    setCurrent((prev) => prev - 1);
    setSelected(answers[current - 1] || null);
  };

  // 🔥 RESULT MODE
  if (current === questions.length) {
    const totalScore = answers.reduce(
      (acc, item) => acc + (scoreMap[item] || 0),
      0,
    );

    const maxScore = questions.length * 3;

    const percent = (totalScore / maxScore) * 100;

    let levelText = "";
    let levelColor = "";
    let levelDescription = "";

    if (percent < 30) {
      levelText = "Aşağı Stress Səviyyəsi";
      levelColor = "#4CAF50";
      levelDescription =
        "Stress səviyyəniz aşağıdır. Emosional balansınız yaxşı görünür. Hazırkı həyat ritminiz sağlamdır və əlavə müdaxilə tələb etmir.";
    } else if (percent < 70) {
      levelText = "Orta Stress Səviyyəsi";
      levelColor = "#FF9800";
      levelDescription =
        "Orta səviyyəli stress əlamətləri müşahidə olunur. Gündəlik gərginlik ola bilər. İstirahətə və emosional balansı qorumağa diqqət edin.";
    } else {
      levelText = "Yüksək Stress Səviyyəsi";
      levelColor = "#F44336";
      levelDescription =
        "Yüksək stress səviyyəsi aşkarlandı. Bu, emosional və fiziki yüklənmənin göstəricisi ola bilər. Psixoloqla məsləhətləşmək tövsiyə olunur.";
    }
    // 🔥 CIRCLE CALC
    const radius = 60;
    const stroke = 10;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = 2 * Math.PI * normalizedRadius;

    const strokeDashoffset = circumference - (percent / 100) * circumference;

    return (
      <>
        <section className="bg-[#F8FAF8] w-full">
          <div className="max-w-[640px] mx-auto py-[32px] md:py-[52px] px-4">
            {/* HEADER */}
            <div className="flex justify-center flex-col items-center text-center">
              <h2 className="text-[26px] md:text-[40px] font-normal text-[#364153] mb-2 md:mb-4">
                Psixi Test Nəticəniz
              </h2>
              <span className="text-[14px] md:text-[18px] text-[#6B7280]">
                Stress Testi
              </span>
            </div>

            {/* RESULT CARD */}
            <div className="bg-[#F8FAF8] p-4 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* CIRCLE */}
              <div className="flex flex-col items-center justify-center w-full max-w-[200px] sm:max-w-[200px]">
                <svg
                  viewBox="0 0 140 140"
                  className="w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[140px] md:h-[140px]"
                >
                  <circle
                    stroke="#E5E7EB"
                    fill="transparent"
                    strokeWidth={10}
                    r={60}
                    cx={70}
                    cy={70}
                  />

                  <circle
                    stroke={levelColor}
                    fill="transparent"
                    strokeWidth={10}
                    strokeLinecap="round"
                    r={60}
                    cx={70}
                    cy={70}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "50% 50%",
                      transition: "stroke-dashoffset 0.6s ease",
                    }}
                  />

                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy="0.3em"
                    fontSize="18"
                    fontWeight="bold"
                    fill={levelColor}
                  >
                    {Math.round(percent)}%
                  </text>
                </svg>

                <div
                  className="mt-3 px-4 h-[40px] md:h-[48px] flex items-center justify-center text-xs md:text-sm font-medium rounded-full"
                  style={{
                    backgroundColor: levelColor + "20",
                    color: levelColor,
                  }}
                >
                  {levelText}
                </div>
              </div>

              {/* TEXT */}
              <div className="text-center md:text-left">
                <h3
                  className="text-[24px] md:text-[42px] font-bold"
                  style={{ color: levelColor }}
                >
                  {levelText}
                </h3>

                <span className="text-[14px] md:text-[18px] text-[#6B7280]">
                  Bal: {totalScore} / {maxScore}
                </span>

                <h4 className="text-[18px] md:text-[20px] font-semibold text-[#364153] mt-3 md:mt-4">
                  Psixoloji Analiz
                </h4>

                <p className="text-[14px] md:text-[17px] text-[#6B7280] mt-2">
                  {levelDescription}
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center mt-6">
              {/* RESTART BUTTON */}
              <button
                onClick={() => {
                  setCurrent(0);
                  setAnswers([]);
                  setSelected(null);
                }}
                className="w-full md:w-[174px] h-[44px] md:h-[48px] text-[#FF9800] text-[14px] md:text-[16px] font-medium border border-[#FF9800] bg-white rounded-[12px]"
              >
                Testi Yenidən Et
              </button>

              <button className="w-full md:w-[247px] h-[44px] md:h-[48px] bg-[#4CAF50] text-[14px] md:text-[16px] font-medium text-white rounded-[12px]">
                Psixoloqla Görüş Təyin Et
              </button>
            </div>
          </div>
        </section>
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
                      className={`text-[14px] hover:cursor-pointer  font-normal min-w-[120px] h-[40px] rounded-[12px] border transition
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
                      className={`text-[14px] font-normal hover:cursor-pointer  min-w-[120px] h-[40px] rounded-[12px] border transition
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
      </>
    );
  }

  const question = questions[current];
  const progress = (current / questions.length) * 100;

  return (
    <section className="bg-[#F8F8F9] w-full">
      <div className="max-w-[1232px] w-full mx-auto px-4 py-[52px]">
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-[640px] rounded-[20px] bg-white border border-[#F7941D] shadow p-6 md:p-10">
            {/* PROGRESS */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[13px] font-semibold text-[#6B7280] whitespace-nowrap">
                Sual {current + 1} / {questions.length}
              </span>

              <div className="h-[6px] flex-1 bg-[#F1F5F9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4CAF50] rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* QUESTION */}
            <h2 className="text-center text-[20px] md:text-[24px] font-semibold text-[#364153] mb-8">
              {question.question}
            </h2>

            {/* OPTIONS */}
            <div className="flex flex-col gap-3">
              {question.options.map((item) => {
                const isActive = selected === item;

                return (
                  <button
                    key={item}
                    onClick={() => setSelected(item)}
                    className={`w-full h-[52px] rounded-[14px] border flex items-center gap-3 px-4 transition
                      ${
                        isActive
                          ? "border-[#4CAF50] bg-[#F0FDF4] text-[#4CAF50]"
                          : "border-[#E5E7EB] bg-[#FAFAFA] text-[#364153]"
                      }
                    `}
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center
                      ${isActive ? "border-[#4CAF50]" : "border-[#9CA3AF]"}
                    `}
                    >
                      {isActive && (
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                      )}
                    </span>

                    {item}
                  </button>
                );
              })}
            </div>

            {/* FOOTER */}
            <div className="mt-8 grid grid-cols-3 items-center">
              {/* BACK */}
              <div className="flex">
                <button
                  onClick={handleBack}
                  disabled={current === 0}
                  className={`px-6 h-[44px] rounded-[12px] border transition
                    ${
                      current === 0
                        ? "border-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
                        : "border-[#E5E7EB] text-[#364153] hover:bg-[#F3F4F6]"
                    }
                  `}
                >
                  Geri
                </button>
              </div>

              {/* CENTER */}
              <p className="text-center text-[12px] text-[#9CA3AF]">
                {answers.filter(Boolean).length} / {questions.length} cavablandı
              </p>

              {/* NEXT */}
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className={`px-6 h-[44px] rounded-[12px] font-medium transition
                    ${
                      !selected
                        ? "bg-gray-300 text-white cursor-not-allowed"
                        : "bg-[#4CAF50] text-white hover:bg-[#43A047]"
                    }
                  `}
                >
                  Növbəti
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test1;

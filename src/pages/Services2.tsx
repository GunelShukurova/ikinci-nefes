import { FaRegClock } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const Services2 = () => {
  return (
    <div>
      <div className="h-screen px-[52px]">
        <h1 className="text-[48px] font-bold">
          Peşəkar <span className="text-[#4CAF50]">Psixoloji </span> Mərkəz
        </h1>
        <p className="text-[16px] font-normal w-[493px]">
          Psixoloji sağlamlığınız bizim prioritetimizdir. Təcrübəli
          mütəxəssislərimiz sizə fərdi yanaşma ilə keyfiyyətli psixoloji dəstək
          göstərməyə hazırdır. Hər bir insanın özünəməxsus ehtiyaclarını nəzərə
          alaraq ən yaxşı həlli təqdim edirik.
        </p>
        <div className="w-[248px] bg-[#E8F5E9] rounded-[14px] p-[16px] flex gap-3">
          <div className="w-[48px] h-[48px] bg-white flex justify-center items-center rounded-[10px]">
            <span className="text-[#4CAF50] text-[24px]">
              <LuRefreshCcw />
            </span>
          </div>
          <div>
            <span className="font-medium">Ofis Sessiyası</span>
            <div className="flex gap-2 items-center">
              <span className="text-[#4CAF50]">
                <FaRegClock />
              </span>
              <span>50 dəqiqə</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;

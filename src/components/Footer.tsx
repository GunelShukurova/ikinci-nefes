import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#DCEFDD]">
      <div className="mx-auto grid w-full max-w-[1232px] grid-cols-1 gap-10 px-7 py-[52px] sm:grid-cols-2 md:justify-items-center md:gap-x-12 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:justify-items-stretch">
        <div className="flex flex-col gap-5 md:w-full md:max-w-[260px]">
          <div className="flex items-center gap-2">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#4CAF50]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0H27.9963C34.6237 0 39.9963 5.37258 39.9963 12V27.9963C39.9963 34.6237 34.6237 39.9963 27.9963 39.9963H12C5.37258 39.9963 0 34.6237 0 27.9963V12Z"
                  fill="#66BB6A"
                />
                <path
                  d="M25.6793 17.482C25.6793 18.2953 25.4926 19.042 25.1193 19.722C24.7459 20.3886 24.1726 20.9286 23.3993 21.342C22.6259 21.7553 21.6659 21.962 20.5193 21.962H18.3993V27.002H14.9793V12.962H20.5193C21.6393 12.962 22.5859 13.1553 23.3593 13.542C24.1326 13.9286 24.7126 14.462 25.0993 15.142C25.4859 15.822 25.6793 16.602 25.6793 17.482ZM20.2593 19.242C20.9126 19.242 21.3993 19.0886 21.7193 18.782C22.0393 18.4753 22.1993 18.042 22.1993 17.482C22.1993 16.922 22.0393 16.4886 21.7193 16.182C21.3993 15.8753 20.9126 15.722 20.2593 15.722H18.3993V19.242H20.2593Z"
                  fill="white"
                />
              </svg>
            </div>

            <span className="text-[18px] sm:text-[20px] font-semibold tracking-wider">
              Psixologiya Mərkəzi
            </span>
          </div>

          <p className="text-[14px] leading-6 text-[#4F6F64]">
            Peşəkar psixoloji xidmətlər və dəstək. Sizin emosional sağlamlığınız
            bizim prioritetimizdir.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:w-full md:max-w-[260px]">
          <span className="text-[18px] sm:text-[20px] font-semibold">
            Keçidlər
          </span>
          <ul className="space-y-2 text-sm sm:text-base text-[#4F6F64]">
            <li>Ana səhifə</li>
            <li>Haqqımızda</li>
            <li>Xidmətlər</li>
            <li>Psixoloqlar</li>
            <li>Testlər</li>
            <li>Bloq</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 md:w-full md:max-w-[260px]">
          <span className="text-[18px] sm:text-[20px] font-semibold">
            Xidmətlər
          </span>
          <ul className="space-y-2 text-sm sm:text-base text-[#4F6F64]">
            <li>Fərdi terapiya</li>
            <li>Cütlük məsləhətləşməsi</li>
            <li>Ailə terapiyası</li>
            <li>Uşaq psixologiyası</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 md:w-full md:max-w-[260px]">
          <span className="text-[18px] sm:text-[20px] font-semibold">
            Əlaqə
          </span>

          <ul className="space-y-3 text-sm sm:text-base text-[#4F6F64]">
            <li className="flex items-center gap-3">
              <LuPhone />
              <span>+994 50 123 45 67</span>
            </li>

            <li className="flex items-center gap-3">
              <LuMail />
              <span>info@psixologiya.az</span>
            </li>

            <li className="flex items-center gap-3">
              <GrLocation />
              <span>Bakı, Azərbaycan</span>
            </li>

            <li className="flex gap-3 pt-2">
              <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <LuFacebook className="text-white text-lg" />
              </div>
              <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <FaInstagram className="text-white text-lg" />
              </div>
              <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <FiLinkedin className="text-white text-lg" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1232px] border-t border-[#4CAF504D] px-4 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between text-sm text-[#4F6F64]">
          <p>© 2026 İkinci Nəfəs. Bütün hüquqlar qorunur.</p>

          <div className="flex gap-3">
            <span>Vakansiyalar</span>
            <span>Gizlilik siyasəti</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

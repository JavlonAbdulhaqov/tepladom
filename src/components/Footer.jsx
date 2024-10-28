import { f1, f2, f3, f4, f5, f6, f7 } from "../assets";

function Footer() {
  return (
    <div className="footerr  text-white">
      <footer className="  container_product bg-footer py-5  text-white">
        <div className="lg:container mx-auto px-5">
          <div className="flex justify-between items-center flex-wrap">
            {/* Left Section - Logo and Address */}
            <div>
              <div className="flex gap-2">
                <img
                  src={f1}
                  alt="logo"
                  className="w-[59px] h-[59px] sm:w-[80px] sm:h-[80px] object-contain"
                />
                <div>
                  <h2 className="text-center text-[19px] font-semibold sm:text-[26px]">
                    TEPLODOM
                  </h2>
                  <p className="text-center text-[9px] sm:text-[13px] tracking-wider">
                    Интернет магазин
                    <br />
                    строй материалов
                  </p>
                </div>
              </div>
              <div className="hidden xs:flex mt-3 gap-2">
                <img src={f2} alt="icon" className="w-[18px] object-contain" />
                <p>
                  ул.Уста Ширин, рынок <br /> Джамий, дом 134
                </p>
              </div>
            </div>
            {/* Middle Section - Quick Links and Useful Links */}
            <div className="flex flex-col my-5 sm:my-0 gap-6 sm:gap-4">
              <h3 className="text-[18px] font-semibold sm:text-[27px]">
                Быстрые ссылки
              </h3>
              <ul className="flex flex-col gap-3 sm:gap-1 text-[18px]">
                <li>Мастерам</li>
                <li>Оформление заказа</li>
                <li>Пользовательское соглашение</li>
              </ul>
            </div>
            <div className="flex flex-col my-5 sm:my-0 gap-6 sm:gap-4">
              <h3 className="text-[18px] font-semibold sm:text-[27px]">
                Полезное
              </h3>
              <ul className="flex flex-col gap-3 sm:gap-1 text-[18px]">
                <li>О нас</li>
                <li>Поставщикам</li>
                <li>Возврат товара</li>
              </ul>
            </div>
            {/* Right Section - Contacts */}
            <div className="flex flex-col my-5 sm:my-0 gap-6 sm:gap-4">
              <h3 className="text-[18px] font-semibold sm:text-[27px]">
                Контакты
              </h3>
              <ul className="flex flex-col gap-5 sm:gap-1 text-[18px]">
                <li className="flex gap-1 justify-between">
                  <img src={f3} alt="phone icon" className="cursor-pointer" />
                  <a href="tel:+998916977181">+998 97 761 62 51</a>
                </li>
                <li className="flex gap-1 justify-between my-1">
                  <img src={f3} alt="phone icon" className="cursor-pointer" />
                  <a href="tel:+998916977181">+998 97 761 62 51</a>
                </li>
                <li className="flex gap-1 justify-between">
                  <a href="#">
                    <img
                      src={f4}
                      alt="telegram logo"
                      className="cursor-pointer"
                    />
                  </a>
                  <img
                    src={f5}
                    alt="instagram logo"
                    className="cursor-pointer"
                  />
                  <img
                    src={f6}
                    alt="facebook logo"
                    className="cursor-pointer"
                  />
                  <img src={f7} alt="youtube logo" className="cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
          {/* Address for small screens */}
          <div className="flex xs:hidden mt-3 gap-2">
            <img src={f2} alt="icon" className="w-[18px] object-contain" />
            <p>
              ул.Уста Ширин, рынок <br /> Джамий, дом 134
            </p>
          </div>
          {/* Footer Bottom */}
          <div className="flex justify-between items-center mt-10">
            <div className="w-0 sm:w-[30%] h-[1px] bg-white"></div>
            <p className="text-[15px] font-normal">
              &copy; {new Date().getFullYear()} Teplodom. Все права защищены
            </p>
            <div className="w-0 sm:w-[30%] h-[1px] bg-white"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

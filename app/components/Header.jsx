import { Link } from "@remix-run/react";
import { LayoutContext } from "~/root";
import { useContext, useState } from "react";
import urlFor from "~/lib/imageBuilder";
import { Transition } from "react-transition-group";
import {
  IconSearch,
  IconCart,
  IconAccount,
  IconHamburger,
  IconClose,
} from "./Icons";

function Header() {
  let { header } = useContext(LayoutContext);
  let { navigation, search, cart } = header[0];
  const [navState, setNavState] = useState(false);
  return (
    <header className="flex justify-between px-[10px] lg:px-10 lg:items-center">
      <div>
        <a href="/">
          <img
            className="h-[80px]"
            src={urlFor(header[0].logo.asset._ref).width(150).url()}
          />
        </a>
      </div>
      <Transition in={navState}>
        {(state) => (
          <>
            <nav
              style={{
                transition: "transform 300ms ease-in-out",
                transform:
                  state === "entered" ? "translateX(0)" : "translateX(100%)",
              }}
              className="fixed lg:relative lg:!translate-x-0 right-0 top-0 h-[100vh] lg:h-max w-[320px] lg:w-max bg-[#fff] z-[100]  pl-8 pr-[30px] pt-2"
            >
              <button
                className="ml-auto flex p-2 lg:hidden"
                onClick={() => setNavState((state) => !state)}
              >
                <IconClose className="w-[23px] h-[23px]" />
              </button>
              <ul className="lg:flex">
                {navigation.map((nav) => (
                  <li
                    className="text-[22px] font-medium py-2 lg:p-3 lg:text-[16px]"
                    key={nav._key}
                  >
                    <Link to={nav.link}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              style={{
                transition: "opacity 0.3s ease-in-out",
                transform:
                  state == "entered" ? "translateX(0)" : "translateX(100%)",
                opacity: state == "entered" ? 1 : 0,
              }}
              onClick={() => setNavState((state) => !state)}
              className="fixed lg:hidden top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] backdrop-blur-sm z-[99]"
            ></div>
          </>
        )}
      </Transition>
      <div className="flex items-center lg:gap-1">
        {search && (
          <button className="h-max p-2">
            <IconSearch />
          </button>
        )}
        {cart && (
          <button className="h-max p-2">
            <IconCart />
          </button>
        )}
        <button className="h-max p-2">
          <IconAccount />
        </button>
        <button
          className="h-max p-2 lg:hidden"
          onClick={() => setNavState((state) => !state)}
        >
          <IconHamburger />
        </button>
      </div>
    </header>
  );
}
export default Header;

// import React from "react";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";
import { useScreenFixedProvider } from "../components/context/ScreenFixedProvider";
import Logo from "../assets/image/logo.png";
import { Twitter, Discord, Opensea, Insta } from "../common/Icons";
const Header = () => {
  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();
  const [scrollPosition, setScrollPosition] = useState(0);

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className="position-relative z-index-1 bg-dark d-flex w-100 navbar-wrapper"
        id="home"
      >
        <div className="navbar-wrapper w-100 position-relative z-5 header_bg">
          <Desktop>
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div className="cursor_pointer">
                  <img src={Logo} alt="" />
                </div>
                <div className="nav-list-items d-flex">
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link font_lg fw_bold text-white"
                        href="#roadmap"
                      >
                        ROADMAP
                      </a>
                    </li>
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link text-nowrap font_lg fw_bold text-white"
                        href="#gallery"
                      >
                        GALLERY
                      </a>
                    </li>
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link font_lg fw_bold text-white"
                        href="#merch"
                      >
                        MERCH
                      </a>
                    </li>
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link font_lg fw_bold text-white"
                        href="#team"
                      >
                        TEAM
                      </a>
                    </li>
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link font_lg fw_bold text-white"
                        href="#contact"
                      >
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <a
                    target="_blank"
                    href="https://twitter.com"
                    className="px-2 social_icon"
                  >
                    <Twitter />
                  </a>
                </div>
                <div>
                  <a href="#discordbtn" className="px-2 social_icon">
                    <Discord />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://opensea.io/login"
                    className="px-2 social_icon"
                  >
                    <Opensea />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/accounts/login/"
                    className="px-2 social_icon"
                  >
                    <Insta />
                  </a>
                </div>
              </div>
            </div>
          </Desktop>
          <BeforeDesktop>
            <div className="px-3 d-flex justify-content-between align-items-center py-4">
              <div className="nav-log cursor_pointer z-index_100">
                <img src={Logo} alt="" />
              </div>
              <div
                id="nav-icon1"
                className={`hamburger-menu`}
                onClick={() => handldeOverlayActive()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className={`navbar-overlay `}>
              <ul className="h-100 list-unstyled d-flex flex-column align-items-center justify-content-center m-0">
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#roadmap"
                  >
                    ROADMAP
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#gallery"
                  >
                    GALLERY
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#merch"
                  >
                    MERCH
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#team"
                  >
                    TEAM
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#contact"
                  >
                    CONTACT
                  </a>
                </li>
                <li>
                  <div className="d-flex">
                    <div>
                      <a
                        target="_blank"
                        href="https://twitter.com"
                        className="px-2 "
                      >
                        <Twitter />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://twitter.com"
                        className="px-2 "
                      >
                        <Discord />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://twitter.com"
                        className="px-2 "
                      >
                        <Opensea />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://twitter.com"
                        className="px-2 "
                      >
                        <Insta />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </BeforeDesktop>
        </div>
      </section>
    </>
  );
};

export default Header;

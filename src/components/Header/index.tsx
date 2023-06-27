"use client";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoWhatsapp,
} from "react-icons/bi";

import Link from "next/link";
import Image from "next/image";

import "./styles.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container mx-auto ">
        <div className="flex flex-wrap flex-col md:flex-row justify-between">
          <div className="flex p-2 sm:mx-0">
            <div>
              <Image
                className="bg-cover rounded-md"
                alt="Foto de perfil"
                src={"/assets/profile2.jpeg"}
                width={150}
                height={320}
                loading="lazy"
                style={{
                  borderRadius:'200px'
                }}
              />
            </div>

            <div className="py-1 pl-4 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-mono gradient-primary">
                  Alison Aguiar
                </h1>
                <address>
                  <a href="mailto:contato@alisonaguiar.com">
                    contato@alisonaguiar.com
                  </a>
                </address>
              </div>
              <div className="flex gap-2">
                <Link
                  href="https://api.whatsapp.com/send?phone=5585981182610"
                  target="_newblank"
                  className="link-social"
                >
                  <BiLogoWhatsapp size={30} />
                </Link>
                <Link
                  href="https://github.com/gitalison"
                  target="_newblank"
                  className="link-social"
                >
                  <BiLogoGithub size={30} />
                </Link>
                <Link
                  href="https://instagram.com/alison_aguiarof"
                  target="_newblank"
                  className="link-social"
                >
                  <BiLogoInstagram size={30} />
                </Link>
                <Link
                  href="https://www.facebook.com/AlisonAguiahr"
                  target="_newblank"
                  className="link-social"
                >
                  <BiLogoFacebook size={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/alison-aguiar" target="_newblank" className="link-social">
                  <BiLogoLinkedin size={30} />
                </Link>
              </div>
            </div>
          </div>
          {/* NAV DESKTOP */}
          <div className="hidden sm:flex align-strech ">
            <div className="flex  md:text-md sm:justify-center text-2xl font-mono uppercase navigation">
              <Link
                href={"/"}
                className={`nav-item ${pathname == "/" ? "active" : ""}`}
              >
                <div className="link-item">Inicio</div>
              </Link>
              <Link
                href={"/projects"}
                className={`nav-item ${
                  pathname == "/projects" ? "active" : ""
                }`}
              >
                <div className="link-item">Projetos</div>
              </Link>
              {/* <Link
                href={"/contact"}
                className={`nav-item ${pathname == "/contact" ? "active" : ""}`}
              >
                <div className="link-item">Contato</div>
              </Link>
              <Link
                href={"/interests"}
                className={`nav-item ${
                  pathname == "/interests" ? "active" : ""
                }`}
              >
                <div className="link-item">Interesses</div>
              </Link> */}
            </div>
          </div>
          {/* END NAV DESKTOP */}

          {/* NAV MOBILE */}
          <div className="flex sm:hidden grid-cols-2 mt-2">
            <div className="mobile-nav grid grid-cols-2 text-2xl font-mono uppercase navigation">
              <Link
                href={"/"}
                className={`nav-item ${pathname == "/" ? "active" : ""}`}
              >
                <div className="link-item">Inicio</div>
              </Link>
              <Link
                href={"/projects"}
                className={`nav-item ${
                  pathname == "/projects" ? "active" : ""
                }`}
              >
                <div className="link-item">Projetos</div>
              </Link>
              {/* <Link
                href={"/contact"}
                className={`nav-item ${pathname == "/contact" ? "active" : ""}`}
              >
                <div className="link-item">Contato</div>
              </Link>
              <Link
                href={"/interests"}
                className={`nav-item ${
                  pathname == "/interests" ? "active" : ""
                }`}
              >
                <div className="link-item">Interesses</div>
              </Link> */}
            </div>
          </div>
          {/* END NAV MOBILE */}
        </div>
      </div>
    </header>
  );
}

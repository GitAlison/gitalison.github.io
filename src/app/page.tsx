import { PiStarFourFill } from "react-icons/pi";
import "./page.css";
import ButtonPromo from "@/components/ButtonPromo";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto ">
        <div className="p-3 text-slate-900 font-mono">
          <div>
            <h1 className="text-4xl sm:text-8xl gradient-primary py-8">
              Olá Sou DESENVOLVEDOR DE SOFTWARE
            </h1>

            <h1 className="text-2xl ">
              <span className="text-slate-700">
                trabalho com programação a mais de
                <span className="text-3xl">
                  {" "}
                  {new Date().getFullYear() - 2016}{" "}
                </span>
                anos com Programação, grande parte do meu trabalho desenvolvendo
                software para diretamente para empresas, desde planejamento,
                design arquitetura, desenvolvimento e deploy
              </span>
              <span className="text-3xl"> 🚀 </span>
              <span className="text-slate-700">e manutenção</span>
              <span className="text-3xl">⚒️</span>
            </h1>
            <div className="mt-2">
              <ButtonPromo link="/ebook" text="E-BOOK Grátis Agora" />
            </div>
          </div>

          <h1 className="text-2xl mt-8 flex text-center border-t-2 pt-3">
            <PiStarFourFill className=" mr-1" size={20} /> EXPERIENCIAS
            PROFISIONAIS
          </h1>
          <ul className="text-2xl text-slate-600">
            <li className="mb-5" style={{ maxWidth: "800px" }}>
              2021 - Atualmente - ViaHub(Viavarejo)
              <div className="ml-14">
                <div className="text-sm font-sans uppercase">
                  <span className="font-bold">DESCRIÇÃO:</span> Atuando na
                  jornada de Marketplace squad de plataforma modernizando
                  bibliotecas de desenvolvimento de microfrontends, usando
                  tecnologias como Angular e Nodejs usando Single SPA e Module
                  Federation como tambem transformando a biblioteca de Design
                  System usada no desenvolvimento das plataformas internas e doe
                  vendedores do marketplace da via
                </div>
                <div className="text-sm font-sans uppercase">
                  <span className="font-bold text-secondary-700">
                    FERRAMENTAS/FRAMEWORKS: ANGULAR, NODEJS, HTML, CSS,
                    JS,DOCKER, GITHUB/GITFLOW, KANBAN, SCRUM, JIRA, CONFLUENCE{" "}
                  </span>
                </div>
              </div>
            </li>
            <li className="mb-5" style={{ maxWidth: "800px" }}>
              JUN/2021 - DEZ/2021 - GENERAL CLAIMS
              <div className="ml-14">
                <div className="text-sm font-sans uppercase">
                  <span className="font-bold">DESCRIÇÃO:</span> Analista Front
                  End Angular 10+ em projetos privados, apricações para
                  seguradoras, Usando Chamadas de voz e video em realtime com a
                  API
                  <a
                    href="https://www.agora.io/en/"
                    className="underline"
                    target="_blank"
                  >
                    agora.io
                  </a>
                </div>
                <div className="text-sm font-sans uppercase">
                  <span className="font-bold text-secondary-700">
                    FERRAMENTAS/FRAMEWORKS: ANGULAR, VUEJS, HTML,CSS
                    NODEJS,GITHUB/GITFLOW, KANBAN
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { inter, bebas_neue } from "./fonts";

export const metadata = {
  title: "Alison´s Portifolio",
  description: "Veja os projetos que atuei e minha habilidade aplicadas",
  keyworrds:'Desenvolvedor web, html, css,js,ts,typescript,JavaScript, Python, TypeScript, HTML5, CSS3, SCSS, React, Angular, Vue.js, Node.js,Nestjs Express.js, Django, SQL, MySQL, PostgreSQL, Git, GitHub, Visual Studio Code, IntelliJ IDEA, Docker, AWS, React Native, Flutter, Android, iOS, Agile, Scrum, Kanban, Algorithm, Data Structures, Code Optimization, User Interface, User Experience, Responsive Design, Contributor, Open Source Projects, Computer Science, Certifications, Tech Blog,  Communication, Collaboration, Problem Solving, Project Names, Application Names, E-commerce, Member of Developer Communities, Meetups, ',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <meta name="keywords" content="Desenvolvedor web, html, css,js,ts,typescript,JavaScript, Python, TypeScript, HTML5, CSS3, SCSS, React, Angular, Vue.js, Node.js,Nestjs Express.js, Django, SQL, MySQL, PostgreSQL, Git, GitHub, Visual Studio Code, IntelliJ IDEA, Docker, AWS, React Native, Flutter, Android, iOS, Agile, Scrum, Kanban, Algorithm, Data Structures, Code Optimization, User Interface, User Experience, Responsive Design, Contributor, Open Source Projects, Computer Science, Certifications, Tech Blog,  Communication, Collaboration, Problem Solving, Project Names, Application Names, E-commerce, Member of Developer Communities, Meetups, " />

      <body className={`${inter.variable} ${bebas_neue.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

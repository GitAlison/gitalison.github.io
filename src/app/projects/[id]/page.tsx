"use cliente";
import { Project, projects_data } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { useSearchParams } from "next/navigation";

interface pageProps {
  params: {
    id: number;
  };
}

// export async function getStaticPaths(}:any) {

//   let project: Project = projects_data.filter((_, index) => index == id)[0];
//   // const [pageContent] = await Promise.all([getBlogPostContent(post)]);
//   return { props: { project} };
// }



Page.getInitialProps = async ({ params: { id } }:any) => {
  let project: Project = projects_data.filter((_, index) => index == id)[0];
  return { project: project };
};

export default function Page({ project }: any) {
  return (
    <div className="text-primary-800 bg-slate-50 py-8">
      <div className="container mx-auto p-3">
        <Link className="btn-3d inline-flex items-center" href="/projects">
          <BsChevronLeft className="mr-2" />
          Voltar
        </Link>
        <h1 className="text-4xl sm:text-8xl gradient-primary font-mono py-8">
          {project?.title}
        </h1>
        <div>
          <div className="tools-list flex flex-row-reverse gap-2 flex-wrap justify-start rotate-180 mb-2">
            {project?.tools?.map((tool: string, key: number) => {
              return (
                <img
                  key={key}
                  alt={tool.toUpperCase()}
                  className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rotate-180 image-tool"
                  src={`https://skillicons.dev/icons?i=${tool}`}
                />
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {project?.files.map((img: string, index: number) => {
            return (
              <Image
                key={index}
                src={`/assets/images/${project?.folder}/${img}`}
                className="img-project"
                width={100}
                height={100}
                alt={project?.title}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  backgroundPosition: "center",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

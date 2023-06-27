import { projects_data } from "@/utils/data";
import { Project } from "../../utils/data";
import CardProject from "@/components/CardProject";


export default function Project() {
  let projects: Project[] = projects_data;

  return (
    <>
      <div className="text-primary-800 bg-slate-50 pb-10">
        <div className="container mx-auto p-3">
          <h1 className="text-4xl sm:text-8xl gradient-primary font-mono py-8">
            MEUS PROJETOS PÚBLICOS
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 ">
            {projects.map((project, index) => {
              return (
                <div key={index}>
                  <CardProject project={project} index={index}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-secondary-800 text-white">
        <div className="flex"></div>
      </div>
    </>
  );
}

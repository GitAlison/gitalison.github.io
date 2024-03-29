import Image from "next/image";

export default function ProjectDetails({ project }: any) {
  return (
    <div className="text-primary-800 bg-slate-50">
      <div className="container mx-auto p-3">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

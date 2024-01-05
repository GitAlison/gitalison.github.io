import { Project } from "@/utils/data";
import { ImageCover } from "../Image/imageCover";
import Image from "next/image";
import "./styles.css";
import ModalProject from "../ModalProject";

type Props = {
  project: Project;
  index: number;
};

export default function CardProject({ project, index }: Props) {
  return (
    <div className="h-full border-4 p-5 border-primary-100 bg-gray-50 shadow-2xl drop-shadow-md">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-4 flex flex-col items-center justify-center">
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: 300,
            }}
          >
            <ImageCover project={project} />
          </div>
          <div className="bg-primary-50 mx-auto bg-cover bg-center"></div>

        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-8 pl-3 flex flex-col  w-full">
          <h3 className="font-bold text-3xl uppercase py-3 divide-y-2">
            {project.title}
          </h3>
          <div className="tools-list flex flex-row-reverse gap-2 flex-wrap rotate-180">
            {project.tools?.map((tool: string, key) => {
              return (
                <Image
                  key={key}
                  width={200}
                  height={200}
                  alt={tool.toUpperCase()}
                  className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rotate-180 image-tool"
                  src={`https://skillicons.dev/icons?i=${tool}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <ModalProject project={project} />
      </div>
    </div>
  );
}

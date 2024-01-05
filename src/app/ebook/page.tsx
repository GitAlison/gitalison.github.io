import Image from "next/image";
import { HiDownload } from "react-icons/hi";

export default function Ebook() {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-3 py-8 font-mono">
        <h1 className="text-4xl sm:text-8xl gradient-primary font-mono py-8">
          E-BOOK
        </h1>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 sm:col-span-6">
            <Image
              width={800}
              height={200}
              alt="Ebook Django and Django Rest Framework"
              src="assets/ebookrest.png"
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <h1 className="text-2xl ">
              Este e-book é para quem desconheçe do Django com Rest Framework. é
              possivel que tenha novidade caso você já conheça
            </h1>
            <a
              href="./EBook Django RestFramework.pdf"
              target="_blank"
              className="btn-3d inline-flex items-center mt-2"
            >
              BAIXAR E-BOOK <HiDownload size={20} className="ml-2" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

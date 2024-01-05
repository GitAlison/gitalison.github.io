"use client";
import { Project } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../Loader";

type Props = {
  project: Project;
};

export function ImageCover({ project }: Props) {
  const [srcPicture, setPicture] = useState<string | null>(null);
  const timeout = Math.floor(Math.random() * 2 * 1500);
  const getRandomPic = (): void => {
    const randomPic =
      project.files[Math.floor(Math.random() * project.files.length)];

    setPicture(`/assets/images/${project.folder}/${randomPic}`);
  };
  useEffect(() => {
    getRandomPic()
    // setTimeout(() => {
    //   getRandomPic();
    //   setInterval(() => {
    //     setPicture(null);
    //     setTimeout(() => {
    //       getRandomPic();
    //     }, timeout);
    //   }, 8000);
    // }, 2000);
  },[]);

  return srcPicture ? (
    <div>
      <Image
      src={srcPicture}
      fill
      alt={project.title}
      style={{
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    />
    </div>
  ) : (
    <Loader />
  );
}

"use client";
import { Project } from "@/utils/data";
import { Modal } from "flowbite-react";
import { useState } from "react";
import ProjectDetails from "../ProjectDetails";
import "./styles.css";
import { BsChevronRight } from "react-icons/bs";
import { themeModal } from "./theme";

type Props = {
  project: Project;
};

export default function ModalProject({ project }: Props) {
  const [isModalOpen, setModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setModal(true);
        }}
        className="btn-3d min-w-[200px] mx-auto"
        type="button"
      >
        VER DETALHES <BsChevronRight />
      </button>

      <Modal
      theme={themeModal}
        show={isModalOpen}
        autoFocus={true}
        dismissible
        size="7xl"
        onClose={() => setModal(false)}
      >
        <Modal.Header>{project.title.toUpperCase()}</Modal.Header>
        <Modal.Body className="p-0">
          <ProjectDetails project={project} />
        </Modal.Body>
      </Modal>
    </>
  );
}

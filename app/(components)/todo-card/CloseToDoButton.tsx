"use client";
import { todoService } from "@/api";
import CloseButton from "@/common/components/UI/button/CloseButton";

type Props = {
  id: number;
};

const RemoveToDoButton = ({ id }: Props) => {
  const onClick = () => todoService.deleteToDo(id);

  return <CloseButton onClick={onClick} />;
};

export default RemoveToDoButton;

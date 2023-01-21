"use client";
import { todoService } from "@/api";
import CloseButton from "@/common/components/UI/button/CloseButton";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
};

const RemoveToDoButton = ({ id }: Props) => {
  const router = useRouter();

  const onClick = () =>
    Promise.all([todoService.deleteToDo(id), router.refresh()]);

  return <CloseButton onClick={onClick} />;
};

export default RemoveToDoButton;

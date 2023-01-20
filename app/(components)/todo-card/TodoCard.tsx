import Card from "@/common/components/UI/cards/Card";
import type { Todo } from "@prisma/client";
import RemoveToDoButton from "./CloseToDoButton";

type Props = {
  todo: Todo;
};

function TodoCard({ todo }: Props) {
  return (
    <Card
      key={todo.id}
      className="w-full text-white p-6 rounded-md cursor-pointer text-xl bg-dark-gray flex justify-between items-center"
    >
      <span className="card-text">{todo.text}</span>
      <RemoveToDoButton id={todo.id} />
    </Card>
  );
}

export default TodoCard;

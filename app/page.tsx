import Button from "@/common/components/UI/button/Button";
import { todoRepository } from "@/repositories";
import Link from "next/link";
import TodoCard from "./(components)/todo-card/TodoCard";

export default async function Home() {
  const todos = await todoRepository.get();

  return (
    <main className="w-full mt-10">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
      <Link href="/new-todo">
        <Button className="bg-blue text-black text-xl py-4 px-6 mx-auto block mt-28 hover:bg-dark-gray hover:text-white duration-300 cursor-pointer">
          Add new
        </Button>
      </Link>
    </main>
  );
}

import Button from "@/common/components/UI/button/Button";
import Card from "@/common/components/UI/cards/Card";
import { todoRepository } from "@/repositories";
import Link from "next/link";

export default async function Home() {
  const todos = await todoRepository.get();

  return (
    <main className="w-full mt-10">
      {todos.map((todo) => (
        <Card
          key={todo.id}
          className="w-full text-white p-6 rounded-md cursor-pointer text-xl bg-dark-gray"
        >
          <span className="card-text">{todo.text}</span>
        </Card>
      ))}
      <Link href="/new-todo">
        <Button className="bg-blue text-black text-xl py-4 px-6 mx-auto block mt-28 hover:bg-dark-gray hover:text-white duration-300 cursor-pointer">
          Add new
        </Button>
      </Link>
    </main>
  );
}

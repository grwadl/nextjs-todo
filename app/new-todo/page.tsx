"use client";
import { todoService } from "@/api";
import Button from "@/common/components/UI/button/Button";
import Card from "@/common/components/UI/cards/Card";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

function NewTodo() {
  const nameRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLInputElement>(null);
  const { replace, refresh, push } = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!priorityRef.current?.value || !nameRef.current?.value) return;

    push("/");
    todoService
      .addToDo({
        priority: "High" as const,
        text: nameRef.current?.value ?? "",
      })
      .then(() => refresh());
  };

  return (
    <main className="new-todo">
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <Card className="flex justify-between bg-dark-gray p-4 rounded-md">
          <span>Name</span>
          <input
            className="bg-dark-gray text-white"
            ref={nameRef}
            type="text"
          />
        </Card>
        <Card className="flex justify-between bg-dark-gray p-4 rounded-md">
          <span>Priority</span>
          <input
            className="bg-dark-gray text-white"
            ref={priorityRef}
            type="text"
          />
        </Card>
        <Button type="submit">Add</Button>
      </form>
    </main>
  );
}

export default NewTodo;

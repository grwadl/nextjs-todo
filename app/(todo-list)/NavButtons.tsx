"use client";
import Button from "@/common/components/UI/button/Button";
import classNames from "@/common/utils/classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

function NavButtons(props: Props) {
  const buttons: { name: string; value: string }[] = [
    { name: "today", value: "/" },
    { name: "tomorrow", value: "/tomorrow" },
  ];
  const { className, ...otherProps } = props;
  const pathname = usePathname();

  const classNameBtn = (name: string) =>
    classNames([
      "button flex justify-center items-center rounded-lg uppercase py-2 px-4",
      pathname === name ? "text-black bg-blue" : "text-white bg-black",
    ]);

  return (
    <div
      {...otherProps}
      className={classNames(`buttons-list flex gap-4 ${className ?? ""}`)}
    >
      {buttons.map((button) => (
        <Link key={button.value} href={button.value}>
          <Button className={classNameBtn(button.value)}>{button.name}</Button>
        </Link>
      ))}
    </div>
  );
}

export default NavButtons;

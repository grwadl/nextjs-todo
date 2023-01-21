"use client";
import classNames from "@/common/utils/classnames";
import React from "react";

type Props = React.HtmlHTMLAttributes<HTMLButtonElement>;

function CloseButton({ className, ...props }: Props) {
  const closeButtonClassNames = classNames([
    "hover:text-gray-500 duration-300",
    className ?? "",
  ]);

  return (
    <button {...props} className={closeButtonClassNames}>
      ❌
    </button>
  );
}

export default CloseButton;

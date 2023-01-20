import classNames from "@/common/utils/classnames";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ className, ...props }: Props) => {
  const classNameCard = classNames([
    "w-full px-3 py-2 flex items-center",
    className ?? "",
  ]);

  return <div {...props} className={classNameCard} />;
};

export default Card;

import classNames from "@/common/utils/classnames";
import React, { ButtonHTMLAttributes } from "react";

type Props = React.HTMLAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
  const { className, ...otherProps } = props;

  return (
    <button className={classNames(`rounded-md ${className}`)} {...otherProps} />
  );
}

export default Button;

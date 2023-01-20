import classNames from "@/common/utils/classnames";
import React from "react";

type Props = React.HTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
  const { className, ...otherProps } = props;

  return (
    <button className={classNames(`rounded-md ${className}`)} {...otherProps} />
  );
}

export default Button;

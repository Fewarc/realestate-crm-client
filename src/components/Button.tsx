import classNames from "classnames";
import React from "react";

interface buttonTypes {
  type: keyof typeof buttonStyles,
  size?: string,
  disabled?: boolean,
  className?: string,
  children?: JSX.Element | JSX.Element[] | string,
  onClick: () => void,
  onKeyDown?: (e: any) => void,
}

const buttonStyles = {
  primary: 'border-2 border-primary rounded-xl px-4 py-2 font-medium text-primary hover:bg-primary hover:text-white transition duration-300',
  transparent: 'hover:opacity-50 transition duration-300',
  filled: 'bg-primary border-2 border-white hover:border-primary rounded-xl px-4 py-2 font-medium text-white hover:bg-white hover:text-primary transition duration-300',
  floating: '',
  link: ''
}

const getButtonStyles = (
  type: keyof typeof buttonStyles,
  size: string = 'md',
  disabled: boolean = false,
  className?: string,
) => classNames(
  "cursor-pointer",
  {
    "opacity-20": disabled,
    "pointer-events-none": disabled
  },
  className,
  buttonStyles[type]
);

const Button: React.FC<buttonTypes> = ({
  type,
  size,
  disabled,
  className,
  children,
  onClick,
  onKeyDown
}) => {
  return (
    <button onClick={onClick} onKeyDown={(e) => onKeyDown && onKeyDown(e)} className={getButtonStyles(type, size, disabled, className)}>
      {children}
    </button>
  );
}

export default Button;
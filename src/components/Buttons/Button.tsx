import React from "react";
import { ButtonProps } from "./type";
import CircularProgress from "../circular-loader";

// import CircularProgress from "../CircularProgress";

// eslint-disable-next-line consistent-return
const variantFn = (variantStyle = "") => {
  switch (variantStyle) {
    case "outlined":
      return " border-brand-primary rounded border bg-transparent !text-brand-primary";
    case "faded":
      return " bg-brand-primary/20 rounded border bg-transparent !text-[#0A09084D]";
    case "contained":
      return "bg-brand-primary rounded";
    case "text":
      return " bg-transparent text-text-main";
    default:
  }
};
const themeColorFn = (style = "") => {
  switch (style) {
    case "main":
      return " text-white 1rem font-semibold flex justify-center items-center max-h-[36px]  rounded-[10px] hover:bg-brand-secondary hover:text-brand-primary/70 duration-200";
    case "dark":
      return "bg-text-main bg-[#171717] text-white duration-200 hover:bg-white hover:text-[#171171] border border-black";

    case "":
      return "";
    default:
  }
};
// eslint-disable-next-line consistent-return
const sizeFn = (style = "") => {
  switch (style) {
    case "main":
      return "  p-[8px_12px]";

    case "":
      return " ";
    default:
  }
};
const Button = ({
  type,
  children,
  variant,
  size,
  themeColor,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${variantFn(variant)} ${themeColorFn(themeColor)} ${sizeFn(size)} ${className} `}
      type={type || "button"}
    >
      {!props.loading ?children:<CircularProgress/>}
    </button>
  );
};

export default Button;

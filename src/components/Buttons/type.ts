export type ButtonProps = {
    size?: string;
    variant?: string;
    themeColor?: string;
    className?: string;
    loading?:boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
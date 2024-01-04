export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}
export const Button = ({
  className,
  children,
  type = "button",
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={
        "tw-text-white tw-border-white tw-border-2 tw-block tw-w-[411px] tw-mx-auto" +
        className
      }
    >
      {children}
    </button>
  );
};

import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

const InputBox = ({ labelText, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      <label
        className={`tw-block text-slate-600 tw-mb-2 text-xs tw-lg:text-sm tw-xl:text-base `}
      >
        {labelText}
      </label>
      <input
        autoComplete="off"
        className={`tw-border tw-rounded-md tw-disabled:border-slate-100 tw-block tw-outline-none tw-py-2 tw-px-1 tw-transition-all tw-text-xs tw-lg:text-sm tw-xl:text-base  tw-bg-slate-50 tw-focus:shadow  tw-text-black
              ${
                error
                  ? "tw-border-red-500 tw-animate-shake"
                  : "tw-border-slate-400"
              }`}
        {...props}
      ></input>
    </div>
  );
};

export default InputBox;

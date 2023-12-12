import React from "react";

const TextInput = React.forwardRef(
  (
    { type, styles, label, labelStyles, register, name, placeholder, error },
    ref
  ) => {
    return (
      <div className="w-full flex flex-col mt-2">
        {label && (
          <p className={`text-ascent-2 text-sm am-2 ${labelStyles}`}>{label}</p>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            className={`bg-secondary rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666] ${styles}`}
            {...register}
            aria-invalid={error ? "true" : "false"}
          />
          {error && (
            <span className="text-xs text-[#f64949fe] mt-0.5"> {error}</span>
          )}
        </div>
      </div>
    );
  }
);

export default TextInput;
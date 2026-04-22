import { forwardRef } from 'react';

const FormInput = forwardRef(function FormInput(
  {
    label,
    name,
    type = 'text',
    placeholder,
    error,
    options,
    rows,
    className = '',
    ...props
  },
  ref
) {
  const baseInputClasses =
    'w-full px-5 py-3.5 rounded-xl border bg-white text-text-dark text-[15px] placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200';
  const errorClasses = error
    ? 'border-primary ring-1 ring-primary/20'
    : 'border-border-soft';

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-text-dark"
        >
          {label}
        </label>
      )}

      {type === 'select' ? (
        <select
          id={name}
          name={name}
          ref={ref}
          className={`${baseInputClasses} ${errorClasses} appearance-none cursor-pointer`}
          {...props}
        >
          <option value="">{placeholder || 'Select...'}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          ref={ref}
          rows={rows || 4}
          placeholder={placeholder}
          className={`${baseInputClasses} ${errorClasses} resize-none`}
          {...props}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          placeholder={placeholder}
          className={`${baseInputClasses} ${errorClasses}`}
          {...props}
        />
      )}

      {error && (
        <p className="text-xs text-primary font-medium mt-0.5">{error}</p>
      )}
    </div>
  );
});

export default FormInput;

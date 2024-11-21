interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: { message?: string };
  as?: "input" | "textarea";
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  as = "input",
  className,
  ...props
}) => {
  const id = props.id || props.name;
  const Component = as;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Component
        id={id}
        className={cn(
          "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm",
          { "border-red-500": error },
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

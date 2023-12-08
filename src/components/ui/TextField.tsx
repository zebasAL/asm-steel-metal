type TextField = {
  id: string,
  label: string,
  className?: string,
  inputProps?: HTMLInputElement | any,
}

export default function TextField({ id, label, className = "", ...inputProps }: TextField) {

  return (
    <div>
      <label htmlFor={id ?? "simple-textfield"} className="sr-only">{label}</label>
      <div className="relative w-full">
        <input type="text" id={id ?? "simple-textfield"} {...inputProps} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`} />
      </div>
    </div>
  )
}
import { useState } from "react"

type ButtonProps = {
  className?: string,
  onClick?: () => void,
  children: React.ReactChildren | string,
}

export default function TabButton({
  className,
  onClick,
  children,
}: ButtonProps) {
  const [] = useState()

  return (
    <div className="">
      <button
        onClick={onClick}
        className={`cursor-pointer select-none font-bold text-lg leading-6 bg-white border border-gray-300 rounded-l-md py-4 px-6 shadow-md transition duration-250 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 inline-block text-black rounded-lg active ${className ?? ""}`}
        aria-current="page"
      >
        {children}
      </button>
    </div>
  )
}
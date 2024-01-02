import useTranslation from 'next-translate/useTranslation'
import { Button } from "@material-tailwind/react"

type Location = {
  title: string,
  address: string,
  selected?: boolean,
  phone?: number | string,
  onClick?: () => void,
}

export default function LocationBox ({ title, address, selected = false, phone, onClick = ()=>{} }: Location) {
  const { t: contactT } = useTranslation('contact');

  return (
    <Button
      onClick={onClick}
      ripple={!selected}
      className={`group max-w-md user- ${selected ? 'cursor-auto' : ''} ${selected ? '' : 'bg-transparent'} bg-opacity-90 ${selected ? '' : 'hover:bg-gray-500 hover:bg-opacity-40'} z-10 rounded-[15px] p-5`}
    >
      <h2 style={{ userSelect: 'text' }} className="text-2xl font-bold text-primary-500 mb-2">{title}</h2>
      <p style={{ userSelect: 'text' }} className="text-md text-gray-200 mb-4">{address}</p>
      <p style={{ userSelect: 'text' }} className="mb-4">{phone ? phone : null}</p>
      <a href="#" className="inline-flex items-center text-primary-500 font-medium">
        {selected ? contactT("selected") : contactT("select")}
        
        {!selected && (
          <svg className="ml-2 w-4 h-4 group-hover:ml-6 transition-all ease-in-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        )}
      </a>
    </Button>
  )
}
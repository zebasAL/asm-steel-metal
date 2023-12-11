import Image from "next/image";
import Modal from "~/components/ui/Modal";
import { DropDownOption } from "~/routes/hooks/useNavItems";

type DropDownModalProps = {
  option: DropDownOption,
  isOpen: boolean,
  onClose: () => void,
}

export default function DropDownModal({ option, isOpen, onClose }: DropDownModalProps) {

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="min-w-fit mt-[150px] mx-[100px]">
      <>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{option.subheader}</h3>
        </div>

        {/* <NavItem
            link={`/${item}`}
            // svgIcon={<Svg.ChartPieSvg />}
            image={image}
            title={title}
            expanded={expanded}
          /> */}

          <div className="grid grid-cols-3 gap-2">
            {(option.items ?? []).map((item) => (
              <div key={item.title} className="transition duration-300 ease-in bg-white min-h-[10rem] rounded-lg border-2 border-solid border-opacity-32 m-4 text-rgb-gray-600 text-sm hover:bg-gray-100 cursor-pointer">
                <div className="relative flex items-center justify-between p-3 md:p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white z-10">{item.title}</h3>
                  {item.image && (<Image src={item.image} width={100} height={5} alt="image" layout="responsive" style={{ opacity: .5 }} className="w-full absolute left-0 top-0 rounded-t-lg object-cover max-h-[60px]" />)}
                </div>
                <div className="p-3 md:p-4 space-y-4 z-10">
                  <p className="text-sm leading-relaxed text-gray-400 dark:text-gray-400 z-10">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
      </>
    </Modal>
  )
}
import Image from "next/image";
import Link from "next/link";
import { useActiveLink } from "~/routes/hooks"

type NavItemProps = {
  link: string;
  svgIcon?: JSX.Element;
  image?: string;
  title: string;
  expanded?: boolean;
};

export default function NavItem({ link, svgIcon, image, title, expanded = true }: NavItemProps) {

  return (
    <Link href={link} className={`flex items-center no-underline text-blue-50 hover:text-blue-100 p-3 rounded-md ${useActiveLink(link, false) ? "bg-indigo-800" : ""}`}>
      {image && <Image src={image} width={50} height={50} alt="category-img" />}
      {svgIcon && svgIcon}
      {expanded && <div className="font-bold pl-3">{title}</div>}
    </Link>
  );
}
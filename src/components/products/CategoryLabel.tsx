import Link from "next/link";
import Label from "~/components/ui/label";

type LabelProps = {
  categories: string[],
  nomargin: boolean,
}

export default function CategoryLabel({
  categories,
  nomargin = false
}: LabelProps) {
  console.log("categories", categories)
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link
            href={`/categorias/${category}`}
            key={index}>
            <Label nomargin={nomargin} color={"blue"}>
              {category}
            </Label>
          </Link>
        ))}
    </div>
  );
}
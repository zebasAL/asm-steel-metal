import Link from "next/link";
import Label from "~/components/ui/label";

export default function CategoryLabel({
  categories,
  nomargin = false
}) {
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
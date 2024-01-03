import Link from "next/link";
import Label from "~/components/ui/Label";

type LabelProps = {
  categories: string[],
}

export default function CategoryLabel({
  categories,
}: LabelProps) {

  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link
            href={`/categories/${category}`}
            key={index}>
            <Label pill={false} color={"blue"}>
              <p>{category}</p>
            </Label>
          </Link>
        ))}
    </div>
  );
}
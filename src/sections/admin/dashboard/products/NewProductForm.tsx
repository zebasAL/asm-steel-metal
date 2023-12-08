import z from 'zod';
import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import firebase from "~/firebase/clientApp";

import TextField from "~/components/ui/TextField";
import type { Product } from "~/firebase/products/products";
  
const validationSchema = z
  .object({
    createdAt: z.string(),
    description: z.string(),
    fav: z.boolean(),
    is_active: z.boolean(),
    isr_uploaded: z.boolean(),
    locale: z.string(),
    main_photo: z.string(),
    secondary_photo: z.string(),
    name: z.string(),
    secondary: z.string(),
    // sections: z.array(z.unknown()),
    short_description: z.string(),
  });
  
type ValidationSchema = z.infer<typeof validationSchema>;

export default function NewProductForm() {
  const [image, setImage] = useState<string>("")
  const mainInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
    },
  })

  const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => {
    await firebase.firestore().collection("products").add({ id: "" })
      .then(async (user) => {

      })
      .catch((error) => {
        console.log("error", error)
      });
  }

  const handleImage = (e: any) => {
    const selectedImage = mainInputRef.current?.files ?? []
    if (selectedImage[0]) {
      const url = URL.createObjectURL(selectedImage[0])
      setValue("main_photo", url)
    }
  }

  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     setValue('image', 
  //     ...acceptedFiles.map((file) =>
  //       Object.assign(file, {
  //         preview: URL.createObjectURL(file)
  //       })
  //     ))
  //   },
  //   [setValue]
  // )

  console.log("main_photo", watch("main_photo"))

  return (
    <div>
      <TextField {...register("name")} id="title-textfield" label={"Nombre del Producto"} placeholder="Nombre del Producto" className="mb-2 font-semibold text-lg tracking-tighter" />

      <div className="min-h-[300px] relative bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <input type="file" accept="image/*" onChange={handleImage} ref={mainInputRef} className="min-w-full min-h-[300px] absolute cursor-pointer opacity-0"  />
        <img src={watch("main_photo") ?? ""} alt="main_product_image" className="rounded-t-lg h-[300px] w-full object-contain" />
      </div>

      <TextField {...register("name")} id="title-textfield" label={"Nombre del Producto"} placeholder="Descripcion" className="mb-2 font-semibold text-lg tracking-tighter" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </div>
  )
}
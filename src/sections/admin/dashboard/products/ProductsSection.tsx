import useSWR from 'swr'
import type { ProductResponse } from '~/firebase/products/products';
import ProductCard from "~/components/products/ProductCard"
import DashboardHeader from '~/components/headers/DashboardHeader'
import ConfirmModal from '~/components/ui/ConfirmModal'
import NewProductForm from "./NewProductForm"
import { useBoolean } from '~/hooks/use-boolean'
import { apiRoutes } from "~/utils/api"

export default function ProductsSection () {
  const { value, onFalse, onTrue } = useBoolean()

  return (
    <>
      <DashboardHeader
        title='Productos'
        action={
          <button onClick={onTrue} data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Toggle modal
          </button>
        }
      />

      <ConfirmModal
        isOpen={value}
        title="Crear Producto"
        onClose={onFalse}
        onConfirm={onTrue}
      >
        <>
          <NewProductForm />

          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </>
      </ConfirmModal>

      <ProductList />
    </>
  )
}

// ------------------------------------------------------------------------------------------------

const ProductList = () => {
  const { data } = useSWR('/api/products/', () => apiRoutes.products.getAll<ProductResponse>({ page: 1 }))

  return (
    <>
      {data?.results.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </>
  )
}
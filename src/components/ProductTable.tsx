import type { Product } from "../types/product"
import ProductRow from "./ProductRow"

type ProductTableProps = {
    productos: Product[]
    productoEditando: string | null
    nombreEditado: string
    metrosEditado: string

    setNombreEditado: (value: string) => void
    setMetrosEditado: (value: string) => void
    guardarEdicion: (id: string) => void
    setProductoEditando: (id: string | null) => void
    eliminarProducto: (id: string) => void
}

function ProductTable ({
    productos,
    productoEditando,
    nombreEditado,
    metrosEditado,
    setNombreEditado,
    setMetrosEditado,
    guardarEdicion,
    setProductoEditando,
    eliminarProducto
}: ProductTableProps) {
    return (
        <div className="mt-10 ">
            <h2 className="text-lg font-semibold text-slate-100 mb-4">Stock de Productos</h2>
            <table className="w-full bg-gray-100 rounded-lg shadow-sm border-collapse">
              
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-2 text-left">ID</th>
                  <th className="border p-2 text-left">Nombre</th>
                  <th className="border p-2 text-left">Stock</th>
                  <th className="border p-2 text-left">Acciones</th>
                </tr>
              </thead>
              
              <tbody>
                {productos.map((p) => (
                  <ProductRow
                  key={p.id}
                  producto={p}
                  productoEditando={productoEditando}
                  nombreEditado={nombreEditado}
                  metrosEditado={metrosEditado}
                  setNombreEditado={setNombreEditado}
                  setMetrosEditado={setMetrosEditado}
                  guardarEdicion={guardarEdicion}
                  setProductoEditando={setProductoEditando}
                  eliminarProducto={eliminarProducto}
                />
                ))}
              </tbody>
            </table>
          </div>
    )
}


export default ProductTable
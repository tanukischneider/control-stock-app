import type { Product } from "../types/product";

type ProductRowProps = {
    producto: Product
    productoEditando: string | null
    nombreEditado: string
    metrosEditado: string

    setNombreEditado: (value: string) => void
    setMetrosEditado: (value: string) => void
    guardarEdicion: (id: string) => void
    setProductoEditando: (id: string | null) => void
    eliminarProducto: (id: string) => void
}

function ProductRow({
  producto,
  productoEditando,
  nombreEditado,
  metrosEditado,
  setNombreEditado,
  setMetrosEditado,
  guardarEdicion,
  setProductoEditando,
  eliminarProducto
}: ProductRowProps) {
    const estaEditando = productoEditando === producto.id

    if (estaEditando) {
        return(
            <tr>
                <td className="border p-2">{producto.id}</td>

                <td className="border p-2">
                <input
                    value={nombreEditado}
                    onChange={(e) => setNombreEditado(e.target.value)}
                    className="border p-1 rounded w-full"
                />
                </td>

                <td className="border p-2">
                <input
                    type="number"
                    value={metrosEditado}
                    onChange={(e) => setMetrosEditado(e.target.value)}
                    className="border p-1 rounded w-full"
                />
                </td>

                <td className="border p-2">
                <button
                    onClick={() => guardarEdicion(producto.id)}
                    className="mr-2 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
                >
                    Guardar
                </button>

                <button
                    onClick={() => setProductoEditando(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors"
                >
                    Cancelar
                </button>
                </td>
            </tr>
        )
    }

    return (
    <tr className="hover:bg-slate-50">
      <td className="border p-2">{producto.id}</td>
      <td className="border p-2">{producto.name}</td>
      <td className="border p-2">{producto.stock}</td>

      <td className="border p-2">
        <button
          onClick={() => {
            setProductoEditando(producto.id)
            setNombreEditado(producto.name)
            setMetrosEditado(String(producto.stock))
          }}
          className="mr-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
        >
          Editar
        </button>

        <button
          onClick={() => eliminarProducto(producto.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
        >
          Borrar
        </button>
      </td>
    </tr>
  )
}

export default ProductRow
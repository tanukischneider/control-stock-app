type ProductTableProps = {
    productos: Producto[]
    productoEditando: number | null
    nombreEditado: string
    metrosEditado: string

    setNombreEditado: (value: string) => void
    setMetrosEditado: (value: string) => void
    guardarEdicion: (id: number) => void
    setProductoEditando: (id: number | null) => void
    eliminarProducto: (id: number) => void
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
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Stock de Productos</h2>
            <table className="w-full bg-gray-100 rounded-lg shadow-sm border-collapse">
              
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-2 text-left">ID</th>
                  <th className="border p-2 text-left">Nombre</th>
                  <th className="border p-2 text-left">Metros</th>
                  <th className="border p-2 text-left">Acciones</th>
                </tr>
              </thead>
              
              <tbody>
                {productos.map((p) => 
                  productoEditando === p.id ? (
                    <tr key={p.id}>
                      <td className="border p-2">{p.id}</td>
                      <td className="border p-2">
                        <input 
                        value={nombreEditado}
                        onChange={(e) => setNombreEditado(e.target.value)}
                        className="border p-1 rounded w-full" />
                      </td>
                      <td className="border p-2">
                        <input
                        type="number" 
                        value={metrosEditado}
                        onChange={(e) => setMetrosEditado(e.target.value)}
                        className="border p-1 rounded w-full" />
                      </td>
                      <td className="border p-2">
                        <button 
                        onClick={() => guardarEdicion(p.id)}
                        className="mr-2 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors">
                        Guardar
                      </button>
                      <button 
                        onClick={() => setProductoEditando(null)}
                        className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors">
                        Cancelar
                      </button>
                      </td>
                    </tr>
                  ) : (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="border p-2">{p.id}</td>
                    <td className="border p-2">{p.nombre}</td>
                    <td className="border p-2">{p.metros}</td>
                    <td className="border p-2">
                      <button onClick={() => {
                        setProductoEditando(p.id)
                        setNombreEditado(p.nombre)
                        setMetrosEditado(String(p.metros))
                      }}
                      className="mr-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors">
                        Editar
                      </button>
                      <button onClick={() => eliminarProducto(p.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors">
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
}


export default ProductTable
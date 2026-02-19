import { useState } from "react"

function App() {
  
  const [productos, setProductos] = useState([
    {id: 1, nombre: "UTP Cat6", metros: 500},
    {id: 2, nombre: "Coaxial RG6", metros: 300},
    {id: 3, nombre: "Fibre Optica", metros: 1200}
  ])
  const [productoEditando, setProductoEditando] = useState(null)
  const [nombreEditado, setNombreEditado] = useState("")
  const [metrosEditado, setMetrosEditado] = useState("")
  const [nombre, setNombre] = useState("")
  const [metros, setMetros] = useState("")
  const totalProductos = productos.length
  const totalMetros = productos.reduce((acc, p) => acc + p.metros, 0)
  const tiposUnicos = new Set(productos.map(p => p.nombre)).size

  const agregarProducto = (e) => {
    e.preventDefault()

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      metros: Number(metros)
    }

    setProductos(prev => [...prev, nuevoProducto])

    setNombre("")
    setMetros("")
  }

  const eliminarProducto = (id) => {
    setProductos(prev => prev.filter(p => p.id !== id))
  }

  const guardarEdicion = (id) => {
    setProductos(prev =>
      prev.map(p =>
        p.id === id
        ? {...p, nombre: nombreEditado, metros: Number(metrosEditado)}
        : p
      )
    )

    setProductoEditando(null)
    setNombreEditado("")
    setMetrosEditado("")
  }
  
  return (
    <div className="flex min-h-screen bg-slate-600">
      
      
      <aside className="w-64 bg-slate-800 text-slate-100 p-6 fixed h-screen">
        <div className="flex justify-center text-3xl font-semibold mb-10">ComLec</div>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <div className="flex flex-col justify-center items-center gap-8 text-sm font-medium">
            <a href="#productos" className="transition-colors text-xl duration-200 hover:text-white shadow-md p-3">Productos</a>
            <a href="#dashboard" className="transition-colors text-xl duration-200 hover:text-white shadow-md p-3">Dashboard</a>
          </div>
        </nav>
      </aside>


      <main className="flex-1 p-10 ml-64">
          
          
          <h1 className="text-2xl font-semibold text-slate-100 ml-5 mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">  
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h2 className="text-sm text-slate-500">Productos Totales</h2>
              <p className="text-2xl font-semibold text-slate-800 mt-2">{totalProductos}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h2 className="text-sm text-slate-500">Metros Disponibles</h2>
              <p className="text-2xl font-semibold text-slate-800 mt-2">{totalMetros}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h2 className="text-sm text-slate-500">Tipos de cable</h2>
              <p className="text-2xl font-semibold text-slate-800 mt-2">{tiposUnicos}</p>
            </div>
          </div>
          
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm max-w-md mt-10">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Agregar Producto</h2>
            <form onSubmit={agregarProducto} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400" required/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Metros</label>
                <input 
                type="number"
                value={metros}
                onChange={(e) => setMetros(e.target.value)}
                className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
                min={1} />
              </div>
              <button type="submit" className="bg-slate-800 text-white rounded-md p-2 hover:bg-slate-900 transition-colors">Agregar</button>
            </form>
          </div>
          

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
                        setMetrosEditado(p.metros)
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
        </main>
    </div>
  )
}

export default App

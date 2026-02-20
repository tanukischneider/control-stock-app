import { useState } from "react"
import Sidebar from "./components/Sidebar"
import DashboardCards from "./components/DashboardCards"
import ProductTable from "./components/ProductTable"

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
      
      <Sidebar />
      


        <main className="flex-1 p-10 ml-64">
          <h1 className="text-2xl font-semibold text-slate-100 ml-5 mb-8">Dashboard</h1>
          <DashboardCards
            totalProductos={totalProductos}
            totalMetros={totalMetros}
            tiposUnicos={tiposUnicos}
            />
          
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
          
          <ProductTable 
            productos={productos}
            productoEditando={productoEditando}
            metrosEditado={metrosEditado}
            nombreEditado={nombreEditado}
            setNombreEditado={setNombreEditado}
            setMetrosEditado={setMetrosEditado}
            guardarEdicion={guardarEdicion}
            setProductoEditando={setProductoEditando}
            eliminarProducto={eliminarProducto}
          />
        </main>
    </div>
  )
}

export default App

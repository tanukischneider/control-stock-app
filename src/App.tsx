import { useState } from "react"
import Sidebar from "./components/Sidebar"
import DashboardCards from "./components/DashboardCards"
import ProductTable from "./components/ProductTable"
import ProductForm from "./components/ProductForm"
import ClientForm from "./components/ClientForm"
import type { Product } from "./types/product"
import type { Client } from "./types/client"


function App() {
  
  const [productos, setProductos] = useState<Product[]>([
    {
      id: crypto.randomUUID(),
      name: "UTP Cat6",
      sku: "UTP-CAT6",
      unit: "m",
      stock: 500,
      price: 1.2
    }
  ])

  const [cliente, setCliente] = useState<Client[]>([
    {
      id: crypto.randomUUID(),
      name: "Rodrigo Miller",
      company: "Comlec",
      phone: "123 456-789",
      email: "comlec@gmail.com"
    }
  ])

  const agregarCliente = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nuevoCliente: Client = {
      id: crypto.randomUUID(),
      name: clientName,
      company: clientCompany,
      phone: clientPhone,
      email: clientEmail
    }

    setCliente(prev => [...prev, nuevoCliente])
    setClientName("")
    setClientCompany("")
    setClientPhone("")
    setClientEmail("")
  }

  const [productoEditando, setProductoEditando] = useState<string | null>(null)
  const [nombreEditado, setNombreEditado] = useState("")
  const [metrosEditado, setMetrosEditado] = useState("")
  const [nombre, setNombre] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientCompany, setClientCompany] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [metros, setMetros] = useState("")
  const totalProductos = productos.length
  const totalMetros = productos.reduce((acc, p) => acc + p.stock, 0)
  const tiposUnicos = new Set(productos.map(p => p.name)).size

  const agregarProducto = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nuevoProducto: Product = {
      id: Date.now().toString(),
      name: nombre,
      sku: crypto.randomUUID(),
      unit: "m",
      stock: Number(metros)
    }

    setProductos(prev => [...prev, nuevoProducto])

    setNombre("")
    setMetros("")
  }

  const eliminarProducto = (id: string) => {
    setProductos(prev => prev.filter(p => p.id !== id))
  }

  const guardarEdicion = (id: string) => {
    setProductos(prev =>
      prev.map(p =>
        p.id === id
        ? {...p, name: nombreEditado, stock: Number(metrosEditado)}
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
            <ProductForm
            name={nombre}
            stock={metros}
            agregarProducto={agregarProducto}
            setNombre={setNombre}
            setMetros={setMetros}
            />
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
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm max-w-md mt-10">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Agregar Cliente</h2>
          <ClientForm
            name={clientName}
            company={clientCompany}
            phone={clientPhone}
            email={clientEmail}
            agregarCliente={agregarCliente}
            setClientName={setClientName}
            setClientCompany={setClientCompany}
            setClientPhone={setClientPhone}
            setClientEmail={setClientEmail}
          />
          </div>
        </main>
    </div>
  )
}

export default App

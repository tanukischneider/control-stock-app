type ProductFormProps = {
    name: string
    stock: string

    agregarProducto: (e: React.SubmitEvent<HTMLFormElement>) => void
    setNombre: (value: string) => void
    setMetros: (value: string) => void
}

function ProductForm({
    name,
    stock,

    agregarProducto,
    setNombre,
    setMetros
}: ProductFormProps) {
    return (
        <form onSubmit={agregarProducto} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                <input 
                type="text" 
                value={name} 
                onChange={(e) => setNombre(e.target.value)} 
                className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400" required/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Metros</label>
                <input 
                type="number"
                value={stock}
                onChange={(e) => setMetros(e.target.value)}
                className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                required
                min={1} />
              </div>
              <button type="submit" className="bg-slate-800 text-white rounded-md p-2 hover:bg-slate-900 transition-colors">Agregar</button>
            </form>
    )
}

export default ProductForm
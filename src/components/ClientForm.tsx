type ClientFormProps = {
    name: string
    company: string
    phone: string
    email: string

    agregarCliente: (e: React.SubmitEvent<HTMLFormElement>) => void
    setClientName: (value: string) => void
    setClientCompany: (value: string) => void
    setClientPhone: (value: string) => void
    setClientEmail: (value: string) => void
}

function ClientForm({
    name,
    company,
    phone,
    email,

    agregarCliente,
    setClientName,
    setClientCompany,
    setClientPhone,
    setClientEmail
}: ClientFormProps) {
    return (
        <form onSubmit={agregarCliente} className="flex flex-col gap-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400" required/>
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                <input 
                    type="text" 
                    value={company}
                    onChange={(e) => setClientCompany(e.target.value)}
                    className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400" required/>
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Telefono</label>
                <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400" required/>
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400" required/>
            </div>
            <button type="submit" className="bg-slate-800 text-white rounded-md p-2 hover:bg-slate-900 transition-colors">Agregar</button>
        </form>
    )
}

export default ClientForm
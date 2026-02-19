function Sidebar() {
    return (
        <aside className="w-64 bg-slate-800 text-slate-100 p-6 fixed h-screen">
            <div className="flex justify-center text-3xl font-semibold mb-10">ComLec</div>
            <nav className="flex flex-col gap-4 text-sm font-medium">
                <div className="flex flex-col justify-center items-center gap-8 text-sm font-medium">
                    <a href="#productos" className="transition-colors text-xl duration-200 hover:text-white shadow-md p-3">Productos</a>
                    <a href="#dashboard" className="transition-colors text-xl duration-200 hover:text-white shadow-md p-3">Dashboard</a>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
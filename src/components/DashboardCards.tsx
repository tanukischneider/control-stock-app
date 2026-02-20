import DashboardCard from "./DashboardCard"

type DashboardCardsProps = {
  totalProductos: number
  totalMetros: number
  tiposUnicos: number
}

function DashboardCards ({
    totalProductos,
    totalMetros,
    tiposUnicos
}: DashboardCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">  
            <DashboardCard value={totalProductos} title={"Productos Totales"} />
            <DashboardCard value={totalMetros} title={"Metros Totales"} />
            <DashboardCard value={tiposUnicos} title={"Tipos Unicos"}  />
          </div>
    )
}

export default DashboardCards
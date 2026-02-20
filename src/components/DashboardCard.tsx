type DashboardCardProps = {
    value: number
    title: string
}

function DashboardCard ({
    value,
    title
}: DashboardCardProps) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-sm text-slate-500">{title}</h2>
            <p className="text-2xl font-semibold text-slate-800 mt-2">{value}</p>
        </div>
    )
}

export default DashboardCard
export type Sale = {
    id: string
    clientId: string
    items: SaleItem[]
    date: string
}

export type SaleItem = {
    assemblyId: string
    quantity: number
}
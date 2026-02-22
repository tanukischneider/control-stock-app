export type Product = {
    id: string
    name: string
    sku: string
    unit: "m" | "unit"
    stock: number
    price?: number
}
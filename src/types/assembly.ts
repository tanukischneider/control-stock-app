export type Assembly = {
    id: string
    name: string
    components: AssemblyItem[]
}

export type AssemblyItem = {
    productId: string
    quantity: number
}
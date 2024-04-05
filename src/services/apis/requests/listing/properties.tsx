// ============================================================
// API Property
// ============================================================
import FetchZiti from "../../fetch/FetchZiti"

import { IProperty } from "@/interfaces/IProperties"

// Property: General 
// ============================================================
export async function getPropertiesList(): Promise<IProperty[]> {
    return FetchZiti(`properties`, "GET")
}

export async function getPropertySingle(id:string): Promise<IProperty> {
    return FetchZiti(`properties/${id}`, "GET")
}

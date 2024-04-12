// ============================================================
// API Property
// ============================================================
import FetchZiti from "../../fetch/FetchZiti"

import { IProperty } from "@/interfaces/IProperties"

interface IRes {
    Properties: IProperty[];
    SchemaData: {}
}

// Property: General 
// ============================================================
export async function getPropertiesList(): Promise<IRes> {
    return FetchZiti(`properties`, "GET")
}

export async function getPropertySingle(id:string): Promise<IProperty> {
    return FetchZiti(`properties/${id}`, "GET")
}

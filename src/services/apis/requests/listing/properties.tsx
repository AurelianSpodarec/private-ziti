// ============================================================
// API Property
// ============================================================
import FetchZiti from '../../fetch/FetchZiti'

import { type IProperty } from '@/interfaces/IProperties'

interface IRes {
  Properties: IProperty[]
  SchemaData: {}
}

// Property: General
// ============================================================
export async function getPropertiesList (): Promise<IRes> {
  return await FetchZiti('properties', 'GET')
}

export async function getPropertySingle (id: string): Promise<IProperty> {
  return await FetchZiti(`properties/${id}`, 'GET')
}

// Property: User
// ============================================================

export async function getUserPropertyList (userID: string): Promise<IProperty> {
  return await FetchZiti(`properties?seller=${userID}`, 'GET')
}

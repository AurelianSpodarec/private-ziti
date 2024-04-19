// ============================================================
// API Locations
// ============================================================
//
// Table of Content
//
//  - Countires
//  - Provinces
//  - Municipalities
//  - Sectors
//

import FetchZiti from "../../fetch/FetchZiti"
import { IProperty } from "@/interfaces/IProperties"

// Locations: Country 
// ============================================================
export function getCountries(): Promise<IProperty[]> {
  return FetchZiti(`locations/countires`, "GET")
}

export function getCountryById(id: number): Promise<IProperty[]> {
  return FetchZiti(`locations/countires/${id}`, "GET")
}

// Locations: Provinces 
// ============================================================
export function getProvinces(id: number): Promise<IProperty[]> {
  return FetchZiti(`locations/provinces?countryId=${id}`, "GET")
}

export function getProvinceById(id: number): Promise<IProperty[]> {
  return FetchZiti(`locations/provinces/${id}`, "GET")
}

// Locations: Municipalities 
// ============================================================
export function getMunicipalities(id: number): Promise<IProperty[]> {
  return FetchZiti(`locations/municipalities?provinceId=${id}`, "GET")
}

export function getMunicipalitiesById(id: number): Promise<IProperty[]> {
  return FetchZiti(`locations/municipalities/${id}`, "GET")
}

// Locations: Sectors
// ============================================================
export function getSectors(id: number): Promise<IProperty[]> {
  return FetchZiti(`locations/sectors?municipalityId=${id}`, "GET")
}

export function getSectorsById(id: number): Promise<IProperty[]> {
  return FetchZiti(`locations/sectors/${id}`, "GET")
}

export function getSectorsSearch(string: string): Promise<IProperty[]> {
  return FetchZiti(`locations/sectors?s=${string}`, "GET")
}

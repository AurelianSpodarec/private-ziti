import { getResponseContent, RequestError } from '../../requests'
import config from './config_ziti'

// Define a generic function with a type parameter T
async function FetchZiti<T> (endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: unknown): Promise<T> {
  const response = await fetch(`${config.API_URL}/${endpoint}`, {
    method,
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: method !== 'GET' && data ? JSON.stringify(data) : null
  })

  if (!response.ok) {
    const content = await getResponseContent(response)
    throw new RequestError(response.statusText, response.status, content)
  }

  // Use the generic type T for parsing JSON
  return await (response.json() as Promise<T>)
}

export default FetchZiti

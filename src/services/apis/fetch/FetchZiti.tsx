import { getResponseContent, RequestError } from '../../requests'
import config from './config_ziti'

async function FetchZiti<T> (endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: unknown): Promise<T> {
  const response = await fetch(`${config.API_URL}/${endpoint}`, {
    method,
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    const errorContent = await response.json()
    throw new RequestError(response.statusText, response.status, errorContent)
  }

  const content = await getResponseContent(response)
  if (!content) {
    throw new Error('No content returned from the API')
  }
  return content as T
}

export default FetchZiti

import { getResponseContent, RequestError } from '../../requests'
import config from './config_ziti'

async function FetchZiti<T> (endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: unknown, refreshToken?: string): Promise<T> {

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Origin: 'ziti'
  }

  if (refreshToken) {
    headers['Cookie'] = `refresh=${refreshToken}`
  }

  const response = await fetch(`${config.API_URL}/${endpoint}`, {
    method,
    credentials: 'include',
    headers,
    body: method !== 'GET' ? JSON.stringify(data) : undefined
  })

  const content = await getResponseContent(response) as T
  const cookies = response.headers.get('Set-Cookie')

  if (response.ok) return { ...content, cookies }
  throw new RequestError(response.statusText, response.status, content)
}

export default FetchZiti

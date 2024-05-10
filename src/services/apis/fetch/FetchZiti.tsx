import { getResponseContent, RequestError } from '../../requests'
import config from './config_ziti'

async function FetchZiti (endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: unknown) {
  const response = await fetch(`${config.API_URL}/${endpoint}`, {
    method,
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: 'ziti'
    },
    body: JSON.stringify(data)
  })

  const content = await getResponseContent(response)

  if (response.ok) return content
  throw new RequestError(response.statusText, response.status, content)
}

export default FetchZiti

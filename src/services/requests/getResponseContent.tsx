interface Response {
  headers: {
    get: (header: string) => string | null
  }
  blob: () => Promise<Blob>
  text: () => Promise<string>
  json: () => Promise<string>
}

type ResponseContent = Blob | string | Record<string, unknown> | null | undefined

const getResponseContent = async function (response: Response): Promise<ResponseContent> {
  if (!response) return null
  const contentType = response.headers.get('Content-Type')

  if (contentType) {
    if (contentType.includes('image')) {
      return await response.blob()
    }

    if (contentType.includes('text/html')) {
      return await response.text()
    }

    if (contentType.includes('application/json')) {
      return await response.json()
    }

    if (contentType.includes('application/zip')) {
      return await response.blob()
    }
  }

  return null
}

export default getResponseContent

export default class RequestError extends Error {
  public status
  public body
  constructor (message: string, status: unknown, body: unknown) {
    super(message)
    this.status = status
    this.body = body
  }
}

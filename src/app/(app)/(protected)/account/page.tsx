import { auth } from "@/auth"

async function Account () {
  const session = await auth()

  console.log("Account sessions", session)
  return (
    <div>
      Account Protected
      <div>
        {JSON.stringify(session)}
      </div>
    </div>
  )
}

export default Account

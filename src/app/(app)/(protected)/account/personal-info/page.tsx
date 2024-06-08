import { auth } from "@/auth"

function Box ({ item }) {
  return (
    <div>
      {item}
    </div>
  )
}

async function AccountPersonalInfo () {
  const session = await auth()

  return (
    <div>
      AccountPersonalInfo Protected
      <div>
        {JSON.stringify(session)}

        <Box item={session?.user?.givenName} />
        <Box item={session?.user?.familyName} />
        <Box item={session?.user?.email} />
      </div>
    </div>
  )
}

export default AccountPersonalInfo

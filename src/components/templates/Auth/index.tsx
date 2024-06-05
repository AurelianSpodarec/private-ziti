import AuthForm from './AuthForm'
import AuthProvider from './_context/auth-provider'

function TemplateAuth () {
  return (
    <AuthProvider>
      <AuthForm />
    </AuthProvider>
  )
}

export default TemplateAuth

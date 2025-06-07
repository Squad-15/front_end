import { useState } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

type DataUser = {
  roleUser: string;
}

export function useLogin() {
  const [matricula, setMatricula] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<unknown>(null)

  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleLogin = async () => {
    setLoading(true)
    setError(null)

    try {
        // const response = await fetch('https://back-end-sz7p.onrender.com/auth/login', {
        const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numberRegister: matricula,
          password: password,
        }),
      })

      if (!response.ok) {
        throw new Error('Login falhou. Verifique seus dados.')
      }

      const data = await response.json()

      if (data.token) {
        Cookies.set('token', data.token, {
          expires: 0.0104,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
        })
      }

      const decodedToken = jwtDecode(data.token) as DataUser
      const role = decodedToken.roleUser;

      console.log(role)

    if (!role) {
      throw new Error('Função do usuário não encontrada no token.')
    }

    setUser(data)
    setIsRedirecting(true)

    if (role === 'ADMINISTRADOR' || role === 'GESTOR') {
      window.location.href = '/dashboard'
    } else {
      window.location.href = '/modulo'
    }

      setUser(data)
      setIsRedirecting(true);
    } catch (err) {
      setMatricula('')
      setPassword('')
      setError('Erro ao fazer login. Tente novamente.')
      if (err instanceof Error) {
        toast.error(err.message || 'Erro ao fazer login')
      } else {
        toast.error('Erro ao fazer login')
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    matricula,
    setMatricula,
    password,
    setPassword,
    handleLogin,
    loading,
    error,
    user,
    setUser,
    setLoading,
    setError,
    isRedirecting,
  }
}

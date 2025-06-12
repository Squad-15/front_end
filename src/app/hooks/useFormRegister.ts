import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export const useFormRegister = () => {
  const [step, setStep] = useState(1)
  const [departaments, setDepartaments] = useState([])
  const [profile, setProfile] = useState([])
  const [typeconnection, setTypeConnection] = useState([])
  const [roleUser, setRoleUser] = useState([])
  const [location, setLocation] = useState([])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    roleUser: '',
    cargo: '',
    departamento: '',
    typeconnection: '',
    location: '',
    dataAdmissao: '',
    nivelPermissao: ''
  })

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      roleUser: '',
      cargo: '',
      departamento: '',
      typeconnection: '',
      location: '',
      dataAdmissao: '',
      nivelPermissao: ''
    })
    setStep(1)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handlePrevStep = () => setStep((prev) => prev - 1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://back-end-sz7p.onrender.com/auth/register', {
      // const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Erro ao cadastrar usuário')
      const user = await response.json();

      // Parte para conseguir ver a matricula e senha
      console.log('Matrícula:', user.numberRegister);
      console.log('Senha:', user.passwordPlain);


     const emailBody = {
        ownerRef: user.firstName,
        emailFrom: 'jotanunes.corporativo@gmail.com',
        emailTo: user.email,
        subject: 'Bem-vindo à Plataforma Jota Nunes!',
        text: [
          `Olá ${user.firstName},`,
          '',
          'Seja muito bem-vindo(a) à Plataforma Jota Nunes!',
          '',
          `Aqui estão seus dados de acesso:`,
          `📌 Matrícula: ${user.numberRegister}`,
          `🔑 Senha: ${user.passwordPlain }`,
          '',
          'Acesse a plataforma através do link abaixo:',
          `${'https://jotanunestreinamento.netlify.app/login'}`,
          '',
          'Em caso de dúvidas, nossa equipe está à disposição para te ajudar.',
          '',
          'Desejamos uma excelente experiência!',
          '',
          'Atenciosamente,',
          'Equipe Jota Nunes',
        ].join('\n'),
      };



      await fetch('https://back-end-sz7p.onrender.com/sending-email', {
      // await fetch('http://localhost:8080/sending-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailBody),
      })

      toast.success('Usuário cadastrado com sucesso!')
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)
      toast.error('Erro ao cadastrar usuário. Tente novamente mais tarde.')
    } finally {
      resetForm()
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    fetch('https://back-end-sz7p.onrender.com/metadata/departaments')
      .then((res) => res.json())
      .then((data) => setDepartaments(data))
  }, [])

  useEffect(() => {
    fetch('https://back-end-sz7p.onrender.com/metadata/profiles')
      .then((res) => res.json())
      .then((data) => setProfile(data))
  }, [])

  useEffect(() => {
    fetch('https://back-end-sz7p.onrender.com/metadata/typeconnection')
      .then((res) => res.json())
      .then((data) => setTypeConnection(data))
  }, [])

  useEffect(() => {
    fetch('https://back-end-sz7p.onrender.com/metadata/roleuser')
      .then((res) => res.json())
      .then((data) => setRoleUser(data))
  }, [])

  useEffect(() => {
    fetch('https://back-end-sz7p.onrender.com/metadata/location')
      .then((res) => res.json())
      .then((data) => setLocation(data))
  }, [])

  return {
    step,
    setStep,
    departaments,
    profile,
    typeconnection,
    roleUser,
    location,
    formData,
    handleChange,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
    isSubmitting,
  }
}

import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useContactFormStore = defineStore('contactForm', () => {
  const dataForm = reactive({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    acceptedTerms: false,
  })

  //objeto de erros
  const errors = reactive({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    acceptedTerms: '',
  })

  const sucess = ref(false)

  const submitForm = () => {
    let sucessTimeout = null

    if (validateDataForm()) {
      sucess.value = true
    }

    if (sucess.value) {
      clearErrors()
      clearDataForm()

      sucessTimeout = setTimeout(() => {
        sucess.value = false
        sucessTimeout = null // Limpa a referência
      }, 3000)
    }
  }

  const clearErrors = () => {
    for (const campo in errors) {
      errors[campo] = ''
    }
  }

  const clearDataForm = () => {
    for (const campo in dataForm) {
      dataForm[campo] = ''
    }
  }

  // função de validacao
  const validateDataForm = () => {
    clearErrors()

    let isValid = true

    for (const campo in dataForm) {
      if (typeof dataForm[campo] == 'string' && !dataForm[campo].trim()) {
        errors[campo] = 'Esse campo é obrigatório'
        isValid = false
      }
      if (typeof dataForm[campo] === 'boolean' && !dataForm[campo]) {
        errors[campo] = 'Você deve aceitar os termos'
        isValid = false
      }
    }

    if (dataForm.email && !isValidEmail(dataForm.email)) {
      errors.email = 'Email inválido'
      isValid = false
    }
    console.log('erros: ', { ...errors })

    return isValid
  }

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  return {
    dataForm,
    errors,
    submitForm,
    sucess,
  }
})

<script setup>
  import { reactive, ref } from 'vue'

  const dadosValidos = ref(false)

  const dataForm = reactive({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    acceptedTerms: false,
  })

  const handleSubmit = () => {
    const dados = { ...dataForm }

    //   console.log(dados)
    //   validateDataForm()
    //   console.log(validateDataForm())
    dadosValidos.value = validateDataForm()
  }

  const validateDataForm = () => {
    const campos = ['firstName', 'lastName', 'email', 'subject', 'message', 'acceptedTerms']

    campos.forEach((campo) => {
      console.log(dataForm[campo])
      if (dataForm[campo] == 0) return false
    })
    return true
  }
</script>
<template>
  <form
    class="bg-white max-w-2xl my-16 mx-auto p-6 rounded-xl flex flex-col gap-4"
    @submit.prevent="handleSubmit"
  >
    <h1 class="text-2xl font-bold text-grey-900">Contato</h1>

    <div class="flex flex-col md:flex-row justify-between gap-4">
      <div class="flex flex-col gap-1.5 w-full">
        <label for="firstName" class="text-grey-900">Nome</label>
        <input
          type="text"
          id="firstName"
          v-model="dataForm.firstName"
          class="border border-grey-500 rounded-md h-10 px-3 focus:border-2 focus:border-green-600 focus:outline-none transition-colors"
        />
      </div>

      <div class="flex flex-col gap-1.5 w-full">
        <label for="lastName" class="text-grey-900">Sobrenome</label>
        <input
          type="text"
          id="lastName"
          v-model="dataForm.lastName"
          class="border border-grey-500 rounded-md h-10 px-3 focus:border-2 focus:border-green-600 focus:outline-none transition-colors"
        />
      </div>
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="email" class="text-grey-900">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="dataForm.email"
        class="border border-grey-500 rounded-md h-10 px-3 focus:border-2 focus:border-green-600 focus:outline-none transition-colors"
      />
    </div>

    <label for="assunto" class="text-grey-900">Motivo do contato</label>
    <div class="flex flex-col md:flex-row justify-between gap-4 w-full">
      <label
        for="geral"
        class="py-2 px-3 w-full flex items-center gap-2 border border-grey-500 rounded-md cursor-pointer hover:bg-green-200 transition-colors"
      >
        <input
          type="radio"
          name="assunto"
          id="geral"
          value="geral"
          v-model="dataForm.subject"
          class="accent-green-600"
        />
        <span class="text-grey-900">Assuntos gerais</span>
      </label>

      <label
        for="suporte"
        class="py-2 px-3 w-full flex items-center gap-2 border border-grey-500 rounded-md cursor-pointer hover:bg-green-200 transition-colors"
      >
        <input
          type="radio"
          name="assunto"
          id="suporte"
          value="suporte"
          v-model="dataForm.subject"
          class="accent-green-600"
        />
        <span class="text-grey-900">Pedido de suporte</span>
      </label>
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="mensagem" class="text-grey-900">Mensagem</label>
      <textarea
        name="mensagem"
        id="mensagem"
        v-model="dataForm.message"
        class="h-14 resize-none p-2 px-3 border border-grey-500 rounded-md focus:border-2 focus:border-green-600 focus:outline-none transition-colors"
      />
    </div>

    <div class="flex items-center gap-3">
      <input
        type="checkbox"
        name="termos"
        id="termos"
        v-model="dataForm.acceptedTerms"
        class="w-4 h-4 accent-green-600 cursor-pointer"
      />
      <label for="termos" class="text-grey-900 cursor-pointer">Eu aceito os termos.</label>
    </div>

    <button
      type="submit"
      class="bg-green-600 w-full py-3 text-white border-none rounded-md font-bold cursor-pointer hover:brightness-90 transition-all"
    >
      Enviar
    </button>
  </form>
</template>

<script setup>
  import { useContactFormStore } from '@/stores/contactForm'

  const store = useContactFormStore()
</script>
<template>
  <form
    class="bg-white max-w-2xl my-16 mx-auto p-6 rounded-xl flex flex-col gap-4"
    @submit.prevent="store.validateDataForm"
  >
    <h1 class="text-2xl font-bold text-grey-900">Contato</h1>

    <div class="flex flex-col md:flex-row justify-between gap-4">
      <div class="flex flex-col gap-1.5 w-full">
        <label for="firstName" class="text-grey-900">Nome</label>
        <input
          type="text"
          id="firstName"
          v-model="store.dataForm.firstName"
          class="border border-grey-500 rounded-md h-10 px-3 focus:border-2 focus:border-green-600 focus:outline-none transition-colors"
          :class="{ 'border-red': store.errors.firstName.trim() }"
        />
        <span v-if="store.errors.firstName" class="text-red text-sm">
          {{ store.errors.firstName }}
        </span>
      </div>

      <div class="flex flex-col gap-1.5 w-full">
        <label for="lastName" class="text-grey-900">Sobrenome</label>
        <input
          type="text"
          id="lastName"
          v-model="store.dataForm.lastName"
          class="border border-grey-500 rounded-md h-10 px-3 focus:border-2 focus:border-green-600 focus:outline-none transition-colors"
          :class="{ 'border-red': store.errors.lastName.trim() }"
        />
        <span v-if="store.errors.lastName" class="text-red text-sm">
          {{ store.errors.lastName }}
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="email" class="text-grey-900">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="store.dataForm.email"
        class="border border-grey-500 rounded-md h-10 px-3 focus:border-2 focus:border-green-600 focus:outline-none transition-colors"
        :class="{ 'border-red': store.errors.email.trim() }"
      />
      <span v-if="store.errors.email" class="text-red text-sm">
        {{ store.errors.email }}
      </span>
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
          v-model="store.dataForm.subject"
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
          v-model="store.dataForm.subject"
          class="accent-green-600"
        />
        <span class="text-grey-900">Pedido de suporte</span>
      </label>
    </div>
    <span v-if="store.errors.subject" class="text-red text-sm">
      {{ store.errors.subject }}
    </span>

    <div class="flex flex-col gap-1.5">
      <label for="mensagem" class="text-grey-900">Mensagem</label>
      <textarea
        name="mensagem"
        id="mensagem"
        v-model="store.dataForm.message"
        class="h-14 resize-none p-2 px-3 border border-grey-500 rounded-md focus:border-2 focus:border-green-600 focus:outline-none transition-colors"
        :class="{ 'border-red': store.errors.message.trim() }"
      />
      <span v-if="store.errors.email" class="text-red text-sm">
        {{ store.errors.email }}
      </span>
    </div>

    <div class="flex items-center gap-3">
      <input
        type="checkbox"
        name="termos"
        id="termos"
        v-model="store.dataForm.acceptedTerms"
        class="w-4 h-4 accent-green-600 cursor-pointer"
      />
      <label for="termos" class="text-grey-900 cursor-pointer">Eu aceito os termos.</label>
    </div>
    <span v-if="store.errors.acceptedTerms" class="text-red text-sm">
      {{ store.errors.acceptedTerms }}
    </span>

    <button
      type="submit"
      class="bg-green-600 w-full py-3 text-white border-none rounded-md font-bold cursor-pointer hover:brightness-90 transition-all"
    >
      Enviar
    </button>
  </form>
</template>

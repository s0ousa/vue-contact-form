<script setup>
import { reactive } from 'vue'

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
  console.log(dados)
}
</script>

<template>
  <form class="container-form">
    <h1>Contato</h1>
    <div class="container-name">
      <div class="input-label">
        <label for="firstName">Nome</label>
        <input type="text" id="firstName" v-model="dataForm.firstName" />
      </div>
      <div class="input-label">
        <label for="lastName">Sobrenome</label>
        <input type="text" id="lastName" v-model="dataForm.lastName" />
      </div>
    </div>
    <div class="container-email">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="dataForm.email" />
    </div>
    <label for="assunto">Motivo do contato</label>
    <div class="container-assunto">
      <label for="geral" class="radio-input">
        <input type="radio" name="assunto" id="geral" value="geral" v-model="dataForm.subject" />
        <span>Assuntos gerais</span>
      </label>
      <label for="suporte" class="radio-input">
        <input
          type="radio"
          name="assunto"
          id="suporte"
          value="suporte"
          v-model="dataForm.subject"
        />
        <span>Pedido de suporte</span>
      </label>
    </div>
    <div class="container-msg">
      <label for="mensagem">Mensagem</label>
      <textarea name="mensagem" id="mensagem" v-model="dataForm.message" />
    </div>
    <div class="container-termos">
      <input type="checkbox" name="termos" id="termos" v-model="dataForm.acceptedTerms" />
      <label for="termos">Eu aceito os termos.</label>
    </div>
    <button type="button" @click="handleSubmit">Enviar</button>
  </form>
</template>

<style scoped>
.container-form {
  background-color: var(--white);
  max-width: 640px;
  /* min-width: 375px; */
  margin: 64px auto;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;
}

.container-name {
  display: flex;
  justify-content: space-between;
}

.input-label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 48%;
}

input {
  border: 1px solid var(--grey-500);
  border-radius: 6px;
  height: 38px;
  padding: 4px 12px;
}

input:focus {
  border: 2px solid var(--green-600);
  outline: none;
}

.container-email {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.container-assunto {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* background: pink; */
}

.radio-input {
  padding: 2px 12px;
  width: 48%;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--grey-500);
  border-radius: 6px;
}
.radio-input:hover {
  cursor: pointer;
}

.radio-input input[type='radio'] {
  padding: 100%;
  background-color: pink;
}

.container-msg {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.container-msg textarea {
  height: 56px;
  resize: none;
  padding: 8px 12px;
  border: 1px solid var(--grey-500);
  border-radius: 6px;
}

textarea:focus {
  border: 2px solid var(--green-600);
  outline: none;
}

.container-termos {
  display: flex;
  align-items: center;
  gap: 12px;
}

input[type='radio']:checked,
input[type='checkbox']:checked {
  accent-color: var(--green-600);
}

button {
  background: var(--green-600);
  width: 100%;
  padding: 12px 0;
  color: var(--white);
  border: none;
  border-radius: 6px;
  font-weight: bold;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.9);
}
</style>

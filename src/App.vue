<script setup>
import ContactForm from './components/ContactForm.vue'
</script>

<template>
  <ContactForm />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

:root {
  /* Primary */
  --green-200: hsl(148, 38%, 91%);
  --green-600: hsl(169, 82%, 27%);
  --red: hsl(0, 66%, 54%);

  /* Neutral */
  --white: hsl(0, 0%, 100%);
  --grey-500: hsl(186, 15%, 59%);
  --grey-900: hsl(187, 24%, 22%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Karla', sans-serif;
}

body {
  background-color: var(--green-200);
}
</style>

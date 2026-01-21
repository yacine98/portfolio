<template>
  <form @submit.prevent="submit" class="form">
    <input
      :value="form.firstName"
      @input="update('firstName', $event.target.value)"
      placeholder="Prénom"
      required
    />

    <input
      :value="form.lastName"
      @input="update('lastName', $event.target.value)"
      placeholder="Nom"
      required
    />

    <input
      :value="form.email"
      @input="update('email', $event.target.value)"
      type="email"
      placeholder="Email"
      required
    />

    <textarea
      :value="form.message"
      @input="update('message', $event.target.value)"
      placeholder="Message"
      required
    />

    <button type="submit">Envoyer</button>
  </form>
</template>

<script>
export default {
  computed: {
    form() {
      return this.$store.state.contactForm
    }
  },
  methods: {
    update(field, value) {
      this.$store.commit('UPDATE_FIELD', { field, value })
    },
    submit() {
      this.$store.dispatch('submitForm')
      alert('Message envoyé ✅')
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, textarea {
  padding: 8px;
}

button {
  padding: 10px;
  background: black;
  color: white;
  border: none;
}
</style>

export const state = () => ({
  contactForm: {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }
})

export const mutations = {
  UPDATE_FIELD(state, { field, value }) {
    state.contactForm[field] = value
  },

  RESET_FORM(state) {
    state.contactForm = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  }
}

export const actions = {
  submitForm({ state, commit }) {
    console.log('Formulaire envoyé :', state.contactForm)

    // Plus tard :
    // - envoyer un event GTM / GA4
    commit('RESET_FORM')
  }
}

<template>
  <header class="header">
    <nav>
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/about">À propos</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 16px;
  background: #111;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

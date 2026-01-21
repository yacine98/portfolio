<template>
  <footer class="footer">
    <p>© {{ year }} - Yacine Dia</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: 40px;
  padding: 16px;
  text-align: center;
  background: #f2f2f2;
}
</style>

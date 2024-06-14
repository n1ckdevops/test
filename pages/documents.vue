<!-- pages/documents.vue -->
<template>
  <div class="wrapper">
    <Breadcrumbs />
    <div class="container">
      <h1>Документы</h1>

      <nuxt-link to="/documents/license-agreement"
        >Лицензионный договор</nuxt-link
      >
      <hr />
      <nuxt-link to="/documents/personal-data"
        >Политика обработки персональных данных</nuxt-link
      >
      <hr />
      <nuxt-link to="/documents/payment-info">Информация об оплате</nuxt-link>
    </div>
  </div>
</template>

<script setup>
import Breadcrumbs from "~/components/Breadcrumbs.vue";
definePageMeta({
  breadcrumb: "Документы",
});
</script>
<style scoped>
a {
  color: #000;
}
h1 {
  font-weight: 700;
  font-size: 41px;
  line-height: 120%;
}
.router-link-exact-active {
  color: #a24545 !important;
}
</style>

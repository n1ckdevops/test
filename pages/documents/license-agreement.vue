<!-- pages/documents/license-agreement.vue -->
<template>
  <div>
    <Breadcrumbs />
    <div class="container">
      <h1>Лицензионный договор</h1>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  breadcrumb: "Лицензионный договор",
});
</script>

<style scoped>
.container {
  padding: 1rem;
}

.license-title {
  font-size: 1.5rem;
  margin-top: 1rem;
}

.license-text {
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>

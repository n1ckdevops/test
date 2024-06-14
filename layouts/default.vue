<!-- layouts/default.vue -->
<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="container"></div>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

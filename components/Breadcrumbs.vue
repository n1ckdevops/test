<!-- breadscrumbs -->
<template>
  <div class="container">
    <div aria-label="breadcrumb">
      <div class="breadcrumb">
        <div
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          :class="[
            'breadcrumb-item',
            { active: index === breadcrumbs.length - 1 },
          ]"
        >
          <nuxt-link
            v-if="index !== breadcrumbs.length - 1"
            :to="breadcrumb.path"
            >{{ breadcrumb.name }}</nuxt-link
          >
          <span v-else>{{ breadcrumb.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const breadcrumbs = ref([]);

const generateBreadcrumbs = (route) => {
  const matchedRoutes = route.matched;
  const breadcrumbsArray = matchedRoutes.map((routeRecord, index) => {
    const path = matchedRoutes.slice(0, index + 1).reduce((acc, record) => {
      return (
        acc +
        (record.path.endsWith("/") ? record.path.slice(0, -1) : record.path)
      );
    }, "");

    return {
      name:
        routeRecord.meta.breadcrumb ||
        routeRecord.name ||
        path.split("/").pop(),
      path: path || "/",
    };
  });

  breadcrumbsArray.unshift({ name: "Главная", path: "/" });
  breadcrumbs.value = breadcrumbsArray;
};

watch(
  route,
  (newRoute) => {
    generateBreadcrumbs(newRoute);
  },
  { immediate: true }
);
</script>

<style scoped>
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 1rem;
}
.breadcrumb-item a {
  color: #000 !important; /* Черный цвет для неактивных ссылок */
  text-decoration: none;
}

.breadcrumb-item.active span {
  color: #888; /* Серый цвет для активной ссылки */
}
.breadcrumb-item + .breadcrumb-item::before {
  content: "•" !important;
  padding-right: 10px;
  color: #000;
}
</style>

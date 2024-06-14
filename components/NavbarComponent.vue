<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand"
          ><img src="~/assets/logo.png" alt="Логотип"
        /></nuxt-link>
        <button
          class="navbar-toggler custom-toggler menu-btn"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="link-item underline-one">
              <nuxt-link to="/prices" class="link nav-link">Тарифы</nuxt-link>
            </li>
            <li class="link-item underline-one">
              <nuxt-link to="/contacts" class="link nav-link"
                >Контакты</nuxt-link
              >
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <a class="link-tel nav-link underline-one" href="tel:+74951184422"
              >+7 495 118-44-22</a
            >
            <a class="link nav-link link-login underline-one" href="#">Вход</a>
            <button class="btn btn-primary">Регистрация</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  mounted() {
    const menuBtn = document.querySelector(".navbar-toggler-icon");
    const navbarNav = document.getElementById("navbarNav");

    const toggleMenu = () => {
      navbarNav.classList.toggle("show");
    };

    const handleMenu = (e) => {
      if (e.target.closest("ul>li>a")) {
        navbarNav.classList.remove("show");
      }
    };

    const handleClickOutside = (e) => {
      if (!navbarNav.contains(e.target) && !menuBtn.contains(e.target)) {
        navbarNav.classList.remove("show");
      }
    };

    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        navbarNav.classList.remove("show");
      }
    };

    menuBtn.addEventListener("click", toggleMenu);
    navbarNav.addEventListener("click", handleMenu);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
  },
};
</script>

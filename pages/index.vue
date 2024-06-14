<template>
  <main>
    <!-- form -->
    <div class="main-wrapper">
      <div class="container">
        <div class="main-wrapper_text">
          <h1 class="main-wrapper_title">
            Проверьте штрафы и зарегестрируйтесь в 1 клик
          </h1>
          <form class="row g-3 main-form" @submit.prevent="handleSubmit">
            <div class="col-md-7">
              <label for="validationCustom01" class="form-label"
                >Номер автомобиля</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                v-model="form.carNumber"
                @blur="validateField('carNumber')"
                :class="{ 'is-invalid': errors.carNumber }"
                required
              />
              <div v-if="errors.carNumber" class="invalid-feedback">
                {{ errors.carNumber }}
              </div>
            </div>
            <div class="col-md-5">
              <label for="validationCustom02" class="form-label">Регион</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                v-model="form.region"
                @blur="validateField('region')"
                :class="{ 'is-invalid': errors.region }"
                required
              />
              <div v-if="errors.region" class="invalid-feedback">
                {{ errors.region }}
              </div>
            </div>
            <div class="col-12" style="margin-top: 6px">
              <label for="inputAddress" class="form-label"
                >Свидетельство о регистрации ТС</label
              >
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                v-model="form.registrationCertificate"
                @blur="validateField('registrationCertificate')"
                :class="{ 'is-invalid': errors.registrationCertificate }"
                required
              />
              <div
                v-if="errors.registrationCertificate"
                class="invalid-feedback"
              >
                {{ errors.registrationCertificate }}
              </div>
            </div>
            <div class="col-5">
              <button type="submit" class="btn btn-primary">
                Проверить штрафы →
              </button>
            </div>
            <div class="col-6">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click="openModal"
              >
                <img
                  src="/assets/video-logo.svg"
                  class="service-img"
                  alt="О сервисе"
                />
                О сервисе
                <span>(1 мин. 20 сек)</span>
              </button>
            </div>
            <div class="col-12">
              <p class="main-wrapper_text__p">
                Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
                персональных данных и принимаете оферту
              </p>
            </div>
          </form>
        </div>
        <div class="main-wrapper_img"></div>
      </div>
    </div>
    <!-- ends form -->

    <!-- ads block -->
    <div class="adv-block">
      <div class="container mt-4">
        <h2 class="adv-block__title">
          Плюсы использования сервиса «Компас» для анализа штрафов
        </h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="d-flex align-items-center">
                <img
                  src="/assets/carpark.svg"
                  alt="Лого 1"
                  class="card-logo"
                  width="59"
                  height="28"
                />
                <div class="card-body p-0">
                  <h3 class="card-title">Неограниченый автопарк</h3>
                  <p class="card-text">
                    Можно добавить неограниченное кол-во машин и водителей
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="d-flex align-items-center">
                <img
                  src="/assets/cuts.svg"
                  alt="Лого 2"
                  class="card-logo"
                  width="59"
                  height="55"
                />
                <div class="card-body p-0">
                  <h3 class="card-title">Сокращение затрат до 50%</h3>
                  <p class="card-text">
                    Максимально быстро узнаете о штрафах в автоматическом
                    режиме, тем самым у вас есть время оплатить по скидке
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="d-flex align-items-center">
                <img
                  src="/assets/safety_logo.svg"
                  alt="Лого 3"
                  class="card-logo"
                  width="53"
                  height="66"
                />
                <div class="card-body p-0">
                  <h3 class="card-title">Безопасность</h3>
                  <p class="card-text">
                    Данные передаются в зашифрованном виде, они доступны только
                    получателю
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="d-flex align-items-center">
                <img
                  src="/assets/notification.svg"
                  alt="Лого 4"
                  class="card-logo"
                  width="59"
                  height="59"
                />
                <div class="card-body p-0">
                  <h3 class="card-title">Уведомление о погашении</h3>
                  <p class="card-text">
                    Мы оповестим вас о том, что штраф был погашен и
                    соответствующая запись создана в ГИС ГМП
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="d-flex align-items-center">
                <img
                  src="/assets/payment_receipt.svg"
                  alt="Лого 5"
                  class="card-logo"
                  width="53"
                  height="61"
                />
                <div class="card-body p-0">
                  <h3 class="card-title">Квитанция об оплате</h3>
                  <p class="card-text">
                    После совершения оплаты банковской картой на Вашу
                    электронную почту придет квитанция об успешной оплате.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="d-flex align-items-center">
                <img
                  src="/assets/time_logo.svg"
                  alt="Лого 6"
                  class="card-logo"
                  width="59"
                  height="53"
                />
                <div class="card-body p-0">
                  <h3 class="card-title">
                    Все история сохраняется по каждой машине
                  </h3>
                  <p class="card-text">
                    Вся история штрафов сохраняется по машине и водителю,
                    позволяет анализировать статистику по штрафам
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ads block ends -->

    <!-- Video -->
    <div id="videoModal" class="modal" ref="modal">
      <div class="modal-content">
        <span class="closeBtn" @click="closeModal">&times;</span>
        <iframe
          id="youtubePlayer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BI7quU-lZV8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          ref="youtubePlayer"
        ></iframe>
      </div>
    </div>
    <!-- Video ends -->

    <!-- docs block -->
    <div class="docs">
      <div class="container docs-container">
        <h2 class="docs-title">Документы</h2>
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="40"
          :navigation="{
            nextEl: '.button-next',
            prevEl: '.button-prev',
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            '1200': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }"
          :pagination="{ clickable: true }"
          style="padding: 33px"
          class="MySwiper"
        >
          <!-- card -->
          <swiper-slide class="docs-card">
            <div class="docs-block">
              <div class="docs-block_title">Лицензионный договор</div>
              <div class="docs-block_text">
                Механизм разбрасывания веерного типа приводится в действие от
                колес тележки, отличается простой и надежной конструкцией, не
                нуждается в смазке.
              </div>
            </div>
            <button class="docs-block_button" @click="goToLicense">
              Перейти
            </button>
          </swiper-slide>
          <!-- card ends -->
          <!-- card -->
          <swiper-slide class="docs-card">
            <div class="docs-block">
              <div class="docs-block_title">
                Политика обработки персональных данных
              </div>
              <div class="docs-block_text">
                Радиус разброса ПГМ составляет до 3 метров и может
                регулироваться.
              </div>
            </div>
            <button class="docs-block_button" @click="goToPolitics">
              Перейти
            </button>
          </swiper-slide>
          <!-- card ends -->
          <!-- card -->
          <swiper-slide class="docs-card">
            <div class="docs-block">
              <div class="docs-block_title">Информация об оплате</div>
              <div class="docs-block_text">
                Десятипозиционный переключатель дозировки расположен на ручке
                тележки и позволяет очень точно регулировать объем рассыпаемого
                реагента с учетом его массы и фракции.
              </div>
            </div>
            <button class="docs-block_button" @click="goToPayment">
              Перейти
            </button>
          </swiper-slide>
          <!-- card ends -->
          <!-- card -->
          <swiper-slide class="docs-card">
            <div class="docs-block">
              <div class="docs-block_title">Лицензионный договор</div>
              <div class="docs-block_text">
                Механизм разбрасывания веерного типа приводится в действие от
                колес тележки, отличается простой и надежной конструкцией, не
                нуждается в смазке.
              </div>
            </div>
            <button class="docs-block_button" @click="goToLicense">
              Перейти
            </button>
          </swiper-slide>
          <!-- card ends -->
          <!-- card -->
          <swiper-slide class="docs-card">
            <div class="docs-block">
              <div class="docs-block_title">
                Политика обработки персональных данных
              </div>
              <div class="docs-block_text">
                Радиус разброса ПГМ составляет до 3 метров и может
                регулироваться.
              </div>
            </div>
            <button class="docs-block_button" @click="goToPolitics">
              Перейти
            </button>
          </swiper-slide>
          <!-- card ends -->
          <!-- card -->
          <swiper-slide class="docs-card">
            <div class="docs-block">
              <div class="docs-block_title">Информация об оплате</div>
              <div class="docs-block_text">
                Десятипозиционный переключатель дозировки расположен на ручке
                тележки и позволяет очень точно регулировать объем рассыпаемого
                реагента с учетом его массы и фракции.
              </div>
            </div>
            <button class="docs-block_button" @click="goToPayment">
              Перейти
            </button>
          </swiper-slide>

          <div class="button-prev">
            <img src="/assets/arrow-last.svg" alt="Предыдущий слайд" />
          </div>
          <div class="button-next">
            <img src="/assets/arrow-next.svg" alt="Следующий слайд" />
          </div>
          <!-- card ends -->
        </swiper>
      </div>
    </div>
    <!-- docs block ends -->
  </main>
</template>

<!-- corusel script -->
<script setup>
import { ref, onMounted, reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useRouter } from "vue-router";

const form = reactive({
  carNumber: "",
  region: "",
  registrationCertificate: "",
});

const errors = reactive({
  carNumber: null,
  region: null,
  registrationCertificate: null,
});

const validateField = (field) => {
  if (field === "carNumber") {
    errors.carNumber =
      form.carNumber.length < 3
        ? "Номер автомобиля должен содержать не менее 3 символов"
        : null;
  } else if (field === "region") {
    errors.region =
      form.region.length < 2
        ? "Регион должен содержать не менее 2 символов"
        : null;
  } else if (field === "registrationCertificate") {
    errors.registrationCertificate =
      form.registrationCertificate.length < 5
        ? "Свидетельство о регистрации ТС должно содержать не менее 5 символов"
        : null;
  }
};

const handleSubmit = () => {
  validateField("carNumber");
  validateField("region");
  validateField("registrationCertificate");

  if (!errors.carNumber && !errors.region && !errors.registrationCertificate) {
    alert("Форма отправлена успешно!");
  }
};

const router = useRouter();

const goToLicense = () => {
  router.push("/documents/license-agreement");
};
const goToPolitics = () => {
  router.push("/documents/personal-data");
};
const goToPayment = () => {
  router.push("/documents/payment-info");
};

// Modal logic
const modal = ref(null);
const youtubePlayer = ref(null);

const openModal = () => {
  if (modal.value) {
    modal.value.style.display = "block";
  }
};

const closeModal = () => {
  if (modal.value) {
    modal.value.style.display = "none";
    if (youtubePlayer.value) {
      youtubePlayer.value.src = youtubePlayer.value.src;
    }
  }
};

onMounted(() => {
  window.addEventListener("click", (event) => {
    if (event.target === modal.value) {
      closeModal();
    }
  });
});
const modules = [Pagination, Navigation];
</script>

<!-- form styles -->
<style lang="scss" scoped>
.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
  font-size: 0.875rem;
}
.main {
  color: #000;
  font-family: PT Sans;

  &-wrapper {
    margin-top: 80px;
    margin-bottom: 90px;
    &_title {
      margin: 0;
      margin-bottom: 17px;

      font-size: 41px;
      font-weight: 700;
      line-height: 120%;
    }
    &_text {
      max-width: 563px;
      &__p {
        color: rgb(143, 143, 143);
        font-size: 13px;
        font-weight: 400;
        line-height: 120%;
      }
    }
    &_img {
      position: absolute;
      background-image: url(/assets/main-img.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 532.18px;
      height: 335px;
      bottom: 43px;
      right: 121px;
    }
    .container {
      position: relative;
    }
  }
}
.service-img {
  margin-top: -5px;
}
.form-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 120%;
  color: #000;
}
.form-control {
  border: 1px solid rgb(188, 188, 188);
}
.btn-primary {
  padding: 9px 17px;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0%;
  cursor: pointer;
}
.btn-outline-primary {
  padding: 9px 21px 9px 19px;
  margin-left: -8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  color: #000;
  background-color: #fff;
  span {
    color: rgb(18, 83, 162);
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
  }
}
@media (max-width: 1400px) {
  .main-wrapper_img {
    right: 0;
  }
}
@media (max-width: 1200px) {
  .main-wrapper_img {
    display: none;
  }
}
@media (max-width: 992px) {
  .main-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}
.closeBtn {
  color: #ffffff;
  float: right;
  font-size: 60px;
  position: absolute;
  top: -74px;
  right: 0;
  transition: 0.3s;
}

.closeBtn:hover,
.closeBtn:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
<!-- form styles ends -->

<!-- cards block styles -->
<style lang="scss" scoped>
.adv-block {
  margin-bottom: 75px;
  &__title {
    font-size: 34px;
    font-weight: 700;
    line-height: 120%;
    text-align: center;
    margin-bottom: 36px;
  }
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 161px;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 10px;
  background: rgb(251, 252, 253);
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  &-title {
    color: rgb(18, 83, 162);
    font-size: 18px;
    font-weight: 700;
    line-height: 120%;
    padding-bottom: 15px;
  }
  &-text {
    font-size: 15px;
    font-weight: 400;
    line-height: 120%;
  }
  &-logo {
    margin-right: 15px;
  }
}

@media (max-width: 1400px) {
  .card {
    height: 100%;
    padding: 20px;
    &-logo {
      // margin-right: 0;
      margin-bottom: 15px;
    }
  }
}
@media (max-width: 1200px) {
  .card {
    height: 100%;
    padding: 15px;
    &-logo {
      margin-bottom: 15px;
    }
  }
}
@media (max-width: 992px) {
  .adv-block {
    margin-bottom: 30px;
  }
  .card {
    height: 100%;
    padding: 15px;
    &-logo {
      margin-right: 0;
      margin-bottom: 5px;
    }
  }
}
</style>
<!-- cards block styles ends -->

<!-- corousel block styles -->
<style lang="scss" scoped>
.button-prev,
.button-next {
  cursor: pointer;
  position: absolute;
  top: 45%;
  z-index: 2;
}
.button-prev {
  left: 3px;
}
.button-next {
  right: 0 !important;
}
.swiper {
  position: relative;
}
.docs {
  margin-bottom: 30px;
  &-container {
    padding-bottom: 40px;
  }
  &-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    // width: 340px !important;
    height: 450px;
    padding: 23px;
    border: 1px solid rgb(238, 239, 241);
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  }
  &-title {
    font-size: 34px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
    margin-bottom: 10px;
  }
  &-block {
    &_title {
      color: rgb(18, 83, 162);
      font-size: 31px;
      font-weight: 700;
      line-height: 120%;
      letter-spacing: 0%;
      margin-bottom: 15px;
    }
    &_text {
      font-size: 18px;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0%;
      color: #000;
    }
    &_button {
      width: 100%;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      color: #fff;
      border-radius: 7px;
      background-color: #0584fe;
      padding: 11px;
      border: none;
    }
  }
}
</style>

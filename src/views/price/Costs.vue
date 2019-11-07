<template>
  <section class="costs mb-5">
    <h2>Тарифы</h2>
    <mdb-row class="d-flex justify-content-center">
      <mdb-col
        v-if="window.width >= 768 || swiped"
        md="6"
        :offset="window.width <= 768 ? `1` : `0`"
        offset-md="0"
        col="9"
        sm="9"
        class="animated slideInLeft"
      >
        <mdb-row class="d-flex justify-space-between mt-4 mb-5">
          <mdb-col>
            <mdb-card class="h-100 z-depth-0">
              <mdb-card-body class="grey-card pt-0">
                <mdb-card-text class="card-content">
                  <div class="d-flex justify-content-center mb-5 pb-5">
                    <div class="cost-value gradiented">
                      <span>0$</span>
                    </div>
                  </div>
                  <mdb-card-title class="card-title">
                    <h2 class="font-weight-600 text-center">DreamPrice</h2>
                  </mdb-card-title>
                  <div class="d-flex flex-column align-items-center">
                    <p class="text-center">На этом тарифе доступен весь функционал</p>
                    <dtBtn :gradiented="true" title="Подписаться" class="mb-3"></dtBtn>
                  </div>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col>
            <mdb-card class="h-100">
              <mdb-card-body class="gradiented-card">
                <mdb-card-text class="card-content">
                  <mdb-card-title class="card-title">
                    <h2 class="font-weight-600 mb-3 text-center">Функции</h2>
                  </mdb-card-title>
                  <ul>
                    <li>Создание групп</li>
                    <li>Создание чатов</li>
                    <li>Создание профилей</li>
                    <li>Приглашение пользователей</li>
                    <li>Опросы</li>
                    <li>Оценка</li>
                    <li>Задачи</li>
                    <li>Предложения</li>
                  </ul>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col
        class="d-flex justify-content-center align-items-center"
        v-if="window.width <= 768"
        sm="2"
        col="2"
      >
        <div class="arrow d-flex justify-content-center cursor-pointer" @click="swiped=!swiped">
          <font-awesome-icon
            v-if="swiped"
            :icon="['fas', 'chevron-right']"
            size="2x"
            class="animated fadeIn"
          />
          <font-awesome-icon
            class="animated fadeIn"
            v-if="!swiped"
            :icon="['fas', 'chevron-left']"
            size="2x"
          />
        </div>
      </mdb-col>
      <mdb-col
        class="animated slideInRight"
        v-if="window.width >= 768 || !swiped"
        md="6"
        col="9"
        sm="9"
      >
        <mdb-row class="d-flex justify-space-between mt-4 mb-5">
          <mdb-col>
            <mdb-card class="h-100 z-depth-0">
              <mdb-card-body class="grey-card pt-0">
                <mdb-card-text class="card-content">
                  <div class="d-flex justify-content-center mb-5 pb-5">
                    <div class="cost-value gradiented-dark">
                      <!-- <span>от</span> -->
                      <span class="per-month">49$</span>
                      <!-- <span>в месяц</span> -->
                    </div>
                  </div>
                  <mdb-card-title class="card-title">
                    <h2 class="font-weight-600 text-center">DreamPrice</h2>
                  </mdb-card-title>
                  <div class="d-flex flex-column align-items-center">
                    <p class="text-center">На этом тарифе доступен весь функционал</p>
                    <dtBtn :gradiented="`dark`" title="Подписаться" class="mb-3"></dtBtn>
                  </div>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col>
            <mdb-card class="h-100">
              <mdb-card-body class="gradiented-card gradiented-dark">
                <mdb-card-text class="card-content">
                  <mdb-card-title class="card-title">
                    <h2 class="font-weight-600 mb-3 text-center">Функции</h2>
                  </mdb-card-title>
                  <ul>
                    <li>Создание групп</li>
                    <li>Создание чатов</li>
                    <li>Создание профилей</li>
                    <li>Приглашение пользователей</li>
                    <li>Опросы</li>
                    <li>Оценка</li>
                    <li>Задачи</li>
                    <li>Предложения</li>
                  </ul>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import dtBtn from "@/components/UI/dt-btn.vue";
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn
} from "mdbvue";
export default {
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    dtBtn
  },
  data() {
    return {
      swiped: true,
      window: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
};
</script>

<style lang="less" scoped>
section {
  > h2 {
    margin-bottom: 5.5rem;
    text-align: center;
  }
}
.card-content {
  border-radius: 10px;
}
.cost-value {
  border-radius: 50%;
  position: absolute;
  margin-top: -5rem;
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.5);

  span {
    color: white;
    font-size: 72px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  span.per-month:before {
    font-size: 21px;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: -1.25rem;
    content: "от";
  }
  span.per-month:after {
    font-size: 21px;
    font-weight: 600;
    line-height: 25px;
    margin-top: -1.25rem;
    content: "в месяц";
  }
}
.grey-card {
  h2 {
    color: #16ccd9;
  }
  .card-content {
    p {
      font-size: 21px;
    }
  }
}
.gradiented-card {
  border-radius: 10px;
  h2 {
    color: white;
  }
  ul li {
    color: white;
    font-size: 21px;
    font-weight: 600;
    line-height: 25px;
    list-style-type: none;
    margin: 10px 0;
  }
}

.gradiented-dark {
  ul li {
    color: #b8c1cc;
  }
}

@media screen and (max-width: 540px) {
  section {
    > h2 {
      color: #1b3b59;
      font-size: 36px;
      font-weight: 700;
      line-height: 44px;
      margin-bottom: 4.5rem;
      text-align: center;
    }
  }
  .gradiented-card {
    h2 {
      font-size: 36px;
      font-weight: 600;
      line-height: 44px;
      text-shadow: 0 1px 5px 0 rgba(20, 176, 187, 0.25);
    }
  }
}

@media screen and (max-width: 768px) {
  section {
    > h2 {
      color: #1b3b59;
      font-size: 36px;
      font-weight: 700;
      line-height: 44px;
      margin-bottom: 6rem;
      text-align: center;
    }
  }
}
</style>
<template>
  <!-- swiper -->
  <swiper :options="swiperOption1">
    <!-- Слайд 1 -->
    <swiper-slide>
      <div class="container">
        <img class="img-fluid" src="@/assets/hero-image.png" alt />
      </div>
    </swiper-slide>
    <!-- Слайд 2 -->
    <swiper-slide>
      <mdb-row>
        <mdb-col>
          <mdb-row>
            <mdb-col>
              <h1>Создайте команду мечты</h1>
              <p>Сделайте вашу команду мечты лучше с помощью приложения DreamTeam</p>
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col>
              <dtbtn
                :gradiented="true"
                title="Попробуйте"
                icon="download"
                :iconPosition="'end'"
                class="d-flex align-items-center"
                @click="swiper.mousewheel.disable()"
              ></dtbtn>
            </mdb-col>
            <mdb-col>
              <div class="brandIcons">
                <font-awesome-icon :icon="['fab', 'android']" size="2x" class="mr-4" />
                <font-awesome-icon :icon="['fab', 'apple']" size="2x" class="mr-4" />
                <font-awesome-icon :icon="['fas', 'globe-americas']" size="2x" />
              </div>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </swiper-slide>
    <!-- Слайд 3 -->
    <swiper-slide>
      <div class="app-card">
        <mdb-view hover>
          <a href="#!">
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </a>
        </mdb-view>
        <mdb-card-body>
          <mdb-card-title>
            <span class="gradiented">
              <font-awesome-icon :icon="['fas', 'tasks']" />
            </span>Опросы
          </mdb-card-title>
          <mdb-card-text>
            <p>Some quick example text</p>
          </mdb-card-text>
        </mdb-card-body>
      </div>
      <div class="app-card">
        <mdb-view hover>
          <a href="#!">
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </a>
        </mdb-view>
        <mdb-card-body>
          <mdb-card-title>
            <span class="gradiented">
              <font-awesome-icon :icon="['fas', 'tasks']" />
            </span>Группы
          </mdb-card-title>
          <mdb-card-text>Some quick example text</mdb-card-text>
        </mdb-card-body>
      </div>
      <div class="app-card">
        <mdb-view hover>
          <a href="#!">
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </a>
        </mdb-view>
        <mdb-card-body>
          <mdb-card-title>
            <span class="gradiented">
              <font-awesome-icon :icon="['fas', 'tasks']" />
            </span>Предложения
          </mdb-card-title>
          <mdb-card-text>
            <p>Some quick example text</p>
          </mdb-card-text>
        </mdb-card-body>
      </div>
      <div class="app-card">
        <mdb-view hover>
          <a href="#!">
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </a>
        </mdb-view>
        <mdb-card-body>
          <mdb-card-title>
            <span class="gradiented">
              <font-awesome-icon :icon="['fas', 'tasks']" />
            </span>Предложения
          </mdb-card-title>
          <mdb-card-text>
            <p>Some quick example text</p>
          </mdb-card-text>
        </mdb-card-body>
      </div>
    </swiper-slide>
    <!-- Слайд 4 -->
    <swiper-slide>
      <div id="imgPhone">
        <img src="@/assets/iphone-x.png" alt height="700" />
      </div>
    </swiper-slide>
    <!-- Слайд 5 -->
    <swiper-slide>
      <swiper :options="swiperOption2">
        <swiper-slide class="vertical-slide">
          <div>
            <h2>Создавайте группы</h2>
            <hr />
            <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            <div class="arrow">
              <font-awesome-icon :icon="['fas', 'chevron-down']" size="3x" class="mt-2 mb-4" />
            </div>
          </div>
        </swiper-slide>
        <!-- Слайд  -->
        <swiper-slide class="vertical-slide">
          <h2>Приглашайте коллег</h2>
          <hr />
          <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
          <div class="arrow">
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="3x" class="mt-1 mb-4" />
          </div>
        </swiper-slide>
        <!-- Слайд  -->
        <swiper-slide class="vertical-slide">
          <h2>Запускайте голосование</h2>
          <hr />
          <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
          <div class="arrow">
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="3x" class="mt-2 mb-4" />
          </div>
        </swiper-slide>
        <!-- Слайд  -->
        <swiper-slide class="vertical-slide">
          <h2>Оценивайте коллег</h2>
          <hr />
          <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
          <div class="arrow">
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="3x" class="mt-2 mb-4" />
          </div>
        </swiper-slide>
        <!-- Слайд  -->
        <swiper-slide class="vertical-slide">
          <h2>Получите результаты</h2>
          <hr />
          <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
          <div class="arrow">
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="3x" class="mt-2 mb-4" />
          </div>
        </swiper-slide>
      </swiper>
    </swiper-slide>
    <!-- Слайд 6 -->
    <swiper-slide>
      <AssociateHorizontal/>
    </swiper-slide>
    <!-- Слайд 7 -->
    
    <!-- Слайд 8 -->
    <swiper-slide>Slide 6</swiper-slide>
    <!-- Слайд 1 -->
    <swiper-slide>Slide 7</swiper-slide>
    <!-- Слайд 1 -->
    <swiper-slide>Slide 8</swiper-slide>
    <!-- Слайд 1 -->
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
  </swiper>
</template>

<script>
import dtbtn from "@/components/UI/dt-btn";
import Lottie from "@/components/Lottie.vue";
import * as path from "../assets/lottie/data.json";
import AssociateHorizontal from "./AssociateHorizontal";
import {
  mdbRow,
  mdbCol,
  mdbContainer,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbMask,
  mdbView,
  animateOnScroll
} from "mdbvue";

export default {
  name: "home",
  components: {
    dtbtn,
    mdbRow,
    mdbCol,
    mdbContainer,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbMask,
    mdbView,
    lottie: Lottie,
    AssociateHorizontal
  },
  directives: {
    animateOnScroll
  },
  data() {
    return {
      anim: {},
      swiperOption1: {
        direction: "horizontal",
        spaceBetween: 0,
        mousewheel: true,
        freeMode: true,
        simulateTouch: false,
        watchSlidesProgress: true,
        width: 800,
        watchSlidesVisibility: true
      },
      swiperOption2: {
        direction: "vertical",
        effect:"slide",
        spaceBetween: 0,
        mousewheel: true,
        simulateTouch: false,
        watchSlidesProgress: true,
        width: 500
      },
      defaultOptions: { path: path },
      animationSpeed: 1,
      loop: true,
      autoplay: true
    };
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },

    stop() {
      this.anim.stop();
    },

    play() {
      this.anim.play();
    },

    pause() {
      this.anim.pause();
    },

    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    }
  }
};
</script>
<style lang="less" scoped>
.app-card {
  min-width: 240px;
  max-width: 240px;
  font-weight: 800;
  position: relative;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 1.5rem;
  p {
    color: #1b3b59;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }
  h4 {
    margin-left: 1rem;
    word-wrap: normal;
  }
  span {
    position: absolute;
    border-radius: 50%;
    left: -1.5rem;
    top: -1.5rem;
    padding: 1rem;
  }
}
.container {
  height: 70%;
}
.vertical-slide {
  transform: translateY(25vh);
  overflow: hidden;
}
</style>
<template>
  <div class="home" ref="scrollBox">
    <div class="span-background">
      <div class="section-shaped">
        <div class="shape shape-primary">
          <span class="span-150"></span>
          <span class="span-125"></span>
          <span class="span-175"></span>
          <span class="span-100"></span>
          <span class="span-150"></span>
          <span class="span-50"></span>
          <span class="span-200"></span>
          <span class="span-75"></span>
          <span class="span-150"></span>
          <span class="span-125"></span>
        </div>
      </div>
      <mdbContainer>
        <mdb-row class="d-flex justify-content-center">
          <mdb-col lg="10" xl="12" class="horizontal-reverse-direction">
            <div class="horizontal-section">
              <div>
                <mdb-row>
                  <mdb-col>
                    <h1>
                      Создайте команду
                      <br />мечты
                    </h1>
                    <p>Сделайте вашу команду мечты лучше с помощью приложения DreamTeam</p>
                  </mdb-col>
                </mdb-row>
                <mdb-row class="d-flex">
                  <mdb-col>
                    <dtbtn
                      :gradiented="true"
                      title="Попробуйте"
                      icon="download"
                      :iconPosition="'end'"
                      class="d-flex align-items-center"
                    ></dtbtn>
                  </mdb-col>
                  <mdb-col class="d-flex">
                    <div class="brandIcons">
                      <font-awesome-icon :icon="['fab', 'android']" size="2x" class="mr-2" />
                      <font-awesome-icon :icon="['fab', 'apple']" size="2x" class="mr-2" />
                      <font-awesome-icon :icon="['fas', 'globe-americas']" size="2x" />
                    </div>
                  </mdb-col>
                </mdb-row>
              </div>
            </div>
            <mdb-row class="d-flex justify-content-center py-5 horizontal-section">
              <mdb-col lg="10">
                <img class="img-fluid" src="@/assets/hero-image.png" alt />
                <div id="trigger2"></div>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdbContainer>
    </div>
    <!-- <div class="home-head-border"></div> -->
    <div class="card-roll-wrapper d-none d-sm-block">
      <div>
        <h2 class="text-center">Возможности приложения:</h2>

        <div class="d-flex card-scrolls overflow-hidden justify-content-around">
          <swiper :options="horizontalOption" style="height: 33vh;
    padding-top: 3rem">
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
                    <p>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
            </swiper-slide>
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
                    </span>Группы
                  </mdb-card-title>
                  <mdb-card-text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </mdb-card-text>
                </mdb-card-body>
              </div>
            </swiper-slide>
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
                    </span>Предложения
                  </mdb-card-title>
                  <mdb-card-text>
                    <p>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
            </swiper-slide>
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
                    </span>Предложения
                  </mdb-card-title>
                  <mdb-card-text>
                    <p>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="mobile-container d-block d-sm-none">
      <div class="mobile-container items">
        <div class="item pl-2">
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
              <p>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item px-1">
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
            <mdb-card-text>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item px-1">
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
              <p>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item pr-2">
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
              <p>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
      </div>
    </div>
    <mdbContainer class="mb-5">
      <mdb-row class="d-flex justify-content-center">
        <mdb-col class="col d-none d-sm-block" md="4">
          <div>
            <div id="imgPhone">
              <img src="@/assets/iphone-x.png" alt class="img-fluid" />
            </div>
          </div>
        </mdb-col>
        <mdb-col md="6" class="d-none d-sm-block pl-5 align-self-center" style="height:100px; padding-bottom:280px;">
          <swiper :options="swiperOption">
            <swiper-slide class="vertical-slide">
              <mdb-row>
                <mdb-col xl="2">
                  <h2>
                    <font-awesome-icon
                      :icon="['fas', 'redo-alt']"
                      :class="'cursor-pointer ' + rotate"
                      @click="enableRotatiion(); disableRotatiion() "
                    />
                  </h2>
                </mdb-col>
                <mdb-col>
                  <h2>Создавайте группы</h2>
                </mdb-col>
              </mdb-row>

              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide cursor-pointer"
                />
              </div>
            </swiper-slide>
            <!-- Слайд  -->
            <swiper-slide class="vertical-slide">
                  <mdb-row>
                <mdb-col xl="2">
                  <h2>
                    <font-awesome-icon
                      :icon="['fas', 'redo-alt']"
                      :class="'cursor-pointer ' + rotate"
                      @click="enableRotatiion(); disableRotatiion() "
                    />
                  </h2>
                </mdb-col>
                <mdb-col>
                  <h2>Приглашайте коллег</h2>
                </mdb-col>
              </mdb-row>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide cursor-pointer"
                />
              </div>
            </swiper-slide>
            <!-- Слайд  -->
            <swiper-slide class="vertical-slide">
                  <mdb-row>
                <mdb-col xl="2">
                  <h2>
                    <font-awesome-icon
                      :icon="['fas', 'redo-alt']"
                      :class="'cursor-pointer ' + rotate"
                      @click="enableRotatiion(); disableRotatiion() "
                    />
                  </h2>
                </mdb-col>
                <mdb-col>
                  <h2>Запускайте голосование</h2>
                </mdb-col>
              </mdb-row>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide cursor-pointer"
                />
              </div>
            </swiper-slide>
            <!-- Слайд  -->
            <swiper-slide class="vertical-slide">
                  <mdb-row>
                <mdb-col xl="2">
                  <h2>
                    <font-awesome-icon
                      :icon="['fas', 'redo-alt']"
                      :class="'cursor-pointer ' + rotate"
                      @click="enableRotatiion(); disableRotatiion() "
                    />
                  </h2>
                </mdb-col>
                <mdb-col>
                  <h2>Оценивайте коллег</h2>
                </mdb-col>
              </mdb-row>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide cursor-pointer"
                />
              </div>
            </swiper-slide>
            <!-- Слайд  -->
            <swiper-slide class="vertical-slide">
                  <mdb-row>
                <mdb-col xl="2">
                  <h2>
                    <font-awesome-icon
                      :icon="['fas', 'redo-alt']"
                      :class="'cursor-pointer ' + rotate"
                      @click="enableRotatiion(); disableRotatiion() "
                    />
                  </h2>
                </mdb-col>
                <mdb-col>
                  <h2>Получите результаты</h2>
                </mdb-col>
              </mdb-row>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide"
                />
              </div>
            </swiper-slide>
          </swiper>
        </mdb-col>
        <mdb-col class="d-block d-sm-none">
          <div class="fullpage">
            <h2>Создавайте группы</h2>
            <hr />
            <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            <div class="text-center" style="margin-top:20vh;">
              <img src="@/assets/iphone-x.png" alt height="350" />
            </div>
          </div>
          <div class="fullpage">
            <h2>Приглашайте коллег</h2>
            <hr />
            <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            <div class="text-center">
              <img src="@/assets/iphone-x.png" alt height="300" />
            </div>
          </div>
          <div class="fullpage">
            <h2>Запускайте голосование</h2>
            <hr />
            <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            <div class="text-center" style="margin-top:15vh;">
              <img src="@/assets/iphone-x.png" alt height="300" />
            </div>
          </div>
          <div class="fullpage">
            <h2>Оценивайте коллег</h2>
            <hr />
            <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            <div class="text-center" style="margin-top:15vh;">
              <img src="@/assets/iphone-x.png" alt height="300" />
            </div>
          </div>
          <div class="fullpage">
            <h2>Получите результаты</h2>
            <hr />
            <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            <div class="text-center" style="margin-top:15vh;">
              <img src="@/assets/iphone-x.png" alt height="300" />
            </div>
          </div>
        </mdb-col>
      </mdb-row>
    </mdbContainer>
    <Associate></Associate>
  </div>
</template>
<script>
// build tween
import { ScrollToPlugin, TweenMax, TimelineMax } from "gsap";
import { bus } from "../bus.js";
import dtbtn from "@/components/UI/dt-btn";
import Associate from "./Associate";
import velocity from "velocity-animate";
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
  mdbView
} from "mdbvue";
import { timeout } from "q";

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
    Associate,
    mdbMask,
    mdbView
  },
  data() {
    return {
      rotate: "",
      mouseControl: true,
      horizontalOption: {
        direction: "horizontal",
        loop: true,
        slidesPerView: 4,
        autoplay: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      swiperOption: {
        direction: "vertical",
        spaceBetween: 0,
        mousewheel: true,
        simulateTouch: false,
        watchSlidesProgress: true,
        width: 500,
        autoHeight: true,
        effect: "fade",
        speed: 1200,
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: ".nextSlide"
        }
      }
    };
  },
  beforeMount() {
    bus.$emit(`paintHeadInit`);
  },
  beforeDestroy() {
    bus.$emit(`paintHeadDestroy`);
  },
  methods: {
    enableRotatiion() {
      this.rotate = "rotate";
    },
    disableRotatiion() {
      setTimeout(() => {this.rotate = ""}, 1000);
    },

    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      Velocity(
        el,
        { opacity: 1 },
        {
          duration: 1000,
          complete() {
            done();
          }
        }
      );
    },
    leave(el, done) {
      done();
    }
  }
};
</script>
<style lang="less" scoped>
@import (css)
  url("https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,900&display=swap");
.home {
  // overflow-x: unset;
  margin-top: -1px;
  h2 {
    font-weight: 800;
    color: #1b3b59;
    line-height: 48px;
  }
  hr {
    border: 2px solid #bfbfbf;
  }
  p {
    color: #6c7580;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }
  .app-card {
    min-height: 150px;
    min-width: 240px;
    max-width: 20vw;
    font-weight: 800;
    position: relative;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.15);
    margin: 0 2rem;
    padding: 0 0.5rem;
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
}
.card-roll-wrapper {
  margin-bottom: 150px;
}
.card-scrolls {
  padding: 0 1rem;
}
.span-background {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(230, 236, 242, 1) 100%
  );
}

.home-head-border {
  position: absolute;
  overflow-x: hidden;

  background-color: #e6ecf2;
  border-radius: 0 0 50% 50%;
  height: 150px;
  width: 100%;
  z-index: -1;
}
.arrow {
  color: #14b0bb;
}

section {
  > h2 {
    color: #1b3b59;
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
    text-align: center;
    margin-bottom: 35px;
  }
}

.section-shaped {
  margin: 0 0;
  z-index: -1;
  height: 100%;
  width: 100%;
}
.section-shaped .shape {
  position: absolute;
  top: 300px;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.section-shaped .shape span {
  position: absolute;
}
.section-shaped {
  span {
    z-index: 1;
    border-radius: 50%;
    background: #dce1e6b9;
  }
  .span-200 {
    height: 200px;
    width: 200px;
  }
  .span-150 {
    height: 150px;
    width: 150px;
  }
  .span-100 {
    height: 100px;
    width: 100px;
  }
  .span-75 {
    height: 75px;
    width: 75px;
  }
  .span-50 {
    height: 50px;
    width: 50px;
  }
  :first-child {
    left: -4%;
    bottom: auto;
  }
  :nth-child(2) {
    right: 4%;
    top: 10%;
  }
  :nth-child(3) {
    top: 280px;
    right: 5.66666%;
  }
  :nth-child(4) {
    top: 500px;
    right: 35%;
  }
  :nth-child(5) {
    top: 38%;
    left: 33%;
    right: auto;
  }
  :nth-child(6) {
    width: 200px;
    height: 200px;
    top: 21%;
    left: 10%;
    right: auto;
  }
  :nth-child(7) {
    bottom: 50%;
    right: 36%;
  }
  :nth-child(8) {
    bottom: 70px;
    right: 2%;
  }
  :nth-child(9) {
    bottom: 22%;
    right: 22%;
  }
  :nth-child(10) {
    bottom: 1%;
    left: 1%;
    right: auto;
  }
}

.brandIcons {
  color: #1b3b59;
}
@media screen and (max-width: 540px) {
  h1 {
    color: #1b3b59;
    font-size: 48px;
    line-height: 48px;
  }
  h2 {
    color: #1b3b59;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 800;
    line-height: 24px;
  }
  p {
    color: #6c7580;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
}
.mobile-container {
  width: 100%;
}
.mobile-container.items {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding: 3rem 1rem;

  .item {
    min-width: 240px;
    font-weight: 800;
    position: relative;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.15);
    margin: 0 1rem;

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
  .item:last-child {
    mdb-card-body {
      width: 260px !important;
      margin-right: -1.5rem !important;
    }
  }
}
// .rerun-enter-to{

// }
.fullpage {
  height: 100vh;
}
.vertical-slide {
  height: 100px;
}
.rotate {
  animation-name: rotation;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
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
        <mdb-col md="6" class="pl-5 align-self-center">
          <swiper :options="swiperOption">
            <swiper-slide>
              <div>
                <h2>Создавайте группы</h2>
                <hr />
                <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
              </div>
            </swiper-slide>
            <!-- Слайд  -->
            <swiper-slide class="vertical-slide">
              <h2>Приглашайте коллег</h2>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            </swiper-slide>
            <!-- Слайд  -->
            <swiper-slide class="vertical-slide">
              <h2>Запускайте голосование</h2>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            </swiper-slide>
            <!-- Слайд  -->
            <swiper-slide class="vertical-slide">
              <h2>Оценивайте коллег</h2>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            </swiper-slide>
            <!-- Слайд  -->
            <swiper-slide class="vertical-slide">
              <h2>Получите результаты</h2>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            </swiper-slide>
          </swiper>
          <div class="arrow">
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              size="3x"
              class="nextSlide"
            />
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
      mouseControl: true,
      swiperOption: {
        direction: "vertical",
        effect: "slide",
        spaceBetween: 0,
        mousewheel: true,
        simulateTouch: false,
        watchSlidesProgress: true,
        width: 500,
        effect: "fade",
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
  mounted() {
    // var tween = TweenMax.staggerFromTo(
    //   ".app-card",
    //   2,
    //   { left: "100vw" },
    //   { left: 0, ease: Back.easeOut },
    //   0.15
    // );
    // const wrapScene = this.$scrollmagic
    //   .scene({
    //     triggerElement: "#trigger2",
    //     duration: 550
    //   })
    //   .setTween(tween);
    // this.$scrollmagic.addScene(wrapScene);
    // const phoneScene = this.$scrollmagic.scene({
    //   triggerElement: "#scrollTriggerPhone",
    //   duration: 650
    // });
    //   .setPin("#imgPhone");
    // this.$scrollmagic.addScene(phoneScene);
    // const deleteScene = this.$scrollmagic
    //   .scene({
    //     triggerElement: "#scrollTriggerPhoneDelete"
    //   })
    //   .removePin(true);
    // this.$scrollmagic.addScene(deleteScene);
    // Add scene to element scrollmagic controller
  },
  methods: {
    disableMouse() {
      bus.$emit("disable");
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
    min-width: 240px;
    max-width: 20vw;
    font-weight: 800;
    position: relative;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.15);
    p {
      color: #1b3b59;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
    }
    margin: 0 1rem;
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
  .arrow {
    color: #14b0bb;
  }
}
.card-roll-wrapper {
  margin-bottom: 150px;
}
.card-scrolls {
  padding: 3rem 1rem;
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
</style>
<template>
  <div class="home w-100" ref="scrollBox">
    <div class="span-background">
      <div class="d-none d-xl-flex justify-content-around">
        <mdbContainer>
          <mdb-row class="d-flex ml-3">
            <mdb-col class="d-flex  justify-content-between">
              <div class="horizontal-section align-self-center">
                <div>
                  <mdb-row class="d-flex">
                    <mdb-col col="12">
                      <h1>
                        Создайте команду
                        <br />мечты
                      </h1>
                      <p
                        class="my-5"
                      >Сделайте вашу команду мечты лучше с помощью приложения DreamTeam</p>
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="d-flex">
                    <mdb-col class="align-self-center">
                      <dtbtn
                        :gradiented="true"
                        title="Попробуйте"
                        icon="download"
                        :iconPosition="'end'"
                        class="d-flex align-items-center"
                        @click.native="$router.push('/downloads')"
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
              <mdb-row class="d-flex justify-content-center horizontal-section">
                <mdb-col lg="10">
                  <img class="img-fluid" src="@/assets/hero-image.png" alt />
                  <div id="trigger2"></div>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </mdbContainer>
      </div>
      <mdbContainer class="d-xl-none">
        <mdb-row class="d-flex justify-content-center">
          <mdb-col lg="10" xl="12">
            <div class="horizontal-section">
              <div>
                <mdb-row class="d-flex">
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
                      @click.native="$router.push('/downloads')"
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
    <mdbContainer>
      <Capabilities class="my-5" />
    </mdbContainer>
    <!-- <div class="home-head-border"></div> -->
    <mdbContainer class="my-5">
      <div sticky-container>
        <mdb-row class="d-flex justify-content-between">
          <mdb-col class="col d-none d-md-block" md="4">
            <div class="phone-bg" v-sticky sticky-offset="offset">
              <!-- <VideoGallery class="video" :currentSlide="this.currentSlide" /> -->
              <!-- <video class="video" autoplay loop muted>
                <source :src="'/media/' + currentvideo " type="video/mp4" />
              </video>-->
              <div>
                <div class="video">
                  <!-- <img src="@/assets/iphone-x.svg" alt class="img-fluid" /> -->
                  <transition name="ma" mode="out-in">
                    <div v-if="currentSlide==1" key="group">
                      <video class="video-fluid" src="@/assets/vids/group.mp4" autoplay loop muted></video>
                    </div>
                    <div v-if="currentSlide==2" key="invite">
                      <video class="video-fluid" src="@/assets/vids/invite.mp4" autoplay loop muted></video>
                    </div>
                    <div v-if="currentSlide==3" key="vote">
                      <video class="video-fluid" src="@/assets/vids/voting.mp4" autoplay loop muted></video>
                    </div>
                    <div v-if="currentSlide==4" key="rate">
                      <video class="video-fluid" src="@/assets/vids/rate.mp4" autoplay loop muted></video>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </mdb-col>
          <!-- <mdb-col>
            <div>
              <font-awesome-icon
                :icon="['fas', 'redo-alt']"
                :class="'cursor-pointer ' + rotate"
                @click="enableRotatiion(); disableRotatiion() "
              />
            </div>
          </mdb-col>-->
          <mdb-col
            md="6"
            class="d-none d-sm-block pl-5 align-self-center"
            style="padding-bottom:280px;"
          >
            <div class="advantages" style="margin-top:12rem">
              <mdb-row>
                <mdb-col>
                  <h2 v-view="viewHandler">Создавайте проект</h2>
                </mdb-col>
              </mdb-row>
              <hr />
              <p>Проекты нужны для повышения эффективности работы. В приложение проект можно разбить на небольшие группы, это позволит каждому отделу заниматься своей работой и при этом оставаться на связи со всей командой</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide cursor-pointer"
                  v-scroll-to="'#slide2, 0px'"
                />
              </div>
              <div id="slide2"></div>
            </div>
            <div class="advantages">
              <mdb-row>
                <mdb-col>
                  <h2 v-view="viewHandler1">Общайтесь</h2>
                </mdb-col>
              </mdb-row>
              <hr />
              <p>Для эффективной работы, вы должны быть всегда на связи. Приложение позволяет обмениваться не только текстовыми сообщениями, но также документами, медиафайлами и стикерами</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide cursor-pointer"
                  v-scroll-to="'#slide3, 0px'"
                />
              </div>
              <div id="slide3"></div>
            </div>
            <div class="advantages">
              <mdb-row>
                <mdb-col>
                  <h2 v-view="viewHandler2">Анонимно оценивайте</h2>
                </mdb-col>
              </mdb-row>
              <hr />
              <p>Оценивать чью-то работу всегда трудно. А внутри маленькой команды, зачастую, есть страх обидеть кого-то или быть наказанным за высказанное мнение. Но в каждом коллективе, для эффективной работы, важны честность и искренность, поэтому мы позволяем каждому оставаться анонимным</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide cursor-pointer"
                  v-scroll-to="'#slide4, 0px'"
                />
              </div>
              <div id="slide4"></div>
            </div>
            <div class="advantages-last">
              <mdb-row>
                <mdb-col>
                  <h2 v-view="viewHandler3">Зарабатывайте рейтинг</h2>
                </mdb-col>
              </mdb-row>
              <hr />
              <p>В результате анонимного оценивания программа присваивает каждому итоговый рейтинг. И каждый из членов команды сможет увидеть над каким навыком ему нужно потрудиться, чтобы стать лучше</p>
              <div class="arrow">
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="3x"
                  class="mt-2 mb-4 nextSlide cursor-pointer"
                  v-scroll-to="'.cost-card, 10px'"
                />
              </div>
            </div>
          </mdb-col>
          <mdb-col class="d-block d-sm-none">
            <div class="fullpage">
              <h2>Создавайте проект</h2>
              <hr />
              <p>Проекты нужны для повышения эффективности работы. В приложение проект можно разбить на небольшие группы, это позволит каждому отделу заниматься своей работой и при этом оставаться на связи со всей командой</p>
              <div class="text-center" style="margin-top:10vh;">
                <img src="@/assets/iphone-x.png" alt height="300" />
              </div>
            </div>
            <div class="fullpage">
              <h2>Общайтесь</h2>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
              <div class="text-center" style="margin-top:15vh;">
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
      </div>
      <Costs />
      <youget />
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
import VideoGallery from "@/components/VideoGallery";
import Capabilities from "./Capabilities";
import youget from "./YouGet";
import Costs from "./price/Costs";
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
    mdbView,
    VideoGallery,
    Capabilities,
    youget,
    Costs
  },
  data() {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      },
      currentSlide: 1,
      firstSlide: true,
      lastSlide: false,
      video: "",
      rotate: "",
      offset: {
        top: 220,
        bottom: 30
      },
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
    viewHandler(e) {
      if (e.percentCenter < 0.5) {
        this.currentSlide = 1;
      }
    },
    viewHandler1(e) {
      if (e.percentCenter < 0.5) {
        this.currentSlide = 2;
      }
    },
    viewHandler2(e) {
      if (e.percentCenter < 0.5) {
        this.currentSlide = 3;
      }
    },
    viewHandler3(e) {
      if (e.percentCenter < 0.5) {
        this.currentSlide = 4;
      }
    },
    enableRotatiion() {
      this.rotate = "rotate";
    },
    disableRotatiion() {
      setTimeout(() => {
        this.rotate = "";
      }, 1000);
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
  overflow-x: hidden;
  margin-top: -1px;
  h1 {
    font-size: 60px;
    color: #1b3b59;
    text-align: left;
    line-height: 60px;
  }
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
    height: 150px;
    min-width: 240px;
    max-width: 22vw;
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
      padding: 0.85rem;
      height: 3.5rem;
      width: 3.5rem;
    }
  }
}
.card-roll-wrapper {
  margin-bottom: 10px;
}
.card-scrolls {
  padding: 0 1rem;
}
.span-background {
  background: linear-gradient(180deg, #f2f2f2 14%, #ffffff 100%);
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
  z-index: -1;
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
@media screen and (max-width: 768px) {
  h1 {
    color: #0980f0;
    font-size: 48px !important;
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
.phone-bg {
  overflow: hidden;
}
.video {
  width: 102%;
}
.round {
  border-style: solid;
  border-color: #14b0bb;
  border-radius: 50%;
  text-align: center;
}
.advantages {
  height: 60vh;
  p{
    font-weight: 400;
  }
}
.advantages-last {
  height: 30vh;
}
.main-container {
  max-width: 1800px;
}
.ma-enter {
  opacity: 0;
}
.ma-enter-active {
  transition: all 500ms;
}
.ma-enter-to {
}
.ma-leave {
}
.ma-leave-active {
  transition: all 500ms;
}
.ma-leave-to {
  opacity: 0;
}
</style>
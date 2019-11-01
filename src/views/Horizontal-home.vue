<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead"></div>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
            <mdb-row class="d-flex justify-content-center">
              <mdb-col lg="10" xl="12">
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
                <mdb-row class="d-flex justify-content-center py-5">
                  <mdb-col lg="10">
                    <img class="img-fluid" src="@/assets/hero-image.png" alt />
                    <div id="trigger2" class="spacer s1"></div>
                  </mdb-col>
                </mdb-row>
              </mdb-col>
            </mdb-row>

        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>
          <div class="advantages">
            <div v-animateOnScroll="{animation: 'fadeInLeft'}">
              <h2>Создавайте группы</h2>
              <hr />
              <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
              <div class="arrow"></div>
              <font-awesome-icon :icon="['fas', 'chevron-down']" size="3x" class="mt-2 mb-4" />
            </div>
            <div id="scrollTriggerPhone" class="m-5"></div>
            <h2>Приглашайте коллег</h2>

            <hr />
            <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            <div class="arrow">
              <font-awesome-icon :icon="['fas', 'chevron-down']" size="3x" class="mt-1 mb-4" />
            </div>
            <h2>Запускайте голосование</h2>
            <hr />
            <p>Создавайте опросы с различными вариантами ответа. Анонимные и публичные. С чатом обсуждения и без него</p>
            <div class="arrow">
              <font-awesome-icon :icon="['fas', 'chevron-down']" size="3x" class="mt-2 mb-4" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
import dtbtn from "@/components/UI/dt-btn";
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
    mdbView
  },
  directives: {
    animateOnScroll
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        spaceBetween: 0,
        mousewheel: true,
        freeMode: true,
        simulateTouch: false,
        watchSlideProgress: true,
      }
    };
  }
};
</script>
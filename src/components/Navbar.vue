<template>
  <div :class="headClass" id="navbar">
    <div class="dt-navbar">
      <mdb-container>
        <mdb-row class="align-items-center">
          <mdb-col col="4" class="d-block d-md-none">
            <mdb-dropdown>
              <mdb-dropdown-toggle slot="toggle">
                <font-awesome-icon icon="bars" />
              </mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <!-- <mdb-dropdown-item  @click="$router.push(`/functions`)">
                  <a>Функция</a>
                </mdb-dropdown-item> -->
                <mdb-dropdown-item  @click="$router.push(`/price`)">
                  <a>Цены</a>
                </mdb-dropdown-item>
                <mdb-dropdown-item @click="$router.push(`/blog`)">
                  <a>Блог</a>
                </mdb-dropdown-item>
                <mdb-dropdown-item @click="$router.push(`/about`)">
                  <a>О нас</a>
                </mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-col>
          <mdb-col col="4" md="4" class="d-flex justify-content-center justify-content-xl-start">
            <a @click="$router.push(`/`)">
              <img src="@/assets/logo-color.svg" class="img-fluid" alt="Логотип DreamTeam" />
            </a>
          </mdb-col>
          <mdb-col md="5" lg="4" class="d-none d-md-block">
            <div class="d-flex justify-content-between w-100">
              <!-- <a @click="$router.push(`/functions`)">Функция</a> -->
               <router-link to="/" v-scroll-to="'.cost-card, 10px'">Цены</router-link>
              <a @click="$router.push(`/blog`)">Блог</a>
              <a @click="$router.push(`/about`)">О нас</a>
            </div>
          </mdb-col>
          <mdb-col col="4" md="3" lg="4" class="d-flex justify-content-end">
            <dtbtn :icon="`sign-in-alt`" :title="`Войти`" :gradiented="true"></dtbtn>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
  </div>
</template>

<script>
import { bus } from "../bus.js";

import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle
} from "mdbvue";
import dtbtn from "@/components/UI/dt-btn";
export default {
  data() {
    return {
      headClass: ""
    };
  },
  methods: {
    printHead() {
      this.headClass = "grey-background";
    },
    clearHead() {
      this.headClass = "";
    }
  },
  mounted() {
    bus.$on(`paintHeadInit`, this.printHead);
    bus.$on(`paintHeadDestroy`, this.clearHead);
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    dtbtn,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle
  }
};
</script>

<style lang="less" scoped>
.grey-background {
  background-color: rgb(242, 242, 242);
}
.dt-navbar {
  padding: 25px 0 50px 0;
  a {
    font-weight: 600;
    color: #6c7580;
    font-size: 16px;
  }
}
.dropdown-toggle {
  border: 0;
  box-shadow: unset;
  font-size: 2rem;
  color: #35549f;
}
.dropdown-toggle::after {
  display: none;
}
mdb-dropdown{
  z-index: 10000 !important;
}
</style>
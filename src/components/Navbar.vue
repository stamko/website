<template>
  <div :class="headClass" id="navbar">
    <div class="dt-navbar">
      <!-- //TODO: передалть меню - при клике выезжает оверлей -->
      <mdb-container>
        <mdb-row class="align-items-center">
          <mdb-col col="4" class="d-block d-md-none pt-3 mr-4">
            <mdb-dropdown>
              <mdb-dropdown-toggle slot="toggle">
                <p class="burger">
                  <font-awesome-icon icon="bars" />
                </p>
              </mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <mdb-dropdown-item @click="$router.push(`/price`)">
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
          <mdb-col col="4" md="4" class="d-flex offset-md-1 offset-xl-0">
            <a @click="$router.push(`/`)">
              <img src="@/assets/logo-color.png" class="img-fluid" width="180px" alt="Логотип DreamTeam" />
            </a>
          </mdb-col>
          <mdb-col md="5" lg="4" class="d-none d-md-block">
            <div class="d-flex w-100 justify-content-center">
              <!-- <a @click="$router.push(`/functions`)">Функция</a> -->
              <router-link class="mr-3" to="/" v-scroll-to="'.cost-card, 10px'">Цены</router-link>
              <a class="mr-3" @click="$router.push(`/blog`)">Блог</a>
              <a @click="$router.push(`/about`)">О нас</a>
            </div>
          </mdb-col>
          <mdb-col col="4" md="3" lg="4" class="d-none justify-content-end">
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
      headClass: "",
      catalog: {
        element: {
          title: "Цены"
        }
      }
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
  z-index: 100000;
  overflow: visible;
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
.dropdown-menu {
  top: 0 !important;
}
.burger {
  font-size: 20px;
}
</style>
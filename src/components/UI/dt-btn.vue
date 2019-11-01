<template>
  <div class="dt-btn">
    <button
      :class="`btn btn-rounded ripple-parent d-flex align-items-center ` + fullWidthClass + bgColorClass + shadowClass + btnclass"
      rounded
    >
      <font-awesome-icon v-if="icon && iconPosition==='start'" :icon="icon" class="mr-1" />
      {{title}}
      <font-awesome-icon v-if="icon && iconPosition===`end`" :icon="icon" class="ml-1" />
    </button>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";
export default {
  name: "ButtonPage",
  props: {
    // gradiented bool
    gradiented: {
      default: ""
    },
    title: {
      default: ""
    },
    bgColor: {
      default: ""
    },
    icon: {
      default: ""
    },
    iconPosition: {
      default: "start"
    },
    withShadow: {
      default: ""
    },
    block: {
      default: null
    }
  },
  computed: {
    bgColorClass() {
      return this.bgColor + " ";
    },
    btnclass() {
      return this.gradiented
        ? this.gradiented === `dark`
          ? `gradiented-dark `
          : `gradiented `
        : ` `;
    },
    shadowClass() {
      return this.withShadow ? `shadowed ` : ` `;
    },
    fullWidthClass() {
      return this.block ? `w-100 ` : ` `;
    }
  },
  components: {
    mdbBtn
  }
};
</script>

<style lang="less">
.dt-btn {
  margin: -10px;
  .btn-rounded {
    white-space: nowrap !important;
    text-transform: unset;
    box-shadow: none;
    margin: 0;
    border-radius: 17px;
    padding: 0.35rem 1.55rem;
    font-weight: 500;
    line-height: 25px;
    color: black;
    transition-duration: 0.5s;
  }
  .btn-rounded:hover {
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    transition-duration: 0.5s;
  }
  .gradiented {
    border-radius: 17px;
    padding: 0.35rem 1.45rem;
    font-weight: 500;
    line-height: 25px;
    background: linear-gradient(157.11deg, #16ccd9 0.08%, #563dbf 100%);
    color: white;
  }

  .grey {
    background-color: #6c7580 !important;
    color: white;
  }

  .shadowed {
    transition-duration: 0.5s;
    box-shadow: 0 10px 15px 0 rgba(20, 176, 187, 0.3);
  }
  .shadowed:hover {
    transition-duration: 0.5s;
    box-shadow: unset;
  }
  .primary {
    // background-color: blue !important;
    color: white;
  }
}
@media screen and (max-width: 540px) {
  
  .gradiented {
    display: flex;
    align-items: center;
  }
}
</style>
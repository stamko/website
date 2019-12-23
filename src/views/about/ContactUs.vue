<template>
  <div>
    <h2>Как с нами связаться?</h2>
    <mdb-row>
      <mdb-col class="d-flex justify-content-around">
        <div class="contact-card my-5 p-3">
          <p class="p-3">Чат техподдержки в приложении</p>
          <dtbtn withShadow="true" :gradiented="true" title="Перейти в чат" class="ml-5 pl-2"></dtbtn>
        </div>

        <div class="contact-card my-5 p-3">
          <p class="p-3">Техподдержка по телефону</p>
          <b>Россия</b>
          <br />+7 ХХХ ХХХ ХХ ХХ
        </div>
        <div class="contact-card my-5 p-3">
          <p class="p-3">Наши аккаунты в соцсетях</p>
          <mdb-row>
            <mdb-col class="d-flex justify-content-around brand-icon">
              <span>
                <a href="https://www.instagram.com/dteam.team/">
                  <font-awesome-icon :icon="['fab', 'instagram']" size="3x" />
                </a>
              </span>
              <span>
                <a href="https://vk.com/dteam.team">
                  <font-awesome-icon :icon="['fab', 'vk']" size="3x" />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/dteam.team">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" size="3x" />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/dteam_team">
                  <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
                </a>
              </span>
            </mdb-col>
          </mdb-row>
        </div>
      </mdb-col>
    </mdb-row>
  </div>
</template>
<script>
import { mdbRow, mdbCol, mdbContainer } from "mdbvue";
import dtbtn from "@/components/UI/dt-btn";
export default {
  name: "ContactUs",
  components: {
    mdbRow,
    mdbCol,
    mdbContainer,
    dtbtn
  }
};
</script>
<style lang="less" scoped>
h2 {
  font-size: 48px;
  color: #1b3b59;
  text-align: center;
  font-weight: 700;
}
.contact-card {
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  border-radius: 10px;
  width: 290px;
  height: 230px;
  p {
    font-size: 24px;
    color: #1b3b59;
    text-align: center;
    font-weight: 600;
  }
  .brand-icon {
    justify-content: flex-end;
    a {
      color: #15b0bb !important;
      a:link {
        color: #15b0bb !important;
        border-bottom: 1px dashed;
      }
      a:visited {
        color: #15b0bb !important;
      }
      a:hover {
        color: #15b0bb !important;
        border-bottom: 0.07em solid;
      }
      a:active {
        color: #15b0bb !important;
        border-bottom: 1px dashed;
      }
    }
  }
}
</style>
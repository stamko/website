<template>
  <footer>
    <mdbContainer>
      <mdb-row class="mb-5">
        <mdb-col class="footer-logo">
          <a @click="$router.push(`/`)">
            <img src="@/assets/blackwhitelogo.svg" class="img-fluid" alt="Логотип DreamTeam" />
          </a>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col md="8" lg="8" class="order-2 order-md-1">
          <mdb-row class="footer-links">
            <mdb-col col="8" md="12" lg="4">
              <ul>
                <li>
                  <router-link to="/updates">Обновления</router-link>
                </li>
                <li>
                  <router-link to="/beta">Бета-версия</router-link>
                </li>
                <li>
                  <router-link to="/functions">Функции</router-link>
                </li>
                <li>
                  <router-link to="/price">Цены</router-link>
                </li>
              </ul>
            </mdb-col>
            <mdb-col col="8" md="12" lg="4">
              <ul>
                <li>
                  <router-link to="/guide">Руководство пользователя</router-link>
                </li>
                <li>
                  <router-link to="/support">Техподдержка</router-link>
                </li>
                <li>
                  <router-link to="/docs">Документация</router-link>
                </li>
                <li>
                  <router-link to="/terms">Правовая информация</router-link>
                </li>
              </ul>
            </mdb-col>
            <mdb-col col="8" md="12" lg="4">
              <ul>
                <li>
                  <router-link to="/about">О компании</router-link>
                </li>
                <li>
                  <router-link to="/contacts">Контакты</router-link>
                </li>
                <li>
                  <router-link to="/job">Вакансии</router-link>
                </li>
                <li>
                  <router-link to="/blog">Блог</router-link>
                </li>
              </ul>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col
          md="4"
          col="8"
          lg="4"
          offset="2"
          offset-md="0"
          class="d-flex flex-column align-items-center mb-5 order-1 order-md-2"
        >
          <h2 class="mb-3 text-white">Подпишись на нашу рассылку</h2>
          <div class="form-group mb-3 w-100">
            <input placeholder="email" type="text" class="form-control subscribe-input" />
          </div>
          <dtBtn
            withShadow="true"
            :block="true"
            :gradiented="true"
            title="Подписаться"
            class="mb-3"
          ></dtBtn>
          <p>Письма не чаще раза в неделю с рекомендациями по ведению бизнеса в Бирюзовом формате</p>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col>
          <p class="copyright">ооо «ДримТим», 2019 год</p>
        </mdb-col>
      </mdb-row>
    </mdbContainer>
  </footer>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import dtBtn from "@/components/UI/dt-btn.vue";
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    dtBtn
  }
};
</script>

<style lang="less" scoped>
footer {
  padding-top: 6rem;
  background-color: #1b3b59;
  color: white;
  z-index: 1;
  .copyright {
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }

  .subscribe-input {
    padding: 10px 25px;
    border-radius: 25px;
  }
  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    text-align: center;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .subscribe-input::placeholder {
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    color: #bfbfbf;
  }
  ul {
    padding: 0;
    li {
      margin-bottom: 10px;
      a {
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        color: white;
      }
      list-style-type: none;
    }
  }
  @media screen and (max-width: 540px) {
    .footer-logo {
      display: flex;
      justify-content: center;
    }
    .footer-links {
      display: flex;
      justify-content: center;
    }
    h2 {
      font-size: 24px;
      font-weight: 600;
      line-height: 29px;
    }
    p {
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
    }
  }
}
</style>
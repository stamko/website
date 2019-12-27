<template>
  <div style="margin-top:7rem;">
    <mdb-row>
      <mdb-col col="12">
        <div class="cost-card">
          <mdb-card-title>
            @
            <div class="d-flex justify-content-center mb-5 pb-5">
              <div class="cost-value gradiented">
                <span>0$</span>
              </div>
            </div>
          </mdb-card-title>
          <mdb-card-body>
            <mdb-row>
              <mdb-col>
                <h2 style="margin-top: -6rem;" id="prices">DreamPrice</h2>
              </mdb-col>
              <mdb-col>
                <p
                  style="margin-top: -5.5rem; margin-left: 6rem;"
                >Все функции платформы доступны бесплатно</p>
              </mdb-col>
            </mdb-row>
            <h3>Функции:</h3>
            <mdb-row>
              <mdb-col>
                <ul class="p-0">
                  <li>Создание групп</li>
                  <li>Общение внутри команд</li>
                  <li>Обмен медиа-файлами</li>
                </ul>
              </mdb-col>
              <mdb-col>
                <ul class="p-0">
                  <li>Стикеры</li>
                  <li>Анонимная оценка</li>
                  <li>Рейтинги сотрудников</li>
                </ul>
              </mdb-col>
            </mdb-row>
          </mdb-card-body>
        </div>
      </mdb-col>
    </mdb-row>
    <mdb-row class="pt-5" style="margin:7rem 0;">
      <mdb-col>
        <div class="cost-card h-100">
          <div class="d-flex justify-content-center">
            <div class="cost-value gradiented-dark">
              <span class="per-month">49$</span>
            </div>
          </div>
          <mdb-card-body>
            <mdb-card-text>
              <h4 class="p-5 text-center">Для участников группы:</h4>
              <ul>
                <li>Оценивание руководителя</li>
                <li>Просмотр чужой истории оценок</li>
              </ul>
            </mdb-card-text>
          </mdb-card-body>
        </div>
      </mdb-col>
      <mdb-col>
        <div class="cost-card h-100">
          <div class="d-flex justify-content-center">
            <div class="cost-value gradiented-dark">
              <span class="per-month">49$</span>
            </div>
          </div>
          <mdb-card-body>
            <mdb-card-text>
              <h4 class="p-5 text-center">Для руководителей групп:</h4>
              <ul style="margin-top: -2rem;">
                <li>"Пятый элемент"</li>
                <ol class="p-0">
                  <li>свой критерий и вопросы</li>
                </ol>
                <li>Настройка оценивания</li>
                <ol class="p-0">
                  <li>время запуска, длительность оценивания выбор вопросов</li>
                </ol>
              </ul>
            </mdb-card-text>
          </mdb-card-body>
        </div>
      </mdb-col>
      <mdb-col>
        <mdb-row></mdb-row>
        <div class="cost-card h-100">
          <div class="d-flex justify-content-center">
            <div class="cost-value gradiented-dark">
              <span class="per-month">49$</span>
            </div>
          </div>
          <mdb-card-body>
            <mdb-card-text>
              <h4 class="p-5 text-center">Для всех:</h4>
              <ul class="pt-4">
                <li>"Новая жизнь"</li>
                <ol class="p-0">
                  <li>очистка истории рейтинга, обнуление оценки</li>
                </ol>
                <li>Усиление голоса</li>
                <li>Настройка оценивания</li>
                <ol class="p-0">
                  <li>внутренняя валюта для покупки стикеров и кастомизации профиля</li>
                </ol>
              </ul>
            </mdb-card-text>
          </mdb-card-body>
        </div>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import dtBtn from "@/components/UI/dt-btn.vue";
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn
} from "mdbvue";
export default {
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    dtBtn
  }
};
</script>

<style lang="less" scoped>
.cost-card {
  background: #f2f2f2;
  border-radius: 10px;
  font-size: 12px;
  color: #1b3b59;
  font-weight: 200;
  width: 106%;
  ul li {
    list-style-type: none;
    font-size: 16px;
    color: #1b3b59;
    font-weight: 400;
  }
  ol li {
    list-style-type: none;
    font-size: 12px;
    color: #1b3b59;
    font-weight: 400;
  }
  h2 {
    font-size: 36px;
    color: #16ccd9;
    font-weight: 600;
  }
  h3 {
    font-size: 26px;
    color: #1b3b59;
    font-weight: 600;
  }
  h4 {
    font-size: 21px;
    color: #1b3b59;
    text-align: center;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    color: #1b3b59;
    font-weight: 400;
  }
}
.gradiented-dark {
  // margin-left: 27%;
}
.cost-value {
  border-radius: 50%;
  position: absolute;
  margin-top: -6rem;
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);

  span {
    color: white;
    font-size: 72px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  span.per-month:before {
    font-size: 21px;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: -1.25rem;
    content: "от";
  }
  span.per-month:after {
    font-size: 21px;
    font-weight: 600;
    line-height: 25px;
    margin-top: -1.25rem;
    content: "в месяц";
  }
}
@media screen and (max-width: 1024px) {
  .cost-card {
    width: 100%;
  }
}
</style>
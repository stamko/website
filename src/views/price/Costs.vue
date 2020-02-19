<template>
  <div style="margin-top:7rem;">
    <mdb-row>
      <mdb-col col="11">
        <div class="cost-card big">
          <mdb-card-title>
            @
            <div class="d-flex justify-content-center mb-5 pb-5">
              <div class="cost-value gradiented">
                <span>0₽</span>
              </div>
            </div>
          </mdb-card-title>
          <mdb-card-body>
            <mdb-row>
              <mdb-col>
                <h2 style="margin-top: -6rem;" class="d-none d-md-block ml-3" id="prices">DreamPrice</h2>
              </mdb-col>
              <mdb-col>
                <p
                  class="d-none d-md-block"
                  style="margin-top: -5.5rem; margin-left: 6rem;"
                >Все функции платформы доступны бесплатно</p>
              </mdb-col>
            </mdb-row>
            <h3 class="ml-3">Функции:</h3>
            <mdb-row class="ml-1">
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
      <mdb-col col="12" lg="4" style="margin-top:7rem;">
        <div class="cost-card h-100">
          <div class="d-flex justify-content-center">
            <div class="cost-value gradiented-dark">
              <span class="per-month">49₽</span>
            </div>
          </div>
          <mdb-card-body>
            <mdb-card-text>
              <h4 class="pt-5 text-center">Для участников группы:</h4>
              <ul>
                <li>Оценивание руководителя</li>
                <li>Просмотр чужой истории оценок</li>
              </ul>
            </mdb-card-text>
          </mdb-card-body>
        </div>
      </mdb-col>
      <mdb-col col="12" lg="4" style="margin-top:7rem;">
        <div class="cost-card h-100">
          <div class="d-flex justify-content-center">
            <div class="cost-value gradiented-dark">
              <span class="per-month">49₽</span>
            </div>
          </div>
          <mdb-card-body>
            <mdb-card-text>
              <h4 class="pt-5 text-center">Для руководителей групп:</h4>
              <ul style="margin-top: -2rem;" class="py-4">
                <li>"Пятый элемент"</li>
                <ol class="p-0">
                  <li>Добавляйте критерий или вопросы</li>
                </ol>
                <li>Настройка оценивания</li>
                <ol class="p-0">
                  <li>
                    Изменяйте время запуска, длительность
                    Исключайте вопросы
                  </li>
                </ol>
              </ul>
            </mdb-card-text>
          </mdb-card-body>
        </div>
      </mdb-col>
      <mdb-col col="12" lg="4" style="margin-top:7rem;">
        <mdb-row></mdb-row>
        <div class="cost-card h-100">
          <div class="d-flex justify-content-center">
            <div class="cost-value gradiented-dark">
              <span class="per-month">49₽</span>
            </div>
          </div>
          <mdb-card-body>
            <mdb-card-text>
              <h4 class="pt-5 text-center">Для всех:</h4>
              <ul class="pt-4">
                <li>"Новая жизнь"</li>
                <ol class="p-0">
                  <li>Обнуляйте свой рейтинг и его историю</li>
                </ol>
                <li>Усиление голоса</li>
                <li>Покупка «Тилов»</li>
                <ol class="p-0">
                  <li>Внутренняя валюта для покупки стикеров и кастомизации профиля</li>
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
  margin: 1rem;

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
.big {
  width: 106%;
}
.gradiented {
  box-shadow: 0 5px 10px 0 #16ccd9 !important;
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
    font-size: 60px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  span.per-month {
    color: white;
    font-size: 60px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  span.per-month:before {
    font-size: 21px;
    font-weight: 200;
    line-height: 25px;
    margin-bottom: -1.25rem;
    content: "от";
  }
  span.per-month:after {
    font-size: 21px;
    font-weight: 200;
    line-height: 25px;
    margin-top: -1.25rem;
    content: "в месяц";
  }
}
@media screen and (max-width: 1024px) {
  .cost-card {
    width: 100%;
    margin: 0;
  }
  .big {
    margin-left: 1rem;
  }
}
</style>
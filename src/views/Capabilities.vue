<template>
  <div>
    <div class="card-roll-wrapper d-none d-sm-block">
      <div>
        <h2 class="text-center">Возможности приложения:</h2>
        <div class="d-flex card-scrolls justify-content-around">
          <mdb-row>
            <mdb-col>
              <div class="app-card">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title class="card-title">
                    <img class="img-fluid" src="@/assets/icons/tasks.svg" alt />
                  </mdb-card-title>
                  <mdb-card-text>
                    <h2>Задачи</h2>
                    <p>Ставьте задачи, определяйте сроки, назначайте ответственных</p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
              <div class="app-card mt-2">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>
                    <img class="img-fluid" src="@/assets/icons/projects.svg" alt />
                  </mdb-card-title>
                  <mdb-card-text>
                    <h2>Управление проектами</h2>
                    <p>Выстраивайте структуру команды при помощи групп</p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
            </mdb-col>
            <mdb-col>
              <div class="app-card">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>
                    <img class="img-fluid" src="@/assets/icons/chats.svg" alt />
                  </mdb-card-title>
                  <mdb-card-text>
                    <h2>Чаты</h2>
                    <p>Общайтесь быстрее, безопаснее, эффективнее</p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
              <div class="app-card mt-4">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>
                    <img class="img-fluid" src="@/assets/icons/stickers.svg" alt />
                  </mdb-card-title>
                  <mdb-card-text>
                    <h2>Стикеры</h2>
                    <p>Выражайте эмоции при помощи стикеров</p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
            </mdb-col>
            <mdb-col>
              <div class="app-card">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>
                    <img class="img-fluid" src="@/assets/icons/rating.svg" alt />
                  </mdb-card-title>
                  <mdb-card-text>
                    <h2>Рейтинг</h2>
                    <p>Зарабатывайте рейтинг по пяти ключевым компетенциям</p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
              <div class="app-card mt-4">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>
                    <img class="img-fluid" src="@/assets/icons/game.svg" alt />
                  </mdb-card-title>
                  <mdb-card-text>
                    <h2>Геймификация</h2>
                    <p>Выполняйте рабочие задачи эффективнее в игровой форме</p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
            </mdb-col>
            <mdb-col>
              <div class="app-card">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>
                    <img class="img-fluid" src="@/assets/icons/voting.svg" alt />
                  </mdb-card-title>
                  <mdb-card-text>
                    <h2>Голосование</h2>
                    <p>Советуйтесь с коллегами в принятии важного решения</p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
              <div class="app-card mt-4">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>
                    <img class="img-fluid" src="@/assets/icons/events.svg" alt />
                  </mdb-card-title>
                  <mdb-card-text>
                    <h2>Мероприятия</h2>
                    <p>Оповещайте о важном событии или деловой встрече</p>
                  </mdb-card-text>
                </mdb-card-body>
              </div>
            </mdb-col>
          </mdb-row>
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
              <p>Формируйте честную и эффективную команду, используя несложные вопросы</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Управление проектами
            </mdb-card-title>
            <mdb-card-text>
              <p>Выстраивайте структуру команды при помощи групп</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Чаты
            </mdb-card-title>
            <mdb-card-text>
              <p>Общайтесь быстрее, безопаснее, эффективнее</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Анонимное оценивание
            </mdb-card-title>
            <mdb-card-text>
              <p>Выставляйте оценку профессиональных качеств членам команды</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Рейтинг
            </mdb-card-title>
            <mdb-card-text>
              <p>Зарабатывайте рейтинг по пяти ключевым компетенциям</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Геймификация
            </mdb-card-title>
            <mdb-card-text>
              <p>Выполняйте рабочие задачи эффективнее в игровой форме</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Голосование
            </mdb-card-title>
            <mdb-card-text>
              <p>Советуйтесь с коллегами в принятии важного решения</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Мероприятия
            </mdb-card-title>
            <mdb-card-text>
              <p>Оповещайте о важном событии или деловой встрече</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
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
              <p>Предлагайте крутые идеи для улучшения рабочих условий</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Задачи
            </mdb-card-title>
            <mdb-card-text>
              <p>Ставьте задачи, определяйте сроки, назначайте ответственных</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
        <div class="item">
          <mdb-view hover>
            <a href="#!">
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>
              <span class="gradiented">
                <font-awesome-icon :icon="['fas', 'tasks']" />
              </span>Стикеры
            </mdb-card-title>
            <mdb-card-text style=" background-image: url(`/assets/iphone-x.png`);">
              <p>Выражайте эмоции при помощи стикеров</p>
            </mdb-card-text>
          </mdb-card-body>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  components: {
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
  }
};
</script>

<style scoped lang="less">
h2 {
  font-size: 36px;
  color: #1b3b59;
  font-weight: 600; 
}
.app-card {
  h2 {
    font-size: 24px;
    color: #1b3b59;
    text-align: left;
    line-height: 24px;
  }
  p {
    font-size: 16px;
    color: #bfbfbf;
    text-align: left;
    line-height: 18px;
  }
}
.card-title {
}
</style>
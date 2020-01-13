<template>
  <div>
    <h2 class="m-3">Компоненты DreamTeam</h2>
    <mdb-row class="d-flex">
      <mdb-col class="d-flex">
        <mdb-row class="d-flex">
          <mdb-col>
            <div class="yg-card">
              <mdb-card-title>
                <img src="@/assets/youget/productivity.svg" alt="card-image" />
              </mdb-card-title>
              <mdb-card-body>
                <p class="header">Эффективность</p>
                <p>Каждая команда хочет получать лучший результата, но тратить на это меньше. В бесплатном приложении Dream Team члены команды оценивают результат друг друга анонимно и зарабатывают рейтинг за свою работу</p>
              </mdb-card-body>
            </div>
          </mdb-col>
          <mdb-col>
            <div class="yg-card">
              <mdb-card-title>
                <img src="@/assets/youget/involve.svg" alt="card-image" />
              </mdb-card-title>
              <mdb-card-body>
                <p class="header">Вовлеченность</p>
                <p>Дешевле и проще удерживать старую команду, чем постоянно менять кого-то. Не так ли? Так почему бы не определить отношение к компании с помощью несложных опросов при оценивании? И начать работать на улучшение?</p>
              </mdb-card-body>
            </div>
          </mdb-col>
          <mdb-col>
            <div class="yg-card">
              <mdb-card-title>
                <img src="@/assets/youget/initiative.svg" alt="card-image" />
              </mdb-card-title>
              <mdb-card-body>
                <p class="header">Инициативность</p>
                <p>Некоторые не предлагают идеи, потому что боятся быть непонятыми, высмеянными или наказанными. А что если предлагать идеи, и высказывать предложения анонимно? Тогда каждый член команды внесет вклад в рабочий процесс.</p>
              </mdb-card-body>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col class="d-flex">
        <mdb-row class="d-flex">
          <mdb-col>
            <div class="yg-card">
              <mdb-card-title>
                <img src="@/assets/youget/communication.svg" alt="card-image" />
              </mdb-card-title>
              <mdb-card-body>
                <p class="header">Общение</p>
                <p>Общение в команде способствует сплоченности. Обычно люди общаются в одном мессенджере и с семьей, и с коллегами. Либо используют старые и неудобные программы. А в DreamTeam можно разделять работу по группам, и использовать стикеры для разбавления нудной переписки.</p>
              </mdb-card-body>
            </div>
          </mdb-col>
          <mdb-col>
            <div class="yg-card">
              <mdb-card-title>
                <img src="@/assets/youget/self-org.svg" alt="card-image" />
              </mdb-card-title>
              <mdb-card-body>
                <p class="header">Самоорганизация</p>
                <p>Самоорганизация — один из этапов к бирюзовому подходу управления. Это способствует более эффективному и быстрому способу достижения результата. Самоорганизация выражается в дисциплине, и в способности ставить задачи перед самим собой</p>
              </mdb-card-body>
            </div>
          </mdb-col>
          <mdb-col>
            <div class="yg-card">
              <mdb-card-title>
                <img src="@/assets/youget/game.svg" alt="card-image" />
              </mdb-card-title>
              <mdb-card-body>
                <p class="header">Геймификация</p>
                <p>Работать играючи — основной принцип современных команд для молодых и современных сотрудников. Элементы игры, соревнований способствует повышению вовлеченности, эффективности и продуктивности</p>
              </mdb-card-body>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import {
  mdbContainer,
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
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  }
};
</script>

<style lang="less" scoped>
h2 {
  font-size: 36px;
  color: #1b3b59;
  text-align: center;
}
.yg-card {
  width: 260px;
  margin: 1rem;
  font-size: 16px;
  color: #6c7580;
  letter-spacing: 0.4px;
  text-align: left;
  line-height: 24px;
  .header {
    margin-top: 2rem;
    font-size: 21px;
    color: #1b3b59;
    letter-spacing: 0.4px;
    text-align: left;
    font-weight: 700;
  }
}
</style>
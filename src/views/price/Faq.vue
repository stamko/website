<template>
  <section class="feedback pt-5 mb-5">
    <h2 class="text-center mb-5">Частые вопросы</h2>
    <mdb-row>
      <mdb-col class="text-left">
        <accordion :panes="panes" />
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow, mdbCol, Accordion } from "mdbvue";
export default {
  data() {
    return {
      panes: [
        {
          title: "Что будет если я не оплачу подписку?",
          content: `Текст отзыва от компании или человека, пользующегося нашим продуктом`
        },
        {
          title:
            "Где я могу увидеть разбивку редакторов моей команды и связанные с этим расходы?",
          content: `Вы можете управлять редакторами вашей команды с панели инструментов Admin Dashboard (доступна для администраторов команды с Team Page). Когда вы начнете процесс обновления, вы сможете просматривать ваши текущие редакторы и понижать людей до зрителей, так что вы будете платить только за нужных вам редакторов.`
        },
        {
          title: "Кто несет ответственность за оплату команды?",
          content: `Любой редактор может перевести команду на тарифный план Professional, введя платежную информацию. (Это сделает их администраторами команды.) После обновления, только администраторы могут получить доступ к Admin Dashboard и управлять будущими платежами для команды.`
        },
        {
          title: "Как настроить, кто имеет права администратора?",
          content:
            "Любой администратор может настроить права доступа любого другого члена команды. Вы можете изменить права доступа каждого члена команды на странице Team Page. Количество администраторов в команде не ограничено."
        }
      ]
    };
  },
  components: {
    mdbRow,
    mdbCol,
    Accordion
  }
};
</script>

<style lang="less" scoped>
p {
  color: #1b3b59;
  font-size: 21px;
  line-height: 25px;
}
.accordion .card:hover {
  box-shadow: none !important;
  transition: none !important;
}
</style>
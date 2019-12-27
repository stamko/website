<template>
  <div>
    <mdbContainer class="my-5 ">
      <mdb-row class="advantages mb-3 p-2">
        <mdb-col>
          <mdb-card-body>
            <mdb-card-title>
              <img src="@/assets/Chat.svg" alt="Star" />
            </mdb-card-title>
            <mdb-card-text>
              <p class="header">Чаты</p>
              <p
                class="subheader"
              >Общайтесь с коллегами и друзьями с помощью чатов в нашем приложении</p>
            </mdb-card-text>
          </mdb-card-body>
        </mdb-col>
        <mdb-col>
          <mdb-card-body>
            <mdb-card-title>
              <img src="@/assets/Star.svg" alt="Star" />
            </mdb-card-title>
            <mdb-card-text>
              <p class="header">Оценка</p>
              <p
                class="subheader"
              >Участвуйте в оцениваниях, чтобы понять свои сильные стороны и развивать слабые</p>
            </mdb-card-text>
          </mdb-card-body>
        </mdb-col>
        <mdb-col>
          <mdb-card-body>
            <mdb-card-title>
              <img src="@/assets/Users.svg" alt="Star" />
            </mdb-card-title>
            <mdb-card-text>
              <p class="header">Группы</p>
              <p
                class="subheader"
              >Обьединяйтесь в группы: по интересам, по отделам, или в компании друзей</p>
            </mdb-card-text>
          </mdb-card-body>
        </mdb-col>
      </mdb-row>
      <mdb-row class="my-5 other">
        <mdb-col
          style="border-right-style: solid; border-right-width:1px; border-right-color: #D9D9D9;"
        >
          <mdb-card-body>
            <mdb-card-title>
              <img src="@/assets/clipboard.svg" alt="Star" />
            </mdb-card-title>
            <mdb-card-text>
              <p class="header">Системные требования</p>
              <p class="subheader">
                Android версии не ниже 4.4
                или
                iOS версии не ниже 7
              </p>
            </mdb-card-text>
          </mdb-card-body>
        </mdb-col>
        <mdb-col
          style="border-right-style: solid ; border-right-width:1px; border-right-color: #D9D9D9;"
        >
          <mdb-card-body>
            <mdb-card-title>
              <img src="@/assets/download.svg" alt="Star" />
            </mdb-card-title>
            <mdb-card-text>
              <p class="header">Загрузить</p>
              <mdb-row>
                <mdb-col class="d-flex" col="6" md="10" lg="6">
                  <img src="@/assets/googlePlay.png" alt class="img-fluid sfari-fix" />
                </mdb-col>
                <mdb-col class="d-flex" col="6" md="10" lg="6">
                  <img src="@/assets/appStore.png" style="opacity:50%" alt class="img-fluid safari-fix" />
                </mdb-col>
              </mdb-row>
            </mdb-card-text>
          </mdb-card-body>
        </mdb-col>
        <mdb-col>
          <mdb-card-body>
            <mdb-card-title>
              <img src="@/assets/book.svg" alt="Star" />
            </mdb-card-title>
            <mdb-card-text>
              <p class="header">Техподдержка и документация</p>
              <p class="subheader">
                <dtbtn :gradiented="true" title="Открыть раздел" class="d-flex align-items-center"></dtbtn>
              </p>
            </mdb-card-text>
          </mdb-card-body>
        </mdb-col>
      </mdb-row>
      <mdb-row class="my-5" style="font-size:14px">
        <mdb-col>App Store и логотип Apple являются товарными знаками корпорации Apple Inc.</mdb-col>
        <mdb-col>Google Play и логотип Google Play являются товарными знаками корпорации Google LLC.</mdb-col>
      </mdb-row>
    </mdbContainer>
  </div>
</template>

<script>
import dtbtn from "@/components/UI/dt-btn";
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
  mdbView,
  mdbInput
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
    mdbView,
    mdbInput,
    dtbtn
  }
};
</script>

<style scoped lang="less">
.advantages {
  background: #f2f2f2;
  border-radius: 10px;
  .header {
    font-size: 36px;
    color: #1b3b59;
    font-weight: 700;
  }
  .subheader {
    font-size: 18px;
    color: #1b3b59;
    line-height: 18px;
  }
}
.download-card {
  background: #f2f2f2;
}
.fa {
  font-size: 60px;
  color: #14b0bb;
}
.other {
  .header {
    font-size: 24px;
    color: #14b0bb;
    font-weight: 700;
  }
  .subheader {
    font-size: 18px;
    color: #1b3b59;
  }
}
</style>
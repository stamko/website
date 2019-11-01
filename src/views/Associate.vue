<template>
  <div class="gradient-purple pt-3">
    <div class="section-shaped-gr">
      <div class="shape">
        <span class="span-150"></span>
        <span class="span-125"></span>
        <span class="span-175"></span>
        <span class="span-100"></span>
        <span class="span-150"></span>
        <span class="span-50"></span>
        <span class="span-200"></span>
        <span class="span-75"></span>
        <span class="span-150"></span>
        <span class="span-125"></span>
      </div>
    </div>
    <mdbContainer class="py-5">
      <h2>Присоединяйтесь!</h2>
      <mdb-row>
        <mdb-col>
          <mdb-card class="associateCard">
            <mdb-card-body>
              <mdb-card-title class="titleBorder">
                <h3>Зарегистрируйте компанию</h3>
              </mdb-card-title>
              <mdb-card-text class="d-flex flex-column align-items-center">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control orgInput"
                    placeholder="Название организации"
                  />
                </div>
                <dtbtn
                  :gradiented="true"
                  title="Попробуйте"
                  :icon="`sign-in-alt`"
                  :iconPosition="'end'"
                ></dtbtn>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col class="m-2">
          <mdb-card class="associateCard">
            <mdb-card-body>
              <mdb-card-title class="titleBorder">
                <h3>Загрузите приложение</h3>
              </mdb-card-title>
              <mdb-card-text>
                <mdb-row>
                  <mdb-col>
                    <img src="@/assets/googlePlay.png" alt class="img-fluid" />
                  </mdb-col>
                  <mdb-col>
                    <img src="@/assets/appStore.png" alt class="img-fluid" />
                  </mdb-col>
                </mdb-row>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdbContainer>
    <h2 class="mt-5 mb-5">Наш блог</h2>
    <div class="scroll-container">
      <div class="horizontal-card-wrapper squares">
        <mdb-card-body>
          <mdb-card-text>
            <mdb-card-title class="trim-text">{{postsData[postsData.length -1][0].data.title}}</mdb-card-title>
            <p
              v-html="postsData[postsData.length -1][0].data.description"
              class="p-0 m-0 trim-text"
            ></p>
            <div class="card-date">{{$moment(+postsData[postsData.length -1][0].when).fromNow()}}</div>
            <span
              class="category"
            >{{getRubricById(postsData[postsData.length -1][0].data.rubricId)}}</span>
          </mdb-card-text>
        </mdb-card-body>
        <mdb-card-body>
          <mdb-card-text>
            <mdb-card-title class="trim-text">{{postsData[postsData.length -2][0].data.title}}</mdb-card-title>
            <p
              v-html="postsData[postsData.length -2][0].data.description"
              class="p-0 m-0 trim-text"
            ></p>
            <div class="card-date">{{$moment(+postsData[postsData.length -2][0].when).fromNow()}}</div>
            <span
              class="category"
            >{{getRubricById(postsData[postsData.length -2][0].data.rubricId)}}</span>
          </mdb-card-text>
        </mdb-card-body>
        <mdb-card-body>
          <mdb-card-text>
            <mdb-card-title class="trim-text">{{postsData[postsData.length -3][0].data.title}}</mdb-card-title>
            <p
              v-html="postsData[postsData.length -3][0].data.description"
              class="p-0 m-0 trim-text"
            ></p>
            <div class="card-date">{{$moment(+postsData[postsData.length -3][0].when).fromNow()}}</div>
            <span
              class="category"
            >{{getRubricById(postsData[postsData.length -3][0].data.rubricId)}}</span>
          </mdb-card-text>
        </mdb-card-body>
        <mdb-card-body>
          <mdb-card-text>
            <mdb-card-title class="trim-text">{{postsData[postsData.length -4][0].data.title}}</mdb-card-title>
            <p
              v-html="postsData[postsData.length -4][0].data.description"
              class="p-0 m-0 trim-text"
            ></p>
            <div class="card-date">{{$moment(+postsData[postsData.length -4][0].when).fromNow()}}</div>
            <span
              class="category"
            >{{getRubricById(postsData[postsData.length -4][0].data.rubricId)}}</span>
          </mdb-card-text>
        </mdb-card-body>
      </div>
    </div>
    <mdbContainer>
      <mdb-row>
        <mdb-col>
          <div class="blog-button">
            <button
              type="button"
              class="btn btn-light m-5"
              @click="$router.push(`/blog`)"
            >Перейти в блог</button>
          </div>
        </mdb-col>
        <mdb-col class="d-flex mt-5 mb-5 brand-icon">
          <span>
            <font-awesome-icon :icon="['fab', 'instagram']" class="mr-4" />
          </span>
          <span>
            <font-awesome-icon :icon="['fab', 'vk']" class="mr-4" />
          </span>
          <span>
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="mr-4" />
          </span>
          <span>
            <font-awesome-icon :icon="['fab', 'twitter']" class="mr-4" />
          </span>
        </mdb-col>
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
    dtbtn,
    mdbInput
  },
  methods: {
    // Получение поста последней минус index записи блога из первого блока (main) текста по айди категории
    getPostForDom(index, id) {
      let posts = [];
      for (let i = 0; i < this.postsData.length; i++) {
        const element = this.postsData[i][0];
        if (element.data.rubricId === id) {
          posts.push(this.postsData[i]);
        }
      }
      return posts[posts.length - index - 1];
    },
    getRubricById(id) {
      for (const rubric of this.rubricsData) {
        if (id === rubric.id) return rubric.name;
      }
    }
  },
  computed: {
    postsData() {
      return this.$store.state.postsData;
    },
    rubricsData() {
      return this.$store.state.rubricsData;
    }
  }
};
</script>

<style lang="less" scoped>
h2 {
  color: #ffffff;
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 800;
  line-height: 58px;
  text-align: center;
}
h3 {
  color: #1b3b59;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 800;
  line-height: 34px;
  text-align: center;
}
.titleBorder {
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-image-source: linear-gradient(
    315deg,
    #ac35cd 0%,
    #625dd7 51.54%,
    #1ccedb 100%
  );
  border-image-slice: 1;
}
.associateCard {
  background-color: hsla(0, 0%, 100%, 0.75);
  margin-left: 1rem;
}
.orgInput {
  width: 15rem;
  border-radius: 32.5px;
  background-color: #f2f2f2;
  text-align: center;
}
.scroll-container {
  display: flex;
  margin-bottom: 250px;
}
.horizontal-card-wrapper {
  position: absolute;
  width: 327px;
  max-height: 100vw;
  margin: 0;
  padding-top: 1px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-transform: rotate(-90deg) translateY(-250px);
  transform: rotate(-90deg) translateY(-250px);
  -webkit-transform-origin: right top;
  transform-origin: right top;
  margin-left: -80px;
}

.horizontal-card-wrapper::-webkit-scrollbar {
  width: 1px;
  background-color: transparent;
}
.horizontal-card-wrapper > div {
  display: block;
  padding: 5px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: right top;
  transform-origin: right top;
}

.squares {
  padding: 170px 0 0 0;
}
.squares > div {
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  p {
    color: #1b3b59;
    font-size: 16px;
    line-height: 19px;
  }
  width: 274px;
  height: 150px;
  margin: 143px 0 0 0;
  padding: 10px;
}
// .cardTurn--content {
//   width: 100px;
//   height: 100px;
//   transform: rotate(90deg);
//   transform-origin: right top;
// }

.section-shaped-gr {
  margin: 0 0;
  z-index: 0;
  height: 75%;
  width: 100%;
  position: absolute;
}
.section-shaped-gr .shape {
  //   position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.section-shaped-gr .shape span {
  position: absolute;
}
.section-shaped-gr {
  span {
    z-index: 1;
    border-radius: 50%;
    background: #ffffff;
    opacity: 0.25;
  }
  .span-200 {
    height: 200px;
    width: 200px;
  }
  .span-150 {
    height: 150px;
    width: 150px;
  }
  .span-100 {
    height: 100px;
    width: 100px;
  }
  .span-75 {
    height: 75px;
    width: 75px;
  }
  .span-50 {
    height: 50px;
    width: 50px;
  }
  :first-child {
    left: -4%;
    bottom: auto;
  }
  :nth-child(2) {
    right: 4%;
    top: 10%;
  }
  :nth-child(3) {
    top: 280px;
    right: 5.66666%;
  }
  :nth-child(4) {
    top: 90%;
    right: 35%;
  }
  :nth-child(5) {
    top: 38%;
    left: 33%;
    right: auto;
  }
  :nth-child(6) {
    width: 200px;
    height: 200px;
    top: 21%;
    left: 10%;
    right: auto;
  }
  :nth-child(7) {
    bottom: 50%;
    right: 36%;
  }
  :nth-child(8) {
    bottom: 70px;
    right: 2%;
  }
  :nth-child(9) {
    bottom: 1%;
    right: 22%;
  }
  :nth-child(10) {
    bottom: 1%;
    left: 1%;
    right: auto;
  }
}
.blog-button {
  button {
    font-size: 21px;
    border-radius: 25px;
    background: hsla(0, 0%, 100%, 0.75) !important;
    padding: 13px 25px 12px 25px;
    text-transform: unset;
  }
}
.brand-icon {
  justify-content: flex-end;
  span {
    font-size: 30px;
    margin-left: 21px;
    position: relative;
    border-radius: 50%;
    background-color: #1b3b59;
    height: 50px;
    width: 50px;
    padding-top: 4px;
    padding-left: 12px;
  }
  :nth-child(2) {
    padding-left: 8px;
  }
  :nth-child(3) {
    padding-left: 15px;
  }
}
@media screen and (max-width: 540px) {
  h2 {
    color: #ffffff;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 800;
    line-height: 39px;
    text-align: center;
  }
  button{
    display: flex;
  }
  .horizontal-scroll-wrapper {
  position: absolute;
  max-height: 108vw;
  margin: 0;
  padding-top: 1px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-transform: rotate(-90deg) translateY(-250px);
  transform: rotate(-90deg) translateY(-250px);
  -webkit-transform-origin: right top;
  transform-origin: right top;
  margin-left: -54px;
}
}
</style>
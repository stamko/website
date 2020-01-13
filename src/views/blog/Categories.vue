<template>
  <section class="categories">
    <h2 class="text-center mb-5">Рубрики</h2>
    <div class="categories-wrapper mb-3">
      <mdb-row>
        <mdb-col v-if="rubricsData[0] && getPostForDom(0,rubricsData[0].id)" md="6">
          <div>
            <h2 class="categories-title">{{rubricsData[0].name}}</h2>

            <p>{{rubricsData[0].description}}</p>
          </div>
        </mdb-col>
        <mdb-col v-else md="6">
          <div>
            <a-skeleton avatar active />
          </div>
        </mdb-col>
        <mdb-col v-if="rubricsData[0] && getPostForDom(0,rubricsData[0].id)" md="6" sm="12">
          <mdb-row>
            <mdb-col
              md="6"
              sm="12"
              class="mb-3"
              v-if="rubricsData && getPostForDom(0,rubricsData[0].id)"
            >
              <mdb-card class="h-100 z-depth-0">
                <!-- <mdb-card-image
                  :src="`data:image/*;base64,`+getPostForDom(0,rubricsData[0].id)[0].data.content"
                  alt="Card image cap"
                  class="cursor-pointer"
                  @click.native="$router.push(`/post/`+getPostForDom(0,rubricsData[0].id)[0].when)"
                ></mdb-card-image> -->
                <mdb-card-body class="gradiented-card">
                  <mdb-card-text class="card-content">
                    <mdb-card-title
                      class="card-title-small cursor-pointer"
                      @click.native="$router.push(`/post/`+getPostForDom(0,rubricsData[0].id)[0].when)"
                    >
                      <h2>{{getPostForDom(0,rubricsData[0].id)[0].data.title}}</h2>
                    </mdb-card-title>
                    <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                      <div
                        class="card-date"
                      >{{$moment(+getPostForDom(0,rubricsData[0].id)[0].when).fromNow()}}</div>
                      <span
                        class="category cursor-pointer"
                        @click="$router.push(`/posts/`+rubricsData[0].id)"
                      >{{rubricsData[0].name}}</span>
                    </div>
                  </mdb-card-text>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col
              md="6"
              sm="12"
              class="mb-3"
              v-if="rubricsData && getPostForDom(1,rubricsData[0].id)"
            >
              <mdb-card class="h-100 z-depth-0">
                <mdb-card-image
                  :src="`data:image/*;base64,`+getPostForDom(1,rubricsData[0].id)[0].data.content"
                  alt="Card image cap"
                  class="cursor-pointer"
                  @click.native="$router.push(`/post/`+getPostForDom(1,rubricsData[0].id)[0].when)"
                ></mdb-card-image>
                <mdb-card-body class="gradiented-card">
                  <mdb-card-text class="card-content">
                    <mdb-card-title
                      class="card-title-small cursor-pointer"
                      @click.native="$router.push(`/post/`+getPostForDom(1,rubricsData[0].id)[0].when)"
                    >
                      <h2>{{getPostForDom(1,rubricsData[0].id)[0].data.title}}</h2>
                    </mdb-card-title>
                    <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                      <div
                        class="card-date"
                      >{{$moment(+getPostForDom(1,rubricsData[0].id)[0].when).fromNow()}}</div>
                      <span
                        class="category cursor-pointer"
                        @click="$router.push(`/posts/`+rubricsData[0].id)"
                      >{{rubricsData[0].name}}</span>
                    </div>
                  </mdb-card-text>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col v-else md="6" sm="12" class="mb-3 cursor-pointer">
              <a-skeleton avatar active />
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col md="6" sm="12" class="d-flex justify-content-center">
              <dtbtn
                @click.native="$router.push(`/posts/`+rubricsData[0].id)"
                :title="`Все публикации`"
                :gradiented="true"
              ></dtbtn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col v-else md="6" sm="12" class="mb-3 cursor-pointer">
          <a-skeleton avatar active />
        </mdb-col>
      </mdb-row>

      <!-- <mdb-card-text class="card-content">
              <div>
                <p class="p-0 m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                <div class="card-date">12 сентября</div>
                <span class="category">Teal</span>
              </div>
      </mdb-card-text>-->
    </div>

    <mdb-row class="mb-5">
      <mdb-col class="d-flex justify-content-center">
        <dtbtn @click.native="$router.push(`/rubrics`)" :gradiented="true" :title="`Все рубрики`"></dtbtn>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import dtbtn from "@/components/UI/dt-btn";

import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbCardGroup
} from "mdbvue";
import { log } from "util";
export default {
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbCardGroup,
    dtbtn
  },
  data() {
    return {
      // rubricsData: [],
      // postsData: []
    };
  },
  beforeMount() {
    // this.getRubrics();
    // this.getPosts();
  },
  computed: {
    postsData() {
      return this.$store.state.postsData;
    },
    rubricsData() {
      return this.$store.state.rubricsData;
    }
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
    }
    // getPosts() {
    //   let _this = this;
    //   firebase
    //     .database()
    //     .ref("Posts/")
    //     .once("value", snapshot => {
    //       const data = snapshot.val();
    //       for (const key in data) {
    //         if (data.hasOwnProperty(key)) {
    //           let post = data[key];
    //           post[0].when = key;
    //           this.postsData.push(post);
    //         }
    //       }
    //     });
    // },
    // getRubrics() {
    //   firebase
    //     .database()
    //     .ref("Rubrics/")
    //     .once("value", snapshot => {
    //       let data = snapshot.val();
    //       for (const key in data) {
    //         if (data.hasOwnProperty(key)) {
    //           let rubric = data[key];
    //           rubric.id = key;
    //           this.rubricsData.push(rubric);
    //         }
    //       }
    //     });
    // }
  }
};
</script>

<style lang="less" scoped>
.categories {
  .categories-wrapper {
    border-radius: 20px;
    background-color: #f2f2f2;
    padding: 1rem;
    .categories-title {
      color: #14b0bb;
      font-size: 36px;
      font-weight: 600;
      line-height: 44px;
    }
    p {
      font-weight: 500;
    }
  }

  @media screen and (max-width: 540px) {
    .categories-wrapper {
      .categories-title {
        font-size: 21px;
        font-weight: 600;
        line-height: 25px;
      }
      p {
        font-size: 21px;
        font-weight: 500;
        line-height: 25px;
      }
    }
  }
}
</style>
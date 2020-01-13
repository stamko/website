<template>
  <section class="categories-list mb-5">
    <mdbContainer>
      <div v-for="(rubric, index ) in rubricsData" :key="index" class="categories-wrapper mb-3">
        <mdb-row>
          <mdb-col md="6">
            <div v-if="rubricsData[index]">
              <h2 class="categories-title">{{rubricsData[index].name}}</h2>

              <p>{{rubricsData[index].description}}</p>
            </div>
            <div v-else>
              <a-skeleton avatar active />
            </div>
          </mdb-col>
          <mdb-col v-if="getPostForDom(0,rubricsData[index].id)" md="6" sm="12">
            <mdb-row>
              <mdb-col
                @click.native="$router.push(`/post/`+getPostForDom(0,rubricsData[index].id)[0].when)"
                md="6"
                sm="12"
                class="mb-3 cursor-pointer"
                v-if="rubricsData && getPostForDom(0,rubricsData[index].id)"
              >
                <mdb-card class="h-100 z-depth-0">
                  <!-- <mdb-card-image
                    :src="`data:image/*;base64,`+getPostForDom(0,rubricsData[index].id)[0].data.content"
                    alt="Card image cap"
                  ></mdb-card-image> -->
                  <mdb-card-body class="gradiented-card">
                    <mdb-card-text class="card-content">
                      <mdb-card-title class="card-title-small">
                        <h2>{{getPostForDom(0,rubricsData[index].id)[0].data.title}}</h2>
                      </mdb-card-title>
                      <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                        <div
                          class="card-date"
                        >{{$moment(+getPostForDom(0,rubricsData[index].id)[0].when).fromNow()}}</div>
                        <span class="category">{{rubricsData[index].name}}</span>
                      </div>
                    </mdb-card-text>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col v-else md="6" sm="12" class="mb-3 cursor-pointer">
                <a-skeleton avatar active />
              </mdb-col>
              <mdb-col
                @click.native="$router.push(`/post/`+getPostForDom(1,rubricsData[index].id)[0].when)"
                md="6"
                sm="12"
                class="mb-3 cursor-pointer"
                v-if="rubricsData && getPostForDom(1,rubricsData[index].id)"
              >
                <mdb-card class="h-100 z-depth-0">
                  <mdb-card-body class="white-card">
                    <mdb-card-text class="card-content">
                      <mdb-card-title class="card-title-small">
                        <h2>{{getPostForDom(1,rubricsData[index].id)[0].data.title}}</h2>
                      </mdb-card-title>
                      <div class="mb-1">
                        <div v-html="getPostForDom(1,rubricsData[index].id)[0].data.description"></div>
                      </div>
                      <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                        <div
                          class="card-date"
                        >{{$moment(+getPostForDom(1,rubricsData[index].id)[0].when).fromNow()}}</div>
                        <span class="category">{{rubricsData[index].name}}</span>
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
                <dtbtn  @click.native="$router.push(`/posts/`+rubricsData[index].id)" :title="`Все публикации`" :gradiented="true"></dtbtn>
              </mdb-col>
            </mdb-row>
          </mdb-col>
          <mdb-col class="d-flex align-items-center" v-else md="6" sm="12">
            <p>В данной рубрике пока нет материалов</p>
          </mdb-col>
        </mdb-row>
      </div>
    </mdbContainer>
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
  mdbCardGroup,
  mdbContainer
} from "mdbvue";

export default {
  components: {
    mdbRow,
    dtbtn,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbCardGroup,
    mdbContainer
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
  }
};
</script>

<style lang="less" scoped>
.categories-list {
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
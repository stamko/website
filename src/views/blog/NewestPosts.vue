<template>
  <section>
    <h2 class="text-center">Самые новые публикации</h2>
    <mdb-row class="d-flex justify-space-between mt-4 mb-5">
      <mdb-col class="mb-4" md="6" sm="12">
        <mdb-card
          v-if="postsData[postsData.length -1]"
          @click.native="$router.push(`/post/`+postsData[postsData.length -1][0].when)"
          class="h-100 cursor-pointer"
        >
          <!-- <mdb-card-image
            :src="`data:image/*;base64,`+postsData[postsData.length -1][0].data.content"
            alt="Card image cap"
          ></mdb-card-image> -->
          <mdb-card-body class="gradiented-card">
            <mdb-card-text class="card-content">
              <mdb-card-title class="card-title">
                <h2>{{postsData[postsData.length -1][0].data.title}}</h2>
              </mdb-card-title>
              <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                <div
                  class="card-date"
                >{{$moment(+postsData[postsData.length -1][0].when).fromNow()}}</div>
                <span
                @click="$router.push(`/`)"
                  class="category"
                >{{getRubricById(postsData[postsData.length -1][0].data.rubricId)}}</span>
              </div>
            </mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        <mdb-card class="h-100 z-depth-0 px-3" v-else>
          <a-skeleton class="my-5" avatar :paragraph="{rows: 15}" active />
        </mdb-card>
      </mdb-col>
      <mdb-col>
        <mdb-row class="mb-3">
          <mdb-col class="mb-4" md="6" sm="12">
            <!-- <mdb-card-group deck> -->
            <mdb-card
              v-if="postsData[postsData.length -2]"
              @click.native="$router.push(`/post/`+postsData[postsData.length -2][0].when)"
              class="h-100 z-depth-0 cursor-pointer"
            >
              <mdb-card-body class="grey-card">
                <mdb-card-text class="card-content">
                  <mdb-card-title class="card-title-small">
                    <h2>{{postsData[postsData.length -2][0].data.title}}</h2>
                  </mdb-card-title>
                  <div>
                    <p v-html="postsData[postsData.length -2][0].data.description" class="p-0 m-0 trim-text"></p>
                  </div>
                  <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                    <div
                      class="card-date"
                    >{{$moment(+postsData[postsData.length -2][0].when).fromNow()}}</div>
                    <span
                      class="category"
                    >{{getRubricById(postsData[postsData.length -2][0].data.rubricId)}}</span>
                  </div>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
            <mdb-card class="h-100 z-depth-0 px-3" v-else>
              <a-skeleton class="my-5" avatar :paragraph="{rows: 1}" active />
            </mdb-card>
          </mdb-col>
          <mdb-col class="mb-4" md="6" sm="12">
            <mdb-card
              v-if="postsData[postsData.length -3]"
              @click.native="$router.push(`/post/`+postsData[postsData.length -3][0].when)"
              class="h-100 z-depth-0 cursor-pointer"
            >
              <!-- <mdb-card-image
                :src="`data:image/*;base64,`+postsData[postsData.length -3][0].data.content"
                alt="Card image cap"
              ></mdb-card-image> -->
              <mdb-card-body class="gradiented-card">
                <mdb-card-text class="card-content">
                  <mdb-card-title class="card-title-small">
                    <h2>{{postsData[postsData.length -3][0].data.title}}</h2>
                  </mdb-card-title>
                  <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                    <div
                      class="card-date"
                    >{{$moment(+postsData[postsData.length -3][0].when).fromNow()}}</div>
                    <span
                      class="category"
                    >{{getRubricById(postsData[postsData.length -3][0].data.rubricId)}}</span>
                  </div>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
            <mdb-card class="h-100 z-depth-0 px-3" v-else>
              <a-skeleton class="my-5" avatar :paragraph="{rows: 1}" active />
            </mdb-card>
            <!-- </mdb-card-group> -->
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col class="mb-4" md="6" sm="12">
            <mdb-card
              v-if="postsData[postsData.length -4]"
              @click.native="$router.push(`/post/`+postsData[postsData.length -4][0].when)"
              class="h-100 z-depth-0 cursor-pointer"
            >
              <!-- <mdb-card-image
                :src="`data:image/*;base64,`+postsData[postsData.length -4][0].data.content"
                alt="Card image cap"
              ></mdb-card-image> -->
              <mdb-card-body class="gradiented-card">
                <mdb-card-text class="card-content">
                  <mdb-card-title class="card-title-small">
                    <h2>{{postsData[postsData.length -4][0].data.title}}</h2>
                  </mdb-card-title>
                  <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                    <div
                      class="card-date"
                    >{{$moment(+postsData[postsData.length -4][0].when).fromNow()}}</div>
                    <span
                      class="category"
                    >{{getRubricById(postsData[postsData.length -4][0].data.rubricId)}}</span>
                  </div>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
            <mdb-card class="h-100 z-depth-0 px-3" v-else>
              <a-skeleton class="my-5" avatar :paragraph="{rows: 1}" active />
            </mdb-card>
          </mdb-col>
          <mdb-col class="mb-4" md="6" sm="12">
            <mdb-card
              v-if="postsData[postsData.length -5]"
              @click.native="$router.push(`/post/`+postsData[postsData.length -5][0].when)"
              class="h-100 z-depth-0 cursor-pointer"
            >
              <mdb-card-body class="grey-card">
                <mdb-card-text class="card-content">
                  <mdb-card-title class="card-title-small">
                    <h2>{{postsData[postsData.length -5][0].data.title}}</h2>
                  </mdb-card-title>
                  <div>
                    <p v-html="postsData[postsData.length -5][0].data.description" class="p-0 m-0"></p>
                  </div>
                  <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                    <div
                      class="card-date"
                    >{{$moment(+postsData[postsData.length -5][0].when).fromNow()}}</div>
                    <span
                      class="category"
                    >{{getRubricById(postsData[postsData.length -5][0].data.rubricId)}}</span>
                  </div>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
            <mdb-card class="h-100 z-depth-0 px-3" v-else>
              <a-skeleton class="my-5" avatar :paragraph="{rows: 1}" active />
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import firebase from "firebase";

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
    mdbCardGroup
  },
  methods: {
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
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
<template>
  <section class="posts-by-rubric mb-5">
    <mdbContainer v-if="postsData">
      <mdb-row>
        <mdb-col
          v-for="(post, index) in getPostForDom(cid)"
          class="mb-4"
          :key="index"
          sm="12"
          md="6"
        >
          <mdb-card class="h-100 z-depth-0 cursor-pointer">
            <mdb-card-image
              v-if="post[0].data.content"
              :src="`data:image/*;base64,`+post[0].data.content"
              alt="Card image cap"
            ></mdb-card-image>
            <mdb-card-body class="gradiented-card">
              <mdb-card-text class="card-content">
                <mdb-card-title class="card-title-small">
                  <h2>{{post[0].data.title}}</h2>
                </mdb-card-title>
                <div class="d-flex flex-grow-1 align-items-end justify-content-between">
                  <div class="card-date">{{$moment(+post[0].when).fromNow()}}</div>
                  <!-- <span class="category">{{rubricsData[index].name}}</span> -->
                </div>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <div class="categories-wrapper mb-3"></div>
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
  props: {
    cid: {
      required: true
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
  methods: {
    getPostForDom(id) {
      let posts = [];
      for (let i = 0; i < this.postsData.length; i++) {
        const element = this.postsData[i][0];
        if (element.data.rubricId === id) {
          posts.push(this.postsData[i]);
        }
      }
      console.log(`posts`, posts);
      return posts;
    }
  }
};
</script>

<style>
</style>
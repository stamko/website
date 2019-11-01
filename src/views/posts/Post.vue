<template>
  <section class="post mb-5">
    <div v-if="postsData.length!==0">
      <div class="post-head">
        <mdbContainer>
          <h2>{{postsData[0].data.title}}</h2>
          <span>{{rubricData.name}}</span>
        </mdbContainer>
        <img :src="`data:image/*;base64,`+postsData[0].data.content" alt class="full-roll my-5" />
      </div>
      <mdbContainer>
        <mdb-row class="d-flex justify-content-center">
          <mdb-col md="8" lg="8">
            <div class="post-text" v-html="postsData[0].data.description"></div>
          </mdb-col>
        </mdb-row>
        <mdb-row
          class="d-flex justify-content-center"
          v-for="(post, index) in postsData"
          :key="index"
        >
          <mdb-col v-if="index !== 0" md="8" lg="8">
            <div v-if="post.type===`shortImg`" class="d-flex justify-content-center">
              <img :src="`data:image/*;base64,`+post.data.content" alt class="img-fluid" />
            </div>
            <div v-html="post.data.content" class="post-text" v-else-if="post.type===`text`"></div>
          </mdb-col>
        </mdb-row>
      </mdbContainer>
    </div>
    <mdbContainer v-else>
      <a-skeleton class="my-5" avatar size="large" :paragraph="{rows: 9}" active />
      <a-skeleton class="my-5" avatar size="large" :paragraph="{rows: 9}" active />
    </mdbContainer>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbBtn, mdbContainer } from "mdbvue";
import firebase from "firebase";
// 1569931953592
export default {
  props: {
    pid: {
      required: true,
      default: ""
    }
  },
  data() {
    return { postsData: [], rubricData: null };
  },
  beforeMount() {
    this.getPosts();
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
    // getPostForDom(index, id) {
    //   let posts = [];
    //   for (let i = 0; i < this.postsData.length; i++) {
    //     const element = this.postsData[i][0];
    //     if (element.data.rubricId === id) {
    //       posts.push(this.postsData[i]);
    //     }
    //   }
    //   console.log(`posts`, posts);
    //   return posts[posts.length - index - 1];
    // },
    getPosts() {
      let _this = this;
      firebase
        .database()
        .ref("Posts/" + this.pid)
        .once("value", snapshot => {
          this.postsData = snapshot.val();
        })
        .then(() => {
          this.getRubrics(this.postsData[0].data.rubricId);
        });
    },

    getRubrics(rid) {
      firebase
        .database()
        .ref("Rubrics/" + rid)
        .once("value", snapshot => {
          this.rubricData = snapshot.val();
        });
    }
  },
  components: {
    mdbRow,
    mdbCol,
    mdbContainer
  }
};
</script>

<style  lang="less">
.post {
  .post-head {
    h2 {
      font-size: 48px;
      font-weight: bold;
      line-height: 58px;
      margin-bottom: 1rem;
    }
    span {
      color: #bfbfbf;
      font-size: 14px;
      line-height: 18px;
      border-radius: 14px;
      background-color: #f2f2f2;
      padding: 5px 10px;
    }
  }
  .full-roll {
    width: 100vw;
    max-height: 350px;
    object-fit: cover;
  }
  .post-text {
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
    }
  }
}
</style>
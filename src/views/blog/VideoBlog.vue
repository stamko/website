<template>
  <div>
    <section class="video-blog my-5">
      <div class="video-wrapper p-3">
        <h2>Видео</h2>
        <mdb-row class="d-none d-sm-flex my-4 px-3">
          <mdb-col md="5" lg="5">
            <videoPlayer
              :title="videosData[0].title"
              :when="videosData[0].when"
              :description="videosData[0].description"
              :url="videosData[0].url"
              :previewImage="videosData[0].img"
            ></videoPlayer>
          </mdb-col>
          <mdb-col class="d-none d-md-block" sm="12" md="7">
            <div class="video-description">
              <h3>{{videosData[0].title}}</h3>
              <p>{{videosData[0].description}}</p>
            </div>
          </mdb-col>
        </mdb-row>
        <mdb-row class="px-3 mb-3">
          <mdb-col md="4" lg="3" col="12" sm="6" class="mb-3" v-for="i in countOfVideos" :key="i">
            <videoPlayer
              v-if="videosData[i]"
              :title="videosData[i].title"
              :when="videosData[i].when"
              :description="videosData[i].description"
              :url="videosData[i].url"
              :previewImage="videosData[i].img"
            ></videoPlayer>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col class="d-flex justify-content-center">
            <mdb-btn @click="$router.push(`/videos`)" class="dt-rounded-btn">Все видео</mdb-btn>
          </mdb-col>
        </mdb-row>
      </div>
    </section>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn
} from "mdbvue";
import videoPlayer from "../../components/VideoPlayer.vue";
export default {
  data() {
    return {
      swiped: true,
      window: {
        width: 0,
        height: 0
      }
    };
  },
  computed: {
    videosData() {
      return this.$store.state.videosData;
    },
    countOfVideos() {
      if (this.window.width <= 540) {
        return 2;
      } else if (this.window.width >= 540 && this.window.width <= 768) {
        return 2;
      } else if (this.window.width >= 768 && this.window.width <= 992) {
        return 3;
      } else return 4;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    videoPlayer
  }
};
</script>

<style lang="less" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.75);
}
.video-blog {
  .video-wrapper {
    border-radius: 10px;
    background: linear-gradient(135deg, #1b3b59 0%, #000000 99.92%);

    > h2 {
      color: #dae3eb;
      font-size: 48px;
      font-weight: 600;
      line-height: 58px;
      text-align: center;
    }

    .video-description {
      h3 {
        font-size: 36px;
        font-weight: 600;
        line-height: 44px;
        color: #dae3eb;
      }
      p {
        color: #dae3eb;
        font-size: 21px;
        font-weight: 500;
        line-height: 34px;
      }
    }
    .video-player-wrapper {
      border-radius: 10px;
      background-color: white;
      transition-duration: 0.5s;
      h4 {
        padding: 10px 10px 0 10px;
        color: #1b3b59;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        margin: 0;
      }
      .video-date {
        color: #bfbfbf;
        font-size: 14px;
        line-height: 18px;
        padding: 0 10px;
        margin: 0 0 10px 0;
      }
    }
    .video-player-wrapper:hover {
      box-shadow: 0 0 15px 0 rgba(20, 176, 187, 0.5) !important;
      transition-duration: 0.5s;
    }
  }

  @media screen and (max-width: 992px) {
    .video-wrapper {
      background: linear-gradient(157.11deg, #16ccd9 0.08%, #563dbf 100%);
    }
  }

  @media screen and (max-width: 540px) {
    .video-wrapper {
      border-radius: 0;
      margin: 0 -15px;
      > h2 {
        color: white;
        font-size: 24px;
        font-weight: 600;
        line-height: 29px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
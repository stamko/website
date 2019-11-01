<template>
  <div>
    <mdbContainer>
      <mdb-row>
        <mdb-col class="mb-3" md="6" sm="12" v-for="video in videosData" :key="video.when">
          <div @click="curentUrl = video.url; showModal = true" class="video-card">
            <div class="play-overlay"></div>
            <div class="img-overlay"></div>

            <img
              class="img-fluid"
              :src="`data:image/*;base64,`+video.img"
              alt="Блог видео DreamTeam"
            />
            <div class="video-card-data-wrapper">
              <div class="video-card-data">
                <h2 class="text-white">{{video.title}}</h2>
                <p>{{$moment(+video.when).fromNow()}}</p>
              </div>
            </div>
          </div>
        </mdb-col>
      </mdb-row>
    </mdbContainer>
    <mdb-modal centered size="lg" :show.sync="showModal" @close="showModal = false">
      <iframe
        class="embed-responsive-item"
        height="500"
        :src="curentUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </mdb-modal>
  </div>
</template>


<script>
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbContainer
} from "mdbvue";

export default {
  data() {
    return {
      showModal: false,
      curentUrl: null
    };
  },
  components: {
    mdbRow,
    mdbCol,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbContainer,
    mdbBtn
  },
  computed: {
    videosData() {
      return this.$store.state.videosData;
    }
  }
};
</script>

<style lang="less" scoped>
.video-card {
  z-index: 1;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25), 0 1px 5px 0 rgba(0, 0, 0, 0.15);

  .play-overlay {
    position: absolute;
    opacity: 1;
    height: 100%;
    width: 100%;
    background: url(../../assets/videoplayer.png) no-repeat 50% 50%;
    background-size: 15%;
    transition-duration: 0.5s;
    transition: 500ms all;
    z-index: 5;
  }

  img {
    border-radius: 10px;
    z-index: 2;
    position: relative;
    -webkit-filter: blur(0px);
    filter: blur(0px);
    transition: 1s all;
  }
  .img-overlay {
    position: absolute;
    border-radius: 10px;
    background-color: transparent;
    z-index: 5;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    transition: 1s all;
  }
  .video-card-data-wrapper {
    background: transparent !important;
    padding: 0 2rem;
  }
  .video-card-data {
    position: absolute;
    opacity: 0;
    bottom: -10rem;
    transition: 500ms all;
    padding: 1.5rem 1rem;
    background-color: rgba(20, 176, 187, 0.5);
    border-radius: 10px;
    z-index: 6;

    .h2 {
      color: #ffffff;
      font-size: 24px;
      font-weight: 600;
      line-height: 24px;
    }

    p {
      color: #ffffff;
      font-size: 18px;
      line-height: 22px;
    }
  }
}
.video-card:hover {
  .play-overlay {
    opacity: 0;
    transition: 500ms all;
  }
  img {
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }
  .img-overlay {
    position: absolute;
    background-color: #00000011;

    transition: 1s all;
  }
  .video-card-data {
    bottom: 1rem;
    transition: 500ms all;
    opacity: 1;
  }
}
</style>
<template>
  <div>
    <div>
      <div class="video-player-wrapper">
        <div @click="showModal = true" class="video-player d-flex justify-content-center">
          <div class="video-btn"></div>
          <img
            class="img-fluid"
            :src="`data:image/*;base64,`+previewImage"
            alt="Блог видео DreamTeam"
          />
        </div>
        <h4>{{title}}</h4>
        <span class="video-date">{{$moment(+when).fromNow()}}</span>
      </div>

      <mdb-modal centered size="lg" :show="showModal" @close="showModal = false">
        <iframe
          class="embed-responsive-item"
          height="500"
          :src="url"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </mdb-modal>
    </div>
  </div>
</template>

<script>
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtn
} from "mdbvue";
export default {
  props: {
    url: {
      default: null,
      required: true
    },
    previewImage: {
      default: null,
      required: true
    },
    title: {
      default: null,
      required: true
    },
    description: {
      default: null,
      required: true
    },
    when: {
      default: null,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn
  }
};
</script>

<style lang="less" scoped>
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

.video-player {
  border-radius: 10px;
  border: 1px solid white;
  img {
    border-radius: 10px;
  }
  .video-btn {
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(./../assets/videoplayer.png) no-repeat 50% 50%;
    background-size: 15%;
    transition-duration: 0.5s;
  }
  .video-btn:hover {
    transform: scale(1.1);
    transition-duration: 1.5s;
  }
}
</style>
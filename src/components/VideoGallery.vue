<template>
  <div>
    <transition name="ma" mode="out-in">
      <div v-show="currentSlide==1" key="group">
        <video class="video-fluid" src="@/assets/vids/group.mp4" autoplay muted></video>
      </div>
      <div v-show="currentSlide==2" key="invite">
        <video class="video-fluid" src="@/assets/vids/invite.mp4" autoplay muted></video>
      </div>
      <div v-show="currentSlide==3" key="vote">
        <video class="video-fluid" src="@/assets/vids/voting.mp4" autoplay muted></video>
      </div>
      <div v-show="currentSlide==4" key="rate">
        <video class="video-fluid" src="@/assets/vids/rate.mp4" autoplay muted></video>
      </div>
      <div v-show="currentSlide==5" key="result">
        <video class="video-fluid" src="@/assets/vids/result.mp4" autoplay muted></video>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    currentSlide: {
      default: 1
    }
  }
};
</script>

<style>
.ma-enter {
  opacity: 0;
}
.ma-enter-active {
  transition: all 3s;
}
.ma-enter-to {
}
.ma-leave {
}
.ma-leave-active {
  transition: all 3s;
}
.ma-leave-to {
  opacity: 0;
}
@keyframes ma-slide {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(150px);
  }
}
</style>
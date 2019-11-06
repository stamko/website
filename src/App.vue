<template>
  <div id="app">
    <navbar />
    <router-view class="animated fadeIn"></router-view>
    <dtFooter />
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import dtFooter from "@/components/DtFooter";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    dtFooter,
    navbar
  },
  created() {
    this.$moment.locale(`ru`);
  },
  methods: {
    // Получение поста последней минус index записи блога из первого блока (main) текста по айди категории
    getNavWidth() {
      const size1 = document.getElementById("navbar").offsetHeight;
      const size2 = document.getElementById("app").offsetHeight;
      const size3 = size2 - size1;
      console.log("TUTA" + size3);
      return size3;
    },
    clearBlog() {
      this.$store.dispatch(`clearRubrics`);
      this.$store.dispatch(`clearPosts`);
      this.$store.dispatch(`clearVideos`);
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    getPosts() {
      let _this = this;
      firebase
        .database()
        .ref("Posts/")
        .once("value", snapshot => {
          const data = snapshot.val();
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              let post = data[key];
              post[0].when = key;
              this.$store.dispatch(`setPosts`, post);
            }
          }
        });
    },
    getVideos() {
      let _this = this;
      firebase
        .database()
        .ref("Videos/")
        .once("value", snapshot => {
          const data = snapshot.val();
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              let post = data[key];
              post.when = key;
              this.$store.dispatch(`setVideos`, post);
            }
          }
        });
    },
    getRubrics() {
      firebase
        .database()
        .ref("Rubrics/")
        .once("value", snapshot => {
          let data = snapshot.val();
          console.log(`Рубрика получен`, data);
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              let rubric = data[key];
              rubric.id = key;
              this.$store.dispatch(`setRubrics`, rubric);
            }
          }
        });
    }
  },
  beforeMount() {
    this.clearBlog();
    this.getRubrics();
    this.getPosts();
    this.getVideos();
  },
  mounted() {
    this.getNavWidth();
  }
};
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css?family=Montserrat:100,400,500,600,700,800,900&display=swap&subset=cyrillic");
* {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}

// body {
//   overflow: hidden;
// }
// ШРИФТЫ
h1 {
  font-size: 60px;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 900 !important;
  color: #1b3b59 !important;
}
h4 {
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
}

h2 {
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
}

.trim-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
// КНОПКИ
.dt-rounded-btn {
  border-radius: 25px;
  font-weight: 500;
  background-color: #ffffff !important;
  color: #1b3b59;
  transition-duration: 0.2s;
}
.dt-rounded-btn:hover {
  color: white;
  background-color: #14b0bb !important;
  transition-duration: 0.2s;
}

.cursor-pointer {
  cursor: pointer !important;
}
.card-blur {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition-duration: 1.5s;
  .card-body {
    padding: 10px;
  }

  .card-title {
    margin: 0 0 10px 0;
  }
  .card-title-small {
    margin: 0 0 10px 0;
  }
  img {
    border-radius: 10px 10px 0 0;
  }
}

.card-blur:hover {
  box-shadow: 0 0 15px 0 rgba(20, 176, 187, 0.5) !important;
  transition-duration: 0.5s;
  .card-body {
    padding: 10px;
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }

  .card-title {
    margin: 0 0 10px 0;
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }
  .card-title-small {
    margin: 0 0 10px 0;
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }
  img {
    border-radius: 10px 10px 0 0;
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }
}

.card {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition-duration: 1.5s;
  .card-body {
    padding: 10px;
  }

  .card-title {
    margin: 0 0 10px 0;
  }
  .card-title-small {
    margin: 0 0 10px 0;
  }
  img {
    border-radius: 10px 10px 0 0;
  }
}
.card:hover {
  box-shadow: 0 0 15px 0 rgba(20, 176, 187, 0.5) !important;
  transition-duration: 0.5s;
}

.gradiented-card {
  border-radius: 0 0 10px 10px;
  .card-title {
    h2 {
      margin: 0;
      color: #ffffff;
      font-size: 36px;
      font-weight: 600;
      line-height: 44px;
    }
  }

  .card-date {
    color: #ffffff;
    font-size: 14px;
    line-height: 18px;
  }
  background: linear-gradient(
    315deg,
    #6c68c5 0%,
    #3e7cd2 19.98%,
    #008cd5 39.97%,
    #009ad1 59.95%,
    #00a6c7 79.93%,
    #14b0bb 99.92%
  );
  .card-content {
    height: 100%;
    display: flex;
    flex-direction: column;

    span.category {
      border-radius: 15px;
      background-color: #ffffff;
      padding: 0 10px 1px 10px;
      color: #1b3b59;
      font-weight: 500;
    }
    p {
      color: white;
    }

    .card-title-small {
      h2 {
        margin: 0;
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
      }
    }
  }
}

.grey-card {
  border-radius: 10px;
  background-color: #f2f2f2;
  .card-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    p {
      color: #1b3b59;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }

    span.category {
      border-radius: 15px;
      background-color: #ffffff;
      padding: 0 10px 1px 10px;
      color: #bfbfbf;
      font-weight: 500;
    }

    .card-title-small {
      h2 {
        color: #14b0bb;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
      }
    }
  }

  .card-title {
    color: #14b0bb;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
  }

  .card-date {
    color: #bfbfbf;
    font-size: 14px;
    line-height: 18px;
  }
}

.white-card {
  border-radius: 10px;
  background-color: white;
  .card-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    p {
      color: #1b3b59;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }

    span.category {
      border-radius: 15px;
      background-color: #f2f2f2;
      padding: 0 10px 1px 10px;
      color: #1b3b59;
      font-weight: 500;
    }

    .card-title-small {
      h2 {
        color: #14b0bb;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
      }
    }
  }

  .card-title {
    color: #14b0bb;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
  }

  .card-date {
    color: #bfbfbf;
    font-size: 14px;
    line-height: 18px;
  }
}

.gradiented {
  color: white;
  background: linear-gradient(157.11deg, #16ccd9 0.08%, #563dbf 100%);
}
.gradiented-dark {
  background: linear-gradient(135deg, #1b3b59 0%, #000000 100%);
  color: white !important;
}
.gradient-purple {
  color: white;
  background: linear-gradient(315deg, #ac35cd 0%, #625dd7 51.54%, #1ccedb 100%);
}

.font-weight-400 {
  font-weight: 400 !important;
}
.font-weight-500 {
  font-weight: 500 !important;
}

.font-weight-600 {
  font-weight: 600 !important;
}

.font-weight-700 {
  font-weight: 700 !important;
}
.font-weight-800 {
  font-weight: 800 !important;
}
.horizontal-scroll-wrapper {
  // position: absolute;
  // display: -webkit-box;
  // display: -webkit-flex;
  // display: -ms-flexbox;
  // -webkit-box-orient: horizontal;
  // -webkit-box-direction: reverse;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 100vh;
  width: 300vw;
}
.horizontal-scroll-container{
  height: 90%;
}

@media screen and (max-width: 540px) {
  section {
    > h2 {
      color: #1b3b59;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      text-align: center;
      margin-bottom: 10px;
    }
  }

  .gradiented-card {
    .card-title {
      h2 {
        font-size: 15px;
        line-height: 19px;
      }
    }

    .card-content {
      p {
        font-weight: 500;
      }

      .card-title-small {
        h2 {
          font-size: 15px;
          line-height: 19px;
          font-weight: 600;
        }
      }
    }
  }

  .grey-card {
    .card-content {
      .card-title-small {
        h2 {
          font-size: 15px;
          line-height: 19px;
          font-weight: 600;
        }
      }
    }

    .card-title {
      color: #14b0bb;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
    }
  }

  .white-card {
    .card-content {
      .card-title-small {
        h2 {
          font-size: 15px;
          font-weight: 600;
          line-height: 19px;
        }
      }
    }
  }
}
</style>

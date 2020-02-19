<template>
  <div>
    <div id="scrollTriggernav"></div>
    <div class="doc-page pb-5" ref="content">
      <div class="container">
        <div class="row mb-3">
          <div class="col">
            <dtBtn
              v-if="screenType === `md` && hidden"
              @click.native="hiddenSwitch()"
              :gradiented="true"
              class="animated fadeIn"
              icon="bars"
              :iconPosition="'end'"
              title="показать содержание"
            ></dtBtn>
            <dtBtn
              v-if="screenType === `md` && !hidden"
              @click.native="hiddenSwitch()"
              :gradiented="true"
              title="скрыть содержание"
              class="animated fadeIn"
              icon="times"
              :iconPosition="'end'"
            ></dtBtn>
          </div>
        </div>
        <div class="row mb-5">
          <div v-if="screenType === `md` && !hidden" class="col-md-3">
            <div class="doc-nav mb-3" id="doc-nav">
              <div class="doc-nav-title">Все статьи</div>
              <ul>
                <li
                  @click="$router.push(`/docs/`+index).catch(err => {})"
                  v-for="(doc, index) in docs"
                  :key="index"
                >
                  <div class="d-flex align-items-center">
                    <a v-b-toggle="'collapse-'+index" class="text-primary p-2">
                      <font-awesome-icon
                        :icon="['fas', +did===+index? show ?`chevron-up`: `chevron-down`:`chevron-down`]"
                      />
                    </a>
                    <div>
                      <a v-b-toggle="'collapse-'+index" variant="primary">{{doc[0].content}}</a>

                      <b-collapse
                        @hidden="updateScene"
                        @hide="show = false"
                        accordion="doc-nav"
                        @show="show = true"
                        @shown="updateScene"
                        :visible="+did===+index"
                        :id="`collapse-`+index"
                      >
                        <div class="d-flex flex-column">
                          <div
                            class="sub-items"
                            v-for="(docContent, docIndex) in doc.filter((doc) => doc.type===`subtitle` || doc.type===`title` || doc.type===`description` || doc.type===`img`)"
                            :key="docIndex"
                          >
                            <a
                              class="cursor-pointer"
                              v-if="docContent.type===`title`"
                              :href="`#doc-`+docIndex"
                              @click="scrollIntoView"
                            >{{docContent.content}}</a>
                            <a
                              class="cursor-pointer"
                              v-else
                              :href="`#doc-`+docIndex"
                              @click="scrollIntoView"
                            >{{docContent.subTitle}}</a>
                          </div>
                        </div>
                      </b-collapse>
                    </div>
                  </div>
                  <!-- <mdb-collapse
                  :toggleTag="['a']"
                  :togglers="1"
                  :toggleClass="[collapseClass(index)]"
                  :toggleText="[doc.title.content, doc.title.content]"
                >
                  <div class="d-flex flex-column">
                    <div v-for="(docContent, docIndex) in filteredDoc(doc)" :key="docIndex">
                      <p
                        class="cursor-pointer pl-0 m-0"
                        v-if="docIndex===`title`"
                        @click="$scrollTo(doc)"
                      >Начало</p>
                      <p
                        class="cursor-pointer pl-0 m-0"
                        v-else
                        @click="$scrollTo(doc)"
                      >{{docContent.subTitle}}</p>
                    </div>
                  </div>
                  </mdb-collapse>-->
                </li>
              </ul>
            </div>
          </div>
          <div class="col doc-content">
            <div id="nav-scroller">
              <div v-for="(doc,index) in docs[did]" :key="index">
                <h2 :id="`doc-`+index" v-if="doc.type===`title`">{{doc.content}}</h2>
                <h3 :id="`doc-`+index" v-if="doc.type===`description`">{{doc.subTitle}}</h3>
                <p v-if="doc.type===`description`">{{doc.content}}</p>
                <img
                  v-else-if="doc.type===`img`"
                  :src="`${publicPath}` + doc.content"
                  alt
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dtBtn from "@/components/UI/dt-btn.vue";

import { ScrollToPlugin, TweenMax, TimelineMax } from "gsap";
// import { BCollapse, BButton, BCard, CollapsePlugin } from "bootstrap-vue";
import { mdbCollapse } from "mdbvue";
export default {
  props: {
    did: { required: true }
  },
  navDuration: 1,
  computed: {
    docs() {
      return this.$store.getters.docs;
    },
    screenType() {
      if (this.window.width <= 540) {
        return `sm`;
      } else {
        return `md`;
      }
    }
  },
  data() {
    return {
      navScene: null,
      hidden: true,
      show: true,
      window: {
        width: 0,
        height: 0
      },
      publicPath: process.env.BASE_URL
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    hiddenSwitch() {
      this.hidden = !this.hidden;
    },
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        // this.$refs.content.scrollTop = el.offsetTop;
        window.scrollTo({
          top: el.offsetTop,
          left: 100,
          behavior: "smooth"
        });
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    collapseClass(index) {
      return +this.did === +index ? `font-weight-600 show` : `font-weight-600`;
    },
    computeNavDuration() {
      const footer = document.getElementById(`nav-scroller`).offsetHeight;
      const nav = document.getElementById(`doc-nav`).offsetHeight;
      this.navDuration = footer - nav;
    },
    updateScene(bool) {
      //   if (!bool) {
      //     this.show = false;
      //   } else this.show = true;
      if (this.navScene) {
        this.navScene.destroy(true);
      }
      this.computeNavDuration();

      this.navScene = this.$scrollmagic
        .scene({
          triggerElement: "#scrollTriggernav",
          duration: this.navDuration,
          offset: 500
        })
        .setPin("#doc-nav", { pushFollowers: true });

      this.$scrollmagic.addScene(this.navScene);
    }
  },
  mounted() {
    // let filtered = this.docs[this.did].filter(
    //   doc =>
    //     doc.type === `subtitle` ||
    //     doc.type === `title` ||
    //     doc.type === `description`
    // );
    // for (let i = 0; i < filtered.length; i++) {
    //   const element = filtered[i];
    //   this.arrays[i] = false;
    // }
    if (this.screenType === `md`) {
      this.computeNavDuration();
      this.navScene = this.$scrollmagic
        .scene({
          triggerElement: "#scrollTriggernav",
          duration: this.navDuration,
          offset: 500
        })
        .setPin("#doc-nav", { pushFollowers: true });
      this.$scrollmagic.addScene(this.navScene);
    }
  },
  components: {
    // BCollapse,
    // BButton,
    // BCard
    dtBtn
  }
};
</script>

<style  lang="less">
.doc-page {
  //   .doc-wrapper {
  //     position: fixed;
  //   }

  .hidden-nav {
    transform: rotate(-90deg);
  }
  .doc-nav {
    border-radius: 10px;
    background-color: #f2f2f2;
    padding: 0.7rem;
    .doc-nav-title {
      color: #1b3b59;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 0.5rem;
      line-height: 29px;
    }
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      background-color: white;
      padding: 0.3rem 0.5rem;
      margin-bottom: 0.25rem;
      .sub-items a {
        color: #1b3b59;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        font-weight: 400;
      }
      .sub-items a:hover {
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
        //   text-decoration-style: unset;
      }
      a {
        color: #1b3b59;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
      }
    }
  }
  .doc-content {
    text-align: center;

    h3 {
      text-align: left;

      font-weight: 400;
      padding: 1rem 0;
    }
    p {
      text-align: left;
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
      color: #1b3b59;
    }
  }
}
</style>
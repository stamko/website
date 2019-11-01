<template>
  <div class="docs">
    <section class="mb-5">
      <h2 class="text-center mb-4">Руководство пользователя</h2>
      <div class="container">
        <div class="row">
          <div v-for="(doc, index) in docs" :key="index" class="col-sm-6 col-md-3 p-3">
            <div @click="$router.push(`/docs/`+index)" class="card">
              <div class="card-title pt-2 px-2">
                <span>
                  <font-awesome-icon color="white" icon="bars" />
                </span>
                <h3>{{doc[0].content}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card grey-card">
              <div class="card-title py-3 text-center">
                <h3>Связь с техподдержкой</h3>
              </div>

              <div class="contacts p-3">
                <div class="contact-variant">
                  <span>
                    <font-awesome-icon icon="bars" />
                  </span>

                  <h3>Техподдержка по электронной почте</h3>
                  <p>support@dreamteam.bz</p>
                  <dtBtn :bgColor="`gradiented`" title="Написать"></dtBtn>
                </div>
                <div class="contact-variant">
                  <span>
                    <font-awesome-icon icon="bars" />
                  </span>
                  <h3>Чат с техподдержкой</h3>
                  <div class="contact-variant-chat w-100">
                    <font-awesome-icon class="mb-3" size="2x" :icon="['fab', 'vk']" />
                    <font-awesome-icon class="mb-3" size="2x" :icon="['fab', 'facebook-f']" />

                    <dtBtn class="mb-3" :bgColor="`grey`" title="Чат на сайте"></dtBtn>
                  </div>
                </div>

                <div class="contact-variant">
                  <span>
                    <font-awesome-icon icon="bars" />
                  </span>
                  <h3>Техподдержка по телефону</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dtBtn from "@/components/UI/dt-btn.vue";
export default {
  components: { dtBtn },
  computed: {
    docs() {
      return this.$store.getters.docs;
    }
  }
};
</script>

<style scoped lang="less">
.docs {
  .card {
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    box-shadow: unset;
  }
  .card-title {
    h3 {
      font-size: 21px;
      font-weight: 600;
      line-height: 25px;
      padding-top: 0.5rem;
    }
    span {
      font-size: 2rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      width: 4.5rem;
      background: linear-gradient(
        315deg,
        #6c68c5 0%,
        #3e7cd2 19.98%,
        #008cd5 39.97%,
        #009ad1 59.95%,
        #00a6c7 79.93%,
        #14b0bb 99.92%
      );
    }
  }

  .grey-card {
    cursor: unset;
    h3 {
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
    }

    .contacts {
      display: flex;
      span {
        border-radius: 50%;
        margin-bottom: 1rem;
        width: 85px;
        height: 85px;
        font-size: 36px;
        color: #6c7580;
        background-color: #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      justify-content: center;
      .contact-variant:first-child {
        border: unset;
        border-right: 2px solid #979797;
      }

      .contact-variant:last-child {
        border: unset;
        border-left: 2px solid #979797;
      }
      .contact-variant {
        width: 33%;

        padding: 1rem;
        h3 {
          color: #14b0bb;
          font-size: 21px;
          font-weight: 700;
          line-height: 25px;
        }
      }
    }
  }
  .grey-card:hover {
    box-shadow: unset;
  }

  .contact-variant-chat {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 0;
  }
  @media screen and (max-width: 540px) {
    .contacts {
      align-items: center;
      flex-direction: column;
      .contact-variant {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80% !important;
      }
      .contact-variant:first-child {
        border: unset !important;
        border-bottom: 2px solid #979797 !important;
      }

      .contact-variant:last-child {
        border: unset !important;
        border-top: 2px solid #979797 !important;
      }
      .contact-variant-chat {
        justify-content: space-between !important;
      }
    }
  }
}
</style>
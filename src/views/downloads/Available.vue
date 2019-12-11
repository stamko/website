<template>
  <div>
    <mdbContainer class="my-5">
      <mdb-row>
        <mdb-col class="align-self-center">
          <mdb-row>
            <mdb-col col="10">
              <h2>
                DreamTeam
                <br />у вас в кармане
              </h2>
            </mdb-col>
            <mdb-col class="d-flex col-8">
              <p>Скачайте наше приложение и общайтесь с командой в любой момент</p>
            </mdb-col>
            <mdb-row>
              <mdb-col class="d-flex m-2" col="4" md="4">
                <img src="@/assets/googlePlay.png" alt class="img-fluid" />
              </mdb-col>
              <mdb-col class="d-flex m-2" col="4" md="4">
                <img src="@/assets/appStore.png" style="opacity:50%" alt class="img-fluid" />
              </mdb-col>
            </mdb-row>
          </mdb-row>
        </mdb-col>
        <mdb-col sm="4">
          <img class="img-fluid" src="@/assets/phones.png" alt="phones" />
        </mdb-col>
      </mdb-row>
    </mdbContainer>
  </div>
</template>

<script>
import dtbtn from "@/components/UI/dt-btn";
import {
  mdbRow,
  mdbCol,
  mdbContainer,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbMask,
  mdbView,
  mdbInput
} from "mdbvue";

export default {
  components: {
    mdbRow,
    mdbCol,
    mdbContainer,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbMask,
    mdbView,
    dtbtn,
    mdbInput
  }
};
</script>

<style scoped lang="less">
h2 {
  font-size: 48px;
  color: #1b3b59;
  letter-spacing: -1px;
  line-height: 48px;
}
img {
  max-width: 100%;
  flex-shrink: 0 !important;
  align-self: flex-start;
}
@media screen and (max-width: 540px) {
  h2 {
    color: #1b3b59;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 800;
  }

}
</style>
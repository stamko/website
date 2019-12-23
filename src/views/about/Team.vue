<template>
  <div>
    <h2>Команда</h2>
    <mdb-row class="my-5">
      <mdb-col class="d-flex justify-content-around">
        <div class="team-card">
          <img src="@/assets/anton.jpg" alt class="img-fluid round-img" />
          <p class="header">Антон</p>
          <p class="subheader">DreamTeam CTO</p>
        </div>
        <div class="team-card">
          <img src="@/assets/anton.jpg" alt class="img-fluid round-img" />
          <p class="header">Антон</p>
          <p class="subheader">DreamTeam CTO</p>
        </div>
        <div class="team-card">
          <img src="@/assets/anton.jpg" alt class="img-fluid round-img" />
          <p class="header">Антон</p>
          <p class="subheader">DreamTeam CTO</p>
        </div>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import { mdbRow, mdbCol, mdbContainer } from "mdbvue";
export default {
  components: {
    mdbRow,
    mdbCol,
    mdbContainer
  }
};
</script>

<style lang="less" scoped>
h2 {
  text-align: center;
  font-size: 48px;
  color: #1b3b59;
  text-align: center;
  font-weight: 700;
}
.team-card {
  width: 200px;
  justify-content: center;
  .header {
    font-size: 36px;
    color: #1b3b59;
    text-align: center;
    font-weight: 600;
  }
  .subheader {
    font-size: 21px;
    color: #bfbfbf;
    text-align: center;
  }
  .round-img {
    border-radius: 50%;
  }
}
</style>
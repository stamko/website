<template>
  <section class="feedback pt-5 mb-5">
    <mdb-row>
      <mdb-col md="6" sm="12" class="text-center">
        <img src="../../assets/anonim.jpg" alt="..." height="82" class="mb-4 rounded-circle" />
        <p>Текст отзыва от компании или человека, пользующегося нашим продуктом</p>
      </mdb-col>
      <mdb-col md="6" sm="12" class="text-center">
        <img src="../../assets/anonim.jpg" alt="..." height="82" class="mb-4 rounded-circle" />
        <p>Текст отзыва от компании или человека, пользующегося нашим продуктом</p>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow, mdbCol } from "mdbvue";
export default {
  components: {
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
img {
  border: 1px solid #14b0bb;
}
p {
  color: #1b3b59;
  font-size: 24px;
  line-height: 29px;
}
</style>
<template>
  <div>
    <mdbContainer>
      <costs></costs>
      <feedbacks></feedbacks>
      <faq></faq>
    </mdbContainer>
  </div>
</template>

<script>
import { mdbContainer } from "mdbvue";
import costs from "./Costs";
import feedbacks from "./FeedBacks";
import faq from "./Faq";
export default {
  components: {
    costs,
    feedbacks,
    faq,
    mdbContainer
  }
};
</script>

<style>
</style>
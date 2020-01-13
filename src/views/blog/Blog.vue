<template>
  <mdbContainer>
    <NewestPosts></NewestPosts>
    <Categories></Categories>
    <!-- <VideoBlog></VideoBlog> -->
  </mdbContainer>
</template>

<script>
import NewestPosts from "./NewestPosts";
import Categories from "./Categories";
import VideoBlog from "./VideoBlog";
import firebase from "firebase";
import { mdbContainer } from "mdbvue";
export default {
  components: {
    NewestPosts,
    Categories,
    mdbContainer,
    VideoBlog
  },
};
</script>

<style lang="less" scoped>
</style>
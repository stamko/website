<template>
<div>
  <Available />
  <Advantages />
  </div>
</template>

<script>
import Available from "./Available";
import Advantages from "./Advantages";
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
    mdbInput,
    Available,
    Advantages
  }
};
</script>

<style scoped lang="less">
body{
  overflow: hidden;
}
</style>
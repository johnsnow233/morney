<template>
  <div>
    <router-view />
  </div>
</template>
 <script lang="ts">
export default {};
</script>
<style lang="scss">
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/helper.scss';

body{
  line-height: 1.5;
  font-family: $font-hei;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background:#f5f5f5;
}


</style>

<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
    </div>
    <Nav />
  </div>
</template>

<script lang='ts'>
export default {
    name:'Layout',
    props:['classPrefix']
};
</script>

<style lang="scss" scoped>
.layout-wrapper{
        border: 1px green solid;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow: 1;
        overflow:auto;
    }
</style>
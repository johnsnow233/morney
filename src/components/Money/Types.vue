<template>
    <div>
      <ol class="types">
        <li :class="type==='-' && 'selected'" @click="selectType('-')">支出</li>
        <li :class="type==='+' && 'selected'" @click="selectType('+')">收入</li>
      </ol>
    </div>
</template>

<script>
    export default {
        data() {
          return{
            type:'-'
          }
        },
        methods: {
          selectType(type){
            if(type !== '-' && type !== '+'){
            throw new errro('type is unknown')
          }
            this.type = type
          }
        }
    }
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.types{
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  li{
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
      &.selected::after{
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;

    }
  }
}
</style>
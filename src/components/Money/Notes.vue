<template>
    <div>
      <label class="notes">
        <span class="name">{{fieldName}}</span>
        <input type="text" 
                :value="value"
                @input="onValueChanged($event.target.value)"
                :placeholder="this.placeholder" />
      </label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component,Prop, Watch} from 'vue-property-decorator'

@Component
export default class Types extends Vue{
  @Prop({default:''}) readonly value!:string
  @Prop({required:true}) fieldName!: string
  @Prop() placeholder?:string
  
  
  @Watch('value')
  onValueChanged(value:string){
    this.$emit('update:value', value)
  }
}
  
</script>


<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.notes{
  font-size: 14px;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name{
    padding-right: 16px;
  }
  input{
    height: 64px;
    flex-grow: 1;
    background:transparent;
    border:none;

  }
}
</style>
<template>
  <Layout class-prefix='layout'>
    {{record}}
    <Number-Pad :value.sync='record.amount' @submit="saveRecordItem"/>
    <Types :value.sync="record.type" />
    <Notes fieldName="备注" placeholder="请输入备注" @update:value='onUpdataNotes'/>
    <Tags :data-source.sync="tags" @update:value='onUpdataTags'/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import { Component, Watch } from 'vue-property-decorator';
import store from '@/store/index2';






@Component({
   components: { NumberPad, Types, Notes ,Tags}
})
export default class Money extends Vue {
   tags = store.tagList
   recordList = store.recordList
   record: RecordItem = {
     tags:[], notes:'', type:'-', amount:0
   }
  onUpdataTags(value: string[]){
    this.record.tags= value
    
  }
  onUpdataNotes(value: string){
    this.record.notes = value
    
  }
  onUpdataType(value: string){
    this.record.type = value
    
  }
  onUpdataAmount(value: string){
    this.record.amount = parseFloat(value)
    
  }
  saveRecordItem(){
    //深拷贝
    store.createRecord(this.record)
  }
 

}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>



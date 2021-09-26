<template>
  <Layout class-prefix='layout'>
    <Number-Pad :value.sync='record.amount' @submit="saveRecordItem"/>
    <Types :value.sync="record.type" />
    <Notes @updata:value='onUpdataNotes'/>
    <Tags :data-source.sync="tags" @updata:value='onUpdataTags'/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import { Component, Watch } from 'vue-property-decorator';


import model from '@/model'

const recordList = model.fetch()



@Component({
   components: { NumberPad, Types, Notes ,Tags}
})
export default class Money extends Vue {
   tags = ['衣','食','住','行']
   recordList:RecordItem[] = recordList
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
    const record2:RecordItem = model.clone(this.recordList)
    record2.creatAt = new Date
    this.recordList.push(record2)
    console.log(this.recordList)
  }
  @Watch('recordList')
  onRecordItemListChanged(){
    model.save(this.recordList)
  }

}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>



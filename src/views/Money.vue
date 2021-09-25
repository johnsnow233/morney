<template>
  <Layout class-prefix='layout'>
    {{record}}
    <Number-Pad :value.sync='record.amount'/>
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
import { Component } from 'vue-property-decorator';

type Record = {
  tags: string[]
  notes: string
  type:string
  amount: Number
}

@Component({
   components: { NumberPad, Types, Notes ,Tags}
})
export default class Money extends Vue {
   tags = ['衣','食','住','行']
   record: Record = {
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
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>



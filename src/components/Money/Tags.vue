<template>
     <div class="tags">
      <div class="new">
        <button @click="createTag">新增标签</button>
      </div>
      <ol class="current">
        <li v-for="tag in tagList" :key='tag.id'
            :class="{selected: selectedTags.indexOf(tag)>=0}"
            @click="select(tag)"
        >{{tag.name}}</li>
        
      </ol>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mixins } from 'vue-class-component'
import {Component} from 'vue-property-decorator'
import TagHelper from '@/mixins/TagHelper'

@Component
export default class Tags extends mixins(TagHelper){
  get tagList(){
      return this.$store.state.tagList
    }
  selectedTags: string[] = []

  created(){
    this.$store.commit('fetchTags')
  }

  select(tag: string){
    const index = this.selectedTags.indexOf(tag)
    if(index >= 0){
      this.selectedTags.splice(index,1)
    }else{
      this.selectedTags.push(tag)
    }
    this.$emit('update:value',this.selectedTags)
    
  }
}
  
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';


.tags{
  background: white;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  .current{
    display: flex;
    flex-wrap: wrap;
    li{
      $bg:#d9d9d9;
      background: $bg;
      $h:24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      &.selected{
        background: darken($bg, 50%);
        color: white;
      }
    }
  }
  .new{
    padding-top: 16px;
    button{
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid ;
      padding: 0 12px;

    }
  }
} 
</style>
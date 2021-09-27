<template>
    <div>
        编辑
    </div>
</template>

<script lang="ts">
import tagModel from '@/models/tagModel';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';


@Component
export default class Labels extends Vue{
    created(){
       const id =  this.$route.params.id
       tagModel.fetch()
       const tags = tagModel.data
       const tag = tags.filter(t => t.id === id)[0]
       if(tag){
           console.log(tag)
       }else{
           this.$router.replace('/404')
       }
    }
   
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <div class="navBar">
            <Icon class="leftIcon" name='left' />
            <span class="title">编辑标签</span>
            <span class="right"></span>
        </div>
        <Notes class="notes" fieldName="标签" placeholder="请输入标签" />
        <div class="button-wrapper">
            <Button>删除标签</Button>
        </div>
    </div>
</template>

<script lang="ts">
import tagModel from '@/models/tagModel';
import Vue from 'vue';
import Notes from '@/components/Money/Notes.vue';
import { Component } from 'vue-property-decorator';

@Component({
   components: { Notes }
})
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
.navBar{
    font-size: 16px;
    text-align: center;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .leftIcon{
        width: 24px;
        height: 24px;
    }
    .title{

    }
    .right{

    }
}
.notes{
    background: white;
    margin-top:8px;
}
.button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 24px;
}
</style>
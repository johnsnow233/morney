<template>
    <div>
        <div class="navBar">
            <Icon class="leftIcon" name='left' @click="goBack" />
            <span class="title">编辑标签</span>
            <span class="right"></span>
        </div>
        <Notes class="notes" :value="tag.name" @update:value='update' fieldName="标签" placeholder="请输入标签" />
        <div class="button-wrapper">
            <Button @click="remove">删除标签</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Notes from '@/components/Money/Notes.vue';
import { Component } from 'vue-property-decorator';


@Component({
   components: { Notes }
})
export default class Labels extends Vue{
    tag?:{id:string, name:string} = undefined

    created(){
       const id =  this.$route.params.id
       const tag = window.findTag(id)
       if(tag){
           this.tag = tag
       }else{
           this.$router.replace('/404')
       }
    }
    update(name:string){
        if(this.tag){
            window.updateTag(this.tag.id, name)
        }else{

        }

    }    
    remove(){
        if(this.tag){
            if(window.removeTag(this.tag.id)){
            this.$router.back()
        }else{
            window.alert('删除失败')
        }
    }
        }
        
    goBack(){
        this.$router.back()
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
        width: 24px;
        height: 24px;
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
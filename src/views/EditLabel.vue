<template>
    <div>
        <div class="navBar">
            <Icon class="leftIcon" name='left' @click="goBack" />
            <span class="title">编辑标签</span>
            <span class="right"></span>
        </div>
        <Notes class="notes" :value="currentTag.name" @update:value='update' fieldName="标签" placeholder="请输入标签" />
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
    get currentTag(){
        return this.$store.state.currentTag
    }
    created(){
       const id = this.$route.params.id
       this.$store.commit('fetchTags')
       this.$store.commit('setCurrentTag',id)
       if(!this.currentTag){
           this.$router.replace('/404')
       }
    }
    update(name:string){
        this.$store.commit('updateTag',{id: this.currentTag.id, name})
    }    
    remove(){
       if(this.currentTag){
           this.$store.commit('removeTag',this.currentTag.id)
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
import Labels from '@/views/Labels.vue';
<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon class="svg" name="right"/>
                </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" @click="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TagHelper from '@/mixins/TagHelper';
import { mixins } from 'vue-class-component';

@Component
export default class Labels extends mixins(TagHelper){
    get tags(){
            return this.$store.state.tagList
        }
    beforeCreated(){
        this.$store.commit('fetchTags')
    }
   
}
</script>

<style lang="scss" scoped>
    .tags{
        background: white;
        font-size: 16px;
        padding-left: 16px;
        .tag{
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .svg{
            padding-right: 16px;
            height: 32px;
            width: 32px;
            color: #666;
        }
    }
    .createTag{
        background: #767676;
        border: none;
        color: white;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;
        &-wrapper{
            text-align: center;
            padding: 16px;
            margin: 44-16px;
        } 
    }
</style>
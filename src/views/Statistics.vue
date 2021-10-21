<template>
  <Layout>
    <Tabs
      class-prefix="type"
      :data-source="recordTypeList"
      :value.sync="type"
    />


    <ol>
      <li v-for="(group, index) in result" :key="index">
        <h3 class="title">{{beautify(group.title)}} <span>{{group.total}}</span></h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
import dayjs from 'dayjs'
import clone from "@/lib/clone";



@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  beautify(string:string){
      const day = dayjs(string)
      const now = dayjs()
      if(day.isSame(now, 'day')){
          return '今天'
      }else if(day.isSame(now.subtract(1,'day'), 'day')){
          return '昨天'
      }else if(day.isSame(now.subtract(2,'day'), 'day')){
          return '前天'
      }
      else{
          return day.format('YYYY年MM月DD日')
      }
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    type GroupList = {title:string, total?:number, items:RecordItem[]}[]
    if(recordList.length===0){return []}
    const newList = clone(recordList).filter(r=>r.type==this.type).sort((a,b)=> dayjs(b.creatAt).valueOf() - dayjs(a.creatAt).valueOf())
    const groupList:GroupList = [{title:dayjs(newList[0].creatAt).format('YYYY-MM-DD'), items:[newList[0]]}]
    for(let i=1; i<newList.length;i++){
        const current = newList[i]
        const last = groupList[groupList.length-1]
        if(dayjs(last.title).isSame(dayjs(current.creatAt),'day')){
            last.items.push(current)
        }else{
            groupList.push({title:dayjs(current.creatAt).format('YYYY-MM-DD'), items:[current]})
        }
    }
    groupList.map(group => {
        group.total = group.items.reduce((sum, item) => {
          console.log(sum);
          console.log(item);
          return sum + item.amount;
        }, 0);
      });

    return groupList
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }

  type = "-";
  
  recordTypeList = recordTypeList;
  
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: #c4c4c4;
  &.selected {
    background: white;
    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item {
  height: 48px;
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: white;
}
.notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
</style>

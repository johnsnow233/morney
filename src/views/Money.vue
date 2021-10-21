<template>
  <Layout class-prefix="layout">
    <Number-Pad :value.sync="record.amount" @submit="saveRecordItem" />
    <Tabs :data-source="recordTypeList" :value.sync="record.type" />
    <Notes
      fieldName="备注"
      placeholder="请输入备注"
      @update:value="onUpdataNotes"
    />
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "../constants/recordTypeList";

@Component({
  components: { NumberPad, Notes, Tags, Tabs },
  //  computed:{
  //    //值和地址的区别，recordlist是复制的地址，所以可以改变对应的数据，
  //    //但如果是值，就需要computed进行监听，才能改变，比较懒惰的写法就是统一放进computed
  //    recordList(){
  //      return this.$store.state.recordList
  //    }
  //  }
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  created() {
    this.$store.commit("fetchRecords");
  }

  onUpdataNotes(value: string) {
    this.record.notes = value;
  }
  saveRecordItem() {
    //深拷贝
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

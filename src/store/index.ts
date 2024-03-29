import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex) //把storr绑定到Vue.prototype.$store = store



const store =  new Vuex.Store({
  state: {
    recordList: [] ,
    createTagError:null,
    tagList:[],
    currentTag:undefined  
  }as RootState ,
  mutations: {
    setCurrentTag(state,id:string) {
      state.currentTag =state.tagList.filter(t => t.id === id)[0];
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      if (!state.tagList || state.tagList.length === 0) {
        store.commit('createTag', '衣');
        store.commit('createTag', '食');
        store.commit('createTag', '住');
        store.commit('createTag', '行');
      }
  
    },
    createTag(state, name:string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        state.createTagError = new Error('tag name duplicated')
        return
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags')
    },
    removeTag(state,id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if(index>=0){
        state.tagList.splice(index, 1);
        store.commit('saveTags')
        router.back()
      }else{
        window.alert('删除失败')   
}
    },
    updateTag(state, payload: { id: string, name: string }) {
      const {id, name} = payload
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          return 'duplicated';
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags')
          return 'success';
        }
      } else {
        return 'not found';
      }
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];

     
    },
    createRecord(state,record) {
      const record2: RecordItem = clone(record);
      record2.creatAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecords')

    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  }
  
})

export default store
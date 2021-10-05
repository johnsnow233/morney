
import recordModel from "@/models/recordModel"
import tagModel from "@/models/tagModel"

// record store
const store = {
    recordList : recordModel.fetch(),
    createRecord:(record:RecordItem)=> recordModel.create(record),
    
    
    // tag store
    tagList : tagModel.fetch(),
    findTag(id:string){
      return this.tagList.filter(t => t.id === id)[0]
    },
    
    createTag:(name:string)=>{
      const message = tagModel.create(name)
                if(message === 'duplicated'){
                    window.alert('标签名重复')
                }else if(message === 'success'){
                    window.alert('添加成功')
                }
    },
    
    removeTag:(id:string)=>{
      return tagModel.remove(id)
    },
    updateTag:(id:string,name:string)=>{
      return tagModel.update(id, name)
    }
    
}


export default store
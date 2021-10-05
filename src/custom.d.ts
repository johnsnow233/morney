type RecordItem = {
    tags: string[]
    notes: string
    type:string
    amount: Number //数据类型
    creatAt?: Date  //类 /构造函数
  }
  type Tag = {
    id:string
    name:string
}
type TagModel = {
    data: Tag[]
    fetch: ()=> Tag[]
    create: (name:string)=> 'duplicated' | 'success' // 联合类型
    update:(id:string, name: string)=> 'success' | 'not found' | 'duplicated'
    remove:(id:string) => boolean
    save: ()=> void
}

interface Window {
  tagList: Tag[]
  createTag: (name:string) => void
  removeTag: (id:string) =>boolean
  updateTag: (id:string, name:string) => 'success' | 'not found' | 'duplicated'
  findTag: (id:string) => Tag
  recordList: RecordItem[]
  createRecord: (record:RecordItem)=>void
}

const localStorageKeyName = 'recordList'
type TagModel = {
    data: string[]
    fetch: ()=> string[]
    create: (name:string)=> 'duplicated' | 'success' // 联合类型
    save: ()=> void
}

const tagModel:TagModel= {
    data:[],
    fetch(){
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') 
        return this.data  
    },
    create(name){
        if(this.data.indexOf(name) >= 0){return 'duplicated'}
        this.data.push(name)
        this.save()
        return 'success'
    },
    save(){
        return window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export default tagModel
import clone from "@/lib/clone"

const localStorageKeyName = 'recordList'

const recordModel = {
    data:[]  as RecordItem[],
    create(record:RecordItem){
        const record2:RecordItem =clone(record)
        record2.creatAt = new Date
        this.data.push(record2)
        this.save()
        
    },
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[]
        
    },
    save(){
        return window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export default recordModel
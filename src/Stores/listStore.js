import { observable } from "mobx";

class ListStore {
    //  List item model
    // {
    //     name:"Apples",
    //     price:20,
    //     amount:3
    // }
    @observable list = []

    addItem(item){
        this.list.push(item)
    }
}

const store = new ListStore();
export default store
import { observable } from "mobx";

class ListStore {
    @observable list = [
        {
            name:"Apples",
            price:20,
            amount:3
        },
        {
            name:"Bananas",
            price:3,
            amount:5
        },
    ]

    addItem(item){
        this.list.push(item)
    }
}

const store = new ListStore();
export default store
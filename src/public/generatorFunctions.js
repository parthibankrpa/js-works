let list = [2,3,4,1,9,5,6,4,2,89,1000,45,54]


class CustomList {
    list ;
    constructor(list){
        this.list = list;
    }

    getList(){
        return this.list;
    }

    *[Symbol.iterator]getItem(){
        for(let i =0;i<this.list.length;i++){
            yield this.list[i];
        }
    }
}

console.log(new CustomList(list));

// function *gen(){
//     for(let i=0;i<=5;i++) yield i;
// }
// const myGen = gen();
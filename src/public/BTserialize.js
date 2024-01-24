/*
[[ 1, 2 , 3],[ 2, 5,6],[ 3, null, null],[5,null,null],[6,null,null] ]

[ 1, 2, 3, 2,5,6,3,null,null,5,null,null,6,null,null]

[ 1,2, 3, 2,5,6,3,null,null,5,null,null,6,null,null]
*/


const BT = {
    data:null,
    right:null,
    left:null
}


// class BT {
//     constructor(data,left,right){
//         this.data = data;
//         this.right = right||null;
//         this.left = left || null;
//     }
// }

let serializedString = '';

function serialize(bt){
    serializedString = ',' + bt.data;
    if(bt.left){
        serializedString =  serializedString+serialize(bt.left)
    }
    else{
        serializedString += ',null';
    }
     if(bt.right){
        serializedString += serialize(bt.right)
    }else{
        serializedString += ',null'
    }
    
    return serializedString;
}

function  DeSerialize(){
    const srializedArray = serializedString.split(',');
    let bt = srializedArray.map((item)=>{
        
    })
}


serialize(BT)







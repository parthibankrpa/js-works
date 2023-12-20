console.log("shopping cart");

class Cart{
    list // this list contains all item in the cart which includes coupons also
    /**
     * 
     * [{ type:'coupon', price:10, discountType:'percentage'}, 
     * { type:'product', price:30, productType:'Product1'
     * }]
     */
    coupons;
    totalPrice;
    constructor(list){
        this.list = list;
        this.coupons = [];
        this.totalPrice = 0;
        this.processList();
    }

    processList(){
        let totalAmountWithoutDiscount = 0;
        let totalDiscount = 0;
        this.list.forEach(element => {
            if(element.type == 'product'){
                totalAmountWithoutDiscount += element.price;
            }else{
                totalDiscount += element.price;// TODO whether to accumulate the similar type discount 
            }
        });

        this.totalPrice = totalAmountWithoutDiscount - (totalAmountWithoutDiscount*totalDiscount)/100;
    }

    getTotalPrice(){
        return this.totalPrice;
    }

}

let itemList = [{ type:'coupon', price:10, discountType:'percentage'},
{ type:'product', price:30, productType:'Product1'},
{ type:'product', price:50, productType:'Product1'}];

let cart = new Cart(itemList);

console.log('Total Price = ', cart.getTotalPrice());


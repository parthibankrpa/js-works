function Car(make,color,brand){
    this.make = make;
    this.color = color;
    this.brand = brand;   
    let  getYearsOld = function(){
        let dt = new Date().getFullYear();
        console.log();
        return dt - this.make;
    }
}

Car.prototype.getColor = () => {
    return this.color;
}

Car.prototype.getBrand = function(){
    return this.brand;
}

Car.prototype.isOlder = function() {
    let old = getYearsOld();
    let older = false;
    if(old > 5){
        older = true;
    }

    return older;    
}

let honda = new Car(1985,"black","honda");
console.log(honda.isOlder());
function circle(radius){
    return {
        
        draw(){
            console.log(`drawing circle with ${radius}`)
        }
    }
}

let circle1 = circle(1);
let circle2 = circle(2);

circle1.draw();
console.log(circle1.radius);
circle2.draw();
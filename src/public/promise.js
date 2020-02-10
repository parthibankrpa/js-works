let add = (a,b) =>{
    return new Promise((resolve, reject) => {
        var c = a + b;
        if (c > 10) {
            resolve("success");
        } else {
            reject("failure");
        }
    });
};

var p = add(1,20);

const log = (msg) => console.log(msg);
p.then(log).catch(log);
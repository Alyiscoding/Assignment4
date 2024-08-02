// alert ("Hi");

function task1() {
    let sum = 0;
    
    for (let i = 1; i <= 10 ; i++) {
        let a = document.getElementById("inp" + i).value;
        // a = a.valuue;
        a = Number(a);
        sum += a;

    }
    // console.log(sum);
    
    let total = document.getElementById("sum");
    total.innerText = "Sum is: " + sum;
    return false;
    
}

function task2() {
    let myArr = [];
    // let odd = 0;
    let a2 = document.getElementById("start").value;
    a2 = Number(a2);
    let b2 = document.getElementById("end").value;
    b2 = Number(b2);
    if(a2>b2){
        alert("Starting number must be less than ending number!!\n Please Enter numbers again.");
        
    }
    else{    

        for (let a = a2 ; a <= b2; a++) {
            if(a % 2 != 0){
                myArr.push(a);

            }
            
        }
        let result = document.getElementById("odd");
        result.innerText = "ODD Numbers between "+ a2 +" and " +b2 + " are: " + myArr;
        console.log(myArr);
        
        return false;
        
    }
}


function task3() {
    const city = document.getElementById("city").value;
    // let result = " ";
    if(city == "lahore" || city == "Lahore" || city == "LAHORE"){
        const a = document.getElementById("result");
        a.innerText = "Today Lahore Temp is 42C Sunny.";

    }
    else if(city == "karachi" || city == "Karaachi" || city == "KARACHI"){
        const b = document.getElementById("result");
        b.innerText = "Today Karachi Temp is 22C Rainy.";

    }
    else if(city == "islamabad" || city == "Islamabad" || city == "ISLAMABAD"){
        const c = document.getElementById("result");
        c.innerText = "Today Islamabad Temp is 30C Cloudy.";

    }
    else {
        const d = document.getElementById("result");
        d.innerText = "Sorry Weather Update is not Available for " + city;

    }

    return false;
    
}
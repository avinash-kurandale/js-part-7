console.log("hey");

//Function Expression
    const sum = function(a,b){
        return a + b;
    }
    console.log(sum(2, 3));  // Output: 5

// Higher order function

    function multigreet(func , count){ // higher order function
        for(let i=1; i<=count; i++){
            func();        
        }
    }
    let greet = function(){
        console.log("hello");
    }
    multigreet(greet, 3);

// higher order function (RETURN)
    function OddorEvenFactory(request){
        if(request =="odd"){
            return function(n){
                console.log(!(n%2 == 0));
            }
        }else if(request == "even"){
            return function(n){
                console.log(n%2 == 0);
            }
        }else{
            console.log("wrong request");
        }
    }    
    let request = "odd"; //even

//METHODS - Method is nothing but the function inside the objects
    const calculator = {
        num : 55,
        add: function(a,b){
            return a+b;
        },
        sub: function(a,b){
            return a-b;
        },
        mul: function(a,b){
            return a*b;
        }
    };
    //run on console
    //1calculator
       // {num: 55, add: ƒ, sub: ƒ, mul: ƒ}
    //2calculator.add
       // ƒ (a,b){
       //             return a+b;
        //        }
   //3calculator.add(6,4)
        10
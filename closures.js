//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var inner = outer()();

//Once you do that, invoke inner.

  //Code Here
inner;


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var number = "435-215-9248"
callFriend()(number);

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

  var makeCounter = function(){
      var counter = 0;
      return function(){
      counter++;
      return counter;
      };
  };

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

  //Code Here
var sayHello = function(){
    console.log("Hello");
};

var once = function(cb){
    var counter = 0;
    return function(){
        if(counter === 1){
            console.log('Stop, you have already said Hello');
            return
        }
        counter++;
        cb();
    }
};

var sayOnce = once(sayHello);

sayOnce();

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
var sayHello = function(){
    console.log("Hello");
};

var once = function(cb, n){
    var counter = 0;
    return function(){
        if(counter === n){
            console.log('Stop, you have already said Hello N number of times');
            return
        }
        counter++;
        cb();
    }
};

var sayTwice = once(sayHello, 2);

sayTwice();


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here
function doSetTimeout(i) {
    setTimeout(function() {
        console.log(i);
    }, i*1000 );
}

var counter = function(){
    for (var i=1; i<=5; i++) {
        doSetTimeout(i);
    }
};


//Next Problem



/*
  Make the following code work*/

var func = function(n) {
return function(){
    return n;
}
};

var funcArray = [func(0),func(1),func(2),func(3),func(4),func(5)];

funcArray[0]() //0
funcArray[1]() //1
funcArray[2]() //2
funcArray[3]() //3
funcArray[4]() //4
funcArray[5]() //5

/*Hint: Don't let this fool you. Break down what's really happening here.




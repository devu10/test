var globalVar = "global";

function outerFunScope() {
  var outerFunVar = "outer";

  function innerFunScope() {
    var innerFuncVar = "inner";

    console.log(innerFunScope);
    console.log(outerFunVar);
    console.log(globalVar);
  }
}

innerFunScope();

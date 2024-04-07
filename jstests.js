function methodTest() {
  const fruits = ["apple", "mango", "banana", "orange"];

  const neD = fruits.map((it, i) => {
    console.log("index: " + i, " item: " + it);
    return it;
  });

  console.log(neD);

  const red = fruits.filter((itm, d) => itm.includes("n"));

  const num = [12, 16, 156, 897, 4555, 2020, 5456];

  const total = num.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  console.log(total);

  const res = fruits.every((ite) => {
    return ite.includes("a");
  });

  const rest = num.every((im) => {
    return im > 500;
  });

  console.log(res);
  console.log(rest);
}

function jsChall1() {
  // Challange #1
  // 1. create an array of 50 random numbers range between 1 and 100 programmatically
  const randomNum = new Array(50)
    .fill()
    .map(() => Math.floor(Math.random() * 100) + 1);
  console.log("Random Array: \n" + randomNum);

  //2. sort the array in descending order
  console.log("Sorted Array: \n" + randomNum.sort((a, b) => b - a));

  //3. get total of the array
  console.log(
    "Total: " +
      randomNum.reduce((previousValue, CurrentValue) => {
        return previousValue + CurrentValue;
      }, 0)
  );

  //4.Divide original array in to 2 new arrays that contains even or odd numbers only each.

  console.log(
    "even Array: \n" +
      randomNum.filter((num) => num % 2 === 0) +
      "\n\n" +
      "odd Array: \n" +
      randomNum.filter((num) => num % 2 !== 0)
  );

  // 5. remove duplicate number for the original array
  // console.log(randomNum.indexOf(num), num, index);
  const uniqueNo = randomNum.filter(
    (num, index) => randomNum.indexOf(num) === index
  );
  console.log("no Duplicate: \n" + uniqueNo);
}

function chal3() {
  // Challange #2 create unique array 50 numbers rang between 1 and 100 programmatically
  const uarr = [];
  while (uarr.length < 50) {
    const rNo = Math.round(Math.random() * 100) + 1;
    !uarr.includes(rNo) && uarr.push(rNo);
  }
  console.log("unique array: \n" + uarr);
}

function dateTest() {
  const smDate = new Date("1912-10-30");
  // const data = smDate.toLocaleTimeString();
  // const data = smDate.toLocaleDateString();
  // const data = smDate.toISOString();

  smDate.setDate(smDate.getDate() + 10);

  console.log(smDate);
  console.log(smDate.getTime());
}

dateTest();

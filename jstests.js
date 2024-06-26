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
  // const smDate = new Date("1912-10-30");
  // const data = smDate.toLocaleTimeString();
  // const data = smDate.toLocaleDateString();
  // const data = smDate.toISOString();
  // smDate.setDate(smDate.getDate() + 10);
  // console.log(smDate);
  // console.log(smDate.getTime());
  // const a = new Date("2024-01-05");
  // const b = new Date();
  // if (a < b) {
  //   console.log("expired " + (b - a) + " days ago");
  // } else {
  //   console.log("not expired you have 10 days to use it");
  // }
}

dateTest();

const dateCh = (food, expiry) => {
  const currentDate = new Date();
  const expirydate = new Date(expiry);

  const DateDiff = Math.floor(
    (currentDate - expirydate) / (1000 * 60 * 60 * 24)
  );

  return DateDiff > 0
    ? console.log(food + " expired " + Math.abs(DateDiff) + " days ago.")
    : console.log(`You have ${Math.abs(DateDiff)} days to use ${food}`);
};

const errHand = () => {
  try {
    if (jpt === undefined) {
      throw new Error("test");
    }
    console.log(jpt);
  } catch (er) {
    if (er.message === "test") {
      console.log("test success");
    }
    console.log(er);
  } finally {
    console.log("this is the logging part of the finaly block");
  }
};

function intervalTest() {
  let count = 10;
  const inter = setInterval(() => {
    console.log("count begins: ", count--);
    if (count === 0) {
      clearInterval(inter);
      console.log("pop up add comes");
    }
  }, 1000);
}

function aaa() {
  const yoyo = () => console.log("0. " + (5 + 6));

  console.log("1. log");

  setTimeout(() => {
    console.log("2. inside frist set timeout");
  }, 5000);

  console.log("3. after first setTime out");

  const sayHey = () => {
    console.log("4. inside sayhey");
    yoyo();
  };

  setTimeout(() => {
    console.log("5. inside second set timeout");
  }, 0);

  sayHey();

  console.log("6. last clg");
}

// dateCh("apple", "2024-12-1");

const memberList = [
  {
    name: "amit",
    location: "nepal",
    post: "treasurer",
    type: "permanent",
  },
  {
    name: "devendra",
    location: "australia",
    post: "secretery",
    donation: "2024",
  },
  {
    name: "rajendra",
    location: "nepal",
    post: "head",
  },
];

const donationInfo = ({ donation }) => {
  return `He has made his last donation on ${donation}`;
};

const showMember = ({ name, location, post, ...rest }) => {
  let memberDes = `${name} is the member from ${location} with the roles in the position as ${post}. `;
  if (rest.donation) {
    memberDes += donationInfo(rest);
  }
  return memberDes;
};

memberList.forEach((item) => {
  const memberInfo = showMember(item);
  console.log(memberInfo);
});

function objTest() {
  const events = {
    eventName: "newyear",
    eventLocation: "thapathali",
    eventDate: "2081/01/01",
    eventManagers: ["amit", "bibekr", "manish"],
    eventTime: {
      morningPuja: "9 AM",
      dayPuja: "12 noon",
      eveningPuja: "6 pm",
    },
    eventInfo: () => {
      return "extra info";
    },
  };

  const copyEvents = events;
  events.eventDate = "2082/01/01";
  events.eventTime.morningPuja = "bihana";
  console.log(events);
  console.log(copyEvents);

  const copyEvents4 = JSON.parse(JSON.stringify(events));
  events.eventTime.morningPuja = "5am";
  console.log(copyEvents4);
}

const getEventManager = ({ name, post }) => {
  return `name: ${name}, post: ${post}`;
};

const events = {
  nayabarsa: {
    eventName: "nayabarsa",
    eventDate: "2081/01/01",
    eventTimes: {
      morning: "6 AM",
      day: "1 PM",
      evening: "6 PM",
      night: "9 PM",
    },
    eventManager: getEventManager(),
  },
  janaipurnima: {
    eventName: "janaipurnima",
    eventDate: "2081/05/15",
    eventTimes: {
      morning: "6 AM",
      day: "1 PM",
      evening: "6 PM",
      night: "9 PM",
    },
    eventManager: getEventManager(),
  },
};

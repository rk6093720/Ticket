// All the Code for All Students Page Goes Here
let loadval = JSON.parse(localStorage.getItem("registation_data"));
console.log(loadval);
function displaytable(data) {
  console.log(data);
  let tb = document.querySelector("tbody");
  tb.innerHTML = "";
  data.map(function (ele, index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = ele.unique_id;
    let td2 = document.createElement("td");
    td2.innerText = ele.name;
    let td3 = document.createElement("td");
    td3.innerText = ele.age;
    let td4 = document.createElement("td");
    td4.innerText = ele.from_station;
    let td5 = document.createElement("td");
    td5.innerText = ele.to_station;
    let td6 = document.createElement("td");
    td6.innerText = ele.date;
    let td7 = document.createElement("td");
    td7.innerText = ele.seat_type;
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
}

displaytable(loadval);

document.querySelector("#filter").addEventListener("change", filteritem);
function filteritem(element) {
  let selected = document.querySelector("#filter").value;
  if (selected == "all") {
    displaytable(loadval);
  } else {
    let filter = loadval.filter(function (element) {
      return element.seat_type == selected;
    });
    displaytable(filter);
  }
}

document.querySelector("#sort_age").addEventListener("change", SortAge);
function SortAge() {
  let selected = document.querySelector("#sort_age").value;
  //   console.log(selected);
  if (selected === "low_to_high") {
    loadval.sort(function (a, b) {
      return a.age - b.age;
    });
    displaytable(loadval);
  } else {
    loadval.sort(function (a, b) {
      return b.age - a.age;
    });
    displaytable(loadval);
  }
}

document.querySelector("#sort_date").addEventListener("change", SortDate);
function SortDate() {
  let selected = document.querySelector("#sort_date").value;
  //  console.log(selected);
  if (selected === "low_to_high") {
    loadval.sort(function (a, b) {
      let x = a.date;
      let y = b.date;
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
    displaytable(loadval);
  } else {
    loadval.sort(function (a, b) {
      let x = a.date;
      let y = b.date;
      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    });
    displaytable(loadval);
  }
}

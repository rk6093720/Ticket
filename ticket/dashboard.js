// All the Code for the Admitted page goes here

let loadAcceptedAdd = JSON.parse(localStorage.getItem("registation_data"));
let booked = JSON.parse(localStorage.getItem("booked")) || [];
// console.log(book);
function displaytable(data) {
  let tb = document.querySelector("tbody");
  tb.innerHTML = "";
  data.forEach(function (ele, index) {
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
    let otp = document.createElement("td");
    otp.setAttribute("id", "otp");
    otp.innerText = Math.floor(Math.random() * 9000) + 1000;
    let td8 = document.createElement("td");
    let td9 = document.createElement("td");
    let reject = document.createElement("button");
    reject.innerText = "Reject";
    reject.style.backgroundColor = "red";
    reject.style.color = "white";
    reject.addEventListener("click", rejectUser);
    function rejectUser(event, index) {
      tr.remove();
      loadAcceptedAdd.splice(index, 1);
      localStorage.setItem("registation_data", JSON.stringify(loadAcceptedAdd));
    }
    td8.append(reject);
    let confirm = document.createElement("button");
    td9.append(confirm);
    confirm.addEventListener("click", confirmData);
    function confirmData() {
      let otp = prompt("Please enter otp");
      let x = document.getElementById("otp").innerText;

      let countValue = new Promise(function (resolve, reject) {
        if (otp != x) {
          alert("please enter correct otp");
        } else {
          alert(`${ele.name} added to waiting list`);
          const ticket = setTimeout(ticketDone, 5000);
          function ticketDone() {
            alert(
              `Booking ticket from ${ele.from_station} to ${ele.to_station}`
            );
          }
          const donee = setTimeout(ticketOk, 10000);
          function ticketOk() {
            alert(`Ticket booked for ${ele.date}`);
            booked.push(ele);
            localStorage.setItem("booked", JSON.stringify(booked));
            tr.remove();
            loadAcceptedAdd.splice(index, 1);
            localStorage.setItem(
              "registation_data",
              JSON.stringify(loadAcceptedAdd)
            );
          }
        }
      });
      countValue
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    }
    confirm.innerText = "Confirm";
    confirm.style.backgroundColor = "green";
    confirm.style.color = "white";
    tr.append(td1, td2, td3, td4, td5, td6, td7, otp, td8, td9);
    document.querySelector("tbody").append(tr);
  });
}
displaytable(loadAcceptedAdd);

document.querySelector("#filter").addEventListener("change", filteritem);
function filteritem(element) {
  let selected = document.querySelector("#filter").value;
  if (selected == "all") {
    displaytable(loadAcceptedAdd);
  } else {
    let filter = loadAcceptedAdd.filter(function (element) {
      return element.seat_type == selected;
    });
    displaytable(filter);
  }
}

document.querySelector("#sort_age").addEventListener("change", SortAge);
function SortAge() {
  let selected = document.getElementById("sort_age").value;
  console.log(selected);
  if (selected === "low_to_high") {
    loadAcceptedAdd.sort(function (a, b) {
      return a.age - b.age;
    });
    displaytable(loadAcceptedAdd);
  } else {
    loadAcceptedAdd.sort(function (a, b) {
      return b.age - a.age;
    });
    displaytable(loadAcceptedAdd);
  }
}

document.querySelector("#sort_date").addEventListener("change", SortDate);
function SortDate() {
  let selected = document.querySelector("#sort_date").value;
  //  console.log(selected);
  if (selected === "low_to_high") {
    loadAcceptedAdd.sort(function (a, b) {
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
    displaytable(loadAcceptedAdd);
  } else {
    loadAcceptedAdd.sort(function (a, b) {
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
    displaytable(loadAcceptedAdd);
  }
}

// if (otp === x) {
//    alert(`${ele.name} added to waiting list`);
//    const ticket = setTimeout(ticketDone, 5000);
//    function ticketDone() {
//      alert(`Booking ticket from ${ele.from_station} to ${ele.to_station}`);
//    }
//    const donee = setTimeout(ticketOk, 10000);
//    function ticketOk() {
//      alert(`Ticket booked for ${ele.date}`);
//      booked.push(ele);
//      localStorage.setItem("booked", JSON.stringify(booked));
//      tr.remove();
//      loadAcceptedAdd.splice(index, 1);
//      localStorage.setItem(
//        "registation_data",
//        JSON.stringify(loadAcceptedAdd)
//      );
//    }

//    // Ticket booked for <Journey Date></Journey>
//  } else {
//    alert("please enter correct otp");
//  }

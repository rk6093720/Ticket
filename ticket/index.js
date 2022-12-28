// All the JS Code for the Add Students Page Goes Here

document.querySelector("form"), addEventListener("submit", storedata);
var dataArr = JSON.parse(localStorage.getItem("registation_data")) || [];
function storedata(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var unique_id = document.getElementById("unique_id").value;
  var age = document.getElementById("age").value;
  var from_station = document.getElementById("from_station").value;
  var to_station = document.getElementById("to_station").value;
  var date = document.getElementById("date").value;
  var seat_type = document.getElementById("seat_type").value;
  let x = dataArr.filter((ele) => ele.unique_id === unique_id);
  console.log(x);
  if (
    name == "" ||
    age == "" ||
    from_station == "" ||
    to_station == "" ||
    date == "" ||
    seat_type == ""
  ) {
    alert("All detail must be filled");
  } else if (x.length > 0) {
    alert("Same unique id not allowed");
  } else if (from_station === to_station) {
    alert("both stations value is same");
  } else if (age > 18 && age < 40) {
    var obj = {
      name: name,
      unique_id: unique_id,
      age: age,
      from_station: from_station,
      to_station: to_station,
      date: date,
      seat_type: seat_type,
    };
    dataArr.push(obj);
    localStorage.setItem("registation_data", JSON.stringify(dataArr));
    alert("Registation successfull")
    document.getElementById("name").value = "";
    document.getElementById("unique_id").value = "";
    document.getElementById("age").value = "";
    document.getElementById("from_station").value = "";
    document.getElementById("to_station").value = "";
    document.getElementById("date").value = "";
    document.getElementById("seat_type").value = "";
  } else {
    alert("age must between 18 to 40");
  }
}

`use strict`

function addPrintButton(list) {
  let div = document.getElementById("print-button");
  let button = document.createElement("button");
  div.innerHTML = "";
  button.id = "print";
  button.innerHTML = "Print compared heroes to console";
  button.onclick = () => list.forEach((hero) => console.log(hero));
  div.append(button);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable(googleView);
  var options = {
    height: 400,
  };
  var chart = new google.charts.Bar(document.getElementById('chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function compereHeros() {
  if (compere == "undefined" || compere.length < 2)
    alert("Not enough superheroes")
  else if (compere && compere.length > 1) {
    let chart = [];

    chart.push(["Hero name", ...Object.keys(compere[0].powerstats)]);
    compere.forEach((hero) => {
      let stats = Object.values(hero.powerstats).map((elem) => elem === `null` ? null : +elem);
      chart.push([hero.name, ...stats])
    });
    document.getElementById('chart').innerHTML = "";
    googleView = chart;
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart);
    addPrintButton(chart)
  }
}
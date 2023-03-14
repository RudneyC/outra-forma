$(document).ready(function() {

  var csvFileName = "dados.csv";

  $.get(csvFileName, function (data) {
    var lines = data.split("\n");
    var tableHead = "<tr>" + lines[0].split(",").map(header => `<th>${header}</th>`).join("") + "</tr>";
    var tableRows = lines.slice(1).map(row => "<tr>" + row.split(",").map(cell => `<td>${cell}</td>`).join("") + "</tr>");
    $("#table-head").append(tableHead);
    $("#table-body").append(tableRows.join(""));
    $('#myTable').DataTable();
  });
});

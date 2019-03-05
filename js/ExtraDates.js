var dates = new Array();

function addDate(date) {
    if (jQuery.inArray(date, dates) < 0) dates.push(date);
}

function removeDate(index) {
    dates.splice(index, 1);
}

// Adds a date if we don't have it yet, else remove it
function addOrRemoveDate(date) {
    var index = jQuery.inArray(date, dates);
    if (index >= 0) 
        removeDate(index);
    else 
        addDate(date);
}

$("#extradates").multiDatesPicker({
    minDate: 1, // today
    maxDate: 30,
    dateFormat: "dd-mm-yy",
    separator:" , ",
    onSelect: function (dateText, inst) {
        addOrRemoveDate(dateText);
        insertTable();//for extra notify
    },
});

function countnumberofdays()
{
    var milliseconds = 1000 * 60 * 60 * 24;
    var dd = selected.split("-");
    var d1 = new Date(dd[2],dd[1]-1,dd[0]);
    var milli = d1.getTime();
    var d2 = new Date();
    var milli2 = d2.getTime();
    mini = -Math.round((milli2 - milli) / milliseconds);
}
$(".from-to_datepicker").multiDatesPicker({
    maxPicks: 2, 
    maxDate: 0,
    dateFormat: "dd-mm-yy",
    separator:" to "
});

function insertTable() {
    var table = document.getElementById("ExtraTable").getElementsByTagName("tbody")[0];
    $("#ExtraTable tbody tr").remove();
    dates.forEach(function (val) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell3 = row.insertCell(1);
        cell1.innerHTML = val;
        var cell2 = document.createElement("input");
        cell2.setAttribute("type", "text");
        cell2.setAttribute("name", val);
        cell2.setAttribute("id", val);
        cell3.appendChild(cell2);
    });
    
}

function displayExtra() {
 /*   var values="";
    dates.forEach(function (valuee) {
        values += $("#"+valuee).val();
    });*/
 //   alert(values);
}
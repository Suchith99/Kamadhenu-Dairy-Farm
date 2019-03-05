var absentdates = new Array();

function addAbsentDate(date) {
    if (jQuery.inArray(date, absentdates) < 0) absentdates.push(date);
}

function removeAbsentDate(index) {
    absentdates.splice(index, 1);
}

// Adds a date if we don't have it yet, else remove it
function addOrRemoveAbsentDate(date) {
    var index = jQuery.inArray(date, absentdates);
    if (index >= 0) 
        removeAbsentDate(index);
    else 
        addAbsentDate(date);
}

// Takes a 1-digit number and inserts a zero before it
function padNumber(number) {
    var ret = new String(number);
    if (ret.length == 1) ret = "0" + ret;
    return ret;
}

$("#absentdates").multiDatesPicker({
    minDate: 1, // today
    maxDate: 30,
    dateFormat: "dd-mm-yy",
    separator:" , ",
    onSelect: function (dateText, inst) {
        addOrRemoveAbsentDate(dateText);
    },
});

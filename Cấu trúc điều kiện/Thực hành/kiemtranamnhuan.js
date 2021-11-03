var year = parseInt(prompt("Nhập vào một năm bất kỳ:"));
var namnhuan = false;
var Div4 = year % 4 == 0;
if (Div4)
{
    var Div100 = year % 100 == 0;
    if (Div100) {
        var Div400 = year % 400 == 0;
        if (Div400) {
            namnhuan = true;
        }
    } else {
        namnhuan = true;
    }
}
if (namnhuan)
{
    alert(year + " là năm nhuận!");
} else {
    alert(year + " không phải là năm nhuận!");
}
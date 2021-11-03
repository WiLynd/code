function chuyendoitien()
{
    var a = document.getElementById('tien').value;
    a = parseFloat(a);
    var kq = a/24000;
    document.getElementById('message').innerText = ("Kết quả:" + kq + "USD");
}

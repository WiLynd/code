function add()
{
    var x = document.getElementById('a').value;
    var y = document.getElementById('b').value;
    x = parseFloat(x);
    y = parseFloat(y);
    var kq = x+y;
    document.getElementById('final').innerText = ("Kết quả:" + kq);
}

function sub()
{
    var x = document.getElementById('a').value;
    var y = document.getElementById('b').value;
    x = parseFloat(x);
    y = parseFloat(y);
    var kq = x-y;
    document.getElementById('final').innerText = ("Kết quả:" + kq);
}

function mul()
{
    var x = document.getElementById('a').value;
    var y = document.getElementById('b').value;
    x = parseFloat(x);
    y = parseFloat(y);
    var kq = x*y;
    document.getElementById('final').innerText = ("Kết quả:" + kq);
}

function dev()
{
    var x = document.getElementById('a').value;
    var y = document.getElementById('b').value;
    x = parseFloat(x);
    y = parseFloat(y);
    var kq = x/y;
    document.getElementById('final').innerText = ("Kết quả:" + kq);
}
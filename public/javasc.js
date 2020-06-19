setInterval(updateClock, 1000);

function updateClock(){
    let date = new Date();
    months=['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec']
    document.getElementById("day").innerHTML =date.getDate();
    document.getElementById("mnth").innerHTML =months[date.getMonth()];
    document.getElementById("yr").innerHTML =date.getFullYear();

}

updateClock();
var count=100;

let jan=[];
function janadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    jan.push({id:id,description:desp,price:price});
    janact();
    }
}
function jandel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<jan.length;i++)
    {
        if(jan[i].id!=idi)
        {
            cpy.push(jan[i]);
        }
    }
    jan=cpy;
    janact();
}
function janact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<jan.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+jan[i].id+'</div><div class="col-md-6">price:'+jan[i].description+'</div><div class="col-md-3">'+jan[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="janadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="jandel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let feb=[];
function febadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    feb.push({id:id,description:desp,price:price});
    febact();
    }
}
function febdel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<feb.length;i++)
    {
        if(feb[i].id!=idi)
        {
            cpy.push(jan[i]);
        }
    }
    feb=cpy;
    febact();
}
function febact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<feb.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+feb[i].id+'</div><div class="col-md-6">price:'+feb[i].description+'</div><div class="col-md-3">'+feb[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="febadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="febdel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let mar=[];
function maradd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    mar.push({id:id,description:desp,price:price});
    maract();
    }
}
function mardel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<mar.length;i++)
    {
        if(mar[i].id!=idi)
        {
            cpy.push(mar[i]);
        }
    }
    mar=cpy;
    maract();
}
function maract(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<mar.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+mar[i].id+'</div><div class="col-md-6">price:'+mar[i].description+'</div><div class="col-md-3">'+mar[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="maradd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="mardel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let apr=[];
function apradd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    apr.push({id:id,description:desp,price:price});
    apract();
    }
}
function aprdel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<apr.length;i++)
    {
        if(apr[i].id!=idi)
        {
            cpy.push(apr[i]);
        }
    }
    apr=cpy;
    apract();
}
function apract(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<apr.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+apr[i].id+'</div><div class="col-md-6">price:'+apr[i].description+'</div><div class="col-md-3">'+apr[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="apradd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="aprdel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let may=[];
function mayadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    may.push({id:id,description:desp,price:price});
    mayact();
    }
}
function maydel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<may.length;i++)
    {
        if(may[i].id!=idi)
        {
            cpy.push(may[i]);
        }
    }
    may=cpy;
    mayact();
}
function mayact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<may.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+may[i].id+'</div><div class="col-md-6">price:'+may[i].description+'</div><div class="col-md-3">'+may[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="mayadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="maydel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let june=[];
function juneadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    june.push({id:id,description:desp,price:price});
    juneact();
    }
}
function junedel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<june.length;i++)
    {
        if(june[i].id!=idi)
        {
            cpy.push(june[i]);
        }
    }
    june=cpy;
    juneact();
}
function juneact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<june.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+june[i].id+'</div><div class="col-md-6">price:'+june[i].description+'</div><div class="col-md-3">'+june[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="juneadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="junedel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let jul=[];
function juladd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    jul.push({id:id,description:desp,price:price});
    julact();
    }
}
function juldel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<jul.length;i++)
    {
        if(jul[i].id!=idi)
        {
            cpy.push(jul[i]);
        }
    }
    jul=cpy;
    julact();
}
function julact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<jul.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+jul[i].id+'</div><div class="col-md-6">price:'+jul[i].description+'</div><div class="col-md-3">'+jul[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="juladd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="juldel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let aug=[];
function augadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    aug.push({id:id,description:desp,price:price});
    augact();
    }
}
function augdel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<aug.length;i++)
    {
        if(aug[i].id!=idi)
        {
            cpy.push(aug[i]);
        }
    }
    aug=cpy;
    augact();
}
function augact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<aug.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+aug[i].id+'</div><div class="col-md-6">price:'+aug[i].description+'</div><div class="col-md-3">'+aug[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="augadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="augdel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let sept=[];
function septadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    sept.push({id:id,description:desp,price:price});
    septact();
    }
}
function septdel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<sept.length;i++)
    {
        if(sept[i].id!=idi)
        {
            cpy.push(sept[i]);
        }
    }
    sept=cpy;
    septact();
}
function septact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<sept.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+sept[i].id+'</div><div class="col-md-6">price:'+sept[i].description+'</div><div class="col-md-3">'+sept[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="septadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="septdel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}

let oct=[];
function octadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    oct.push({id:id,description:desp,price:price});
    octact();
    }
}
function octdel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<oct.length;i++)
    {
        if(oct[i].id!=idi)
        {
            cpy.push(oct[i]);
        }
    }
    oct=cpy;
    octact();
}
function octact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<oct.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+oct[i].id+'</div><div class="col-md-6">price:'+oct[i].description+'</div><div class="col-md-3">'+oct[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="octadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="octdel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}


let nov=[];
function novadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    nov.push({id:id,description:desp,price:price});
    novact();
    }
}
function novdel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<nov.length;i++)
    {
        if(nov[i].id!=idi)
        {
            cpy.push(nov[i]);
        }
    }
    nov=cpy;
    novact();
}
function novact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<nov.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+nov[i].id+'</div><div class="col-md-6">price:'+nov[i].description+'</div><div class="col-md-3">'+nov[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="novadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="novdel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}
let dec=[];
function decadd()
{   var id=count;
    count=count+1;
    var desp = document.forms["hero"]["desp"].value;
    var price = document.forms["hero"]["price"].value;
    if(desp=="")
    {
        window.alert("please enter the description");
    }
    else if(price=="")
    {
        window.alert("please enter the price");
    }
    else
    {
    dec.push({id:id,description:desp,price:price});
    decact();
    }
}
function decdel(){
    var idi = document.forms["delo"]["idd"].value;
    let cpy=[];
    for(let i=0;i<dec.length;i++)
    {
        if(dec[i].id!=idi)
        {
            cpy.push(dec[i]);
        }
    }
    dec=cpy;
    decact();
}
function decact(){
    document.getElementById("disp").innerHTML="";
    document.getElementById("entry").innerHTML="";
    document.getElementById("dele").innerHTML="";
    for(var i=0;i<dec.length;i++)
    {
        let dyna = document.createElement("div");
        dyna.innerHTML = '<div class="row dyna"> <div class="col-md-3">id:'+dec[i].id+'</div><div class="col-md-6">price:'+dec[i].description+'</div><div class="col-md-3">'+dec[i].price+'</div></div>';
        document.getElementById("disp").appendChild(dyna);
    }
    document.getElementById("entry").innerHTML='<div> <form  name="hero" ><div class="row"><div class="col-lg-8"><div class="row"><div class="col-md-8"><input class="form-control" type="text" value="" placeholder="Expense description" name="desp" required></div><div class="col-md-4"><input class="form-control"  type="number" name="price"placeholder="enter price"></div></div></div><div class="col-lg-4"><input type="button" onclick="decadd()" class="btn btn-info" value="add expense"></div></div></form></div>';
    document.getElementById("dele").innerHTML='<div> <form  name="delo"><div class="row"><div class="col-lg-8"><input class="form-control" type="number"  placeholder="expense id" name="idd"></div><div class="col-lg-4"><input type="button" onclick="decdel()" class="btn btn-danger"" value="delete expense"></div></div></form></div>';
}
function getIp(callback)
{
    function response(s)
    {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger()
    {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function() {
            response(s);
        };
        s.onerror = function() {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}

getIp(function (ip) {
    var data = new Date()
    dia = data.getDate()
    mes = data.getMonth()
    hor = data.getHours()
    min = data.getMinutes()
    ano = data.getFullYear()
 	if (dia < 10){
         dia = "0"+dia
     }
    if(mes < 10){
        mes ="0"+mes
    }
    if (hor < 10){
         hor = "0"+hor
     }
    if(min < 10){
        min ="0"+min
    }

    var date = `${dia+"/"+mes+"/"+ano}`
    var hour = ` ${hor+":"+min}`
    view(ip,date,hour)
});
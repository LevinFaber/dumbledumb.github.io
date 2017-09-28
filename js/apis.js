$(document).ready(function (){


    var httpClient = function(){
    this.get = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200){
                callback(xhr.responseText);
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    }
    }

    var vac = new httpClient();
    vac.get("http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=F8DF424E6BEF5A29D4722D548536B7F5&steamids=76561198077704323", 
    function(response){
        var varResponse = JSON.parse(response);
        console.log(varResponse);
    });




})


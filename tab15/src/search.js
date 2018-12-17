String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}
 
function search(query){
    switch(query.substr(0, 2)){
        case "~i":
            query = query.substr(3);
            window.location = "https://www.google.com/search?tbm=isch&q=" +
                query.replaceChars(" ", "%20");
            break;

        case "~y":
            query = query.substr(3);
            window.location =
                "https://www.youtube.com/results?search_query=" +
                query.replaceChars(" ", "%20");
            break;

        case "~t":
            query = query.substr(3);
            window.location =
                "https://torrentz.eu/search?q=" +
                query.replaceChars(" ", "%20");
            break;

        case "~n":
            query=query.substr(3);
            window.location = 
                "https://nyaa.se/?page=search&cats=0_0&filter=0&term=" + 
                query.replaceChars(" ", "%20");
            break;

    case "~m":
        query=query.substr(3);
        window.location = 
            "http://shop.tcgplayer.com/magic/product/show?ProductName=" + 
            query.replaceChars(" ", "%20");
            break; 

        default:
            window.location="https://www.google.com/#q=" +
                query.replaceChars(" ", "+");
    }
}
 
window.onload = function(){
    searchinput = document.getElementById("search");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
    startTime();
    var search_sqr = document.getElementById("search_sqr");
 
        }
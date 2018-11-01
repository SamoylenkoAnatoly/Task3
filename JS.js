var element1 = document.getElementById("left-side");
var element2 = document.getElementById("right-side");

function move(name) {
    element = document.getElementById(name);
    var ind = element.selectedIndex;
    if(name == "left-side")
    {
        if (ind == -1) {
            alert("You should choose option");
        }
        else {
            var newElement = element[ind].cloneNode(true);
            element1.removeChild(element[ind]);
            element2.append(newElement);
        }
     
    }
    else if(name == "right-side")
    {
        if (ind == -1) {
            alert("You should choose option");
        }
        else {
            var newElement = element[ind].cloneNode(true)
            element2.removeChild(element[ind]);
            element1.append(newElement);
        }      
    }
}
function moveAll(name) {

    element = document.getElementById(name);
    if(name == "left-side")
    {
        while(element.length > 0)
        {
            var newElement = element[0].cloneNode(true);
            element1.removeChild(element[0]);
            element2.append(newElement);
        }
        
    }
    else if(name == "right-side")
    {
    while(element.length > 0)
        {
            var newElement = element[0].cloneNode(true);
            element2.removeChild(element[0]);
            element1.append(newElement);
        }
    }
}
var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='partner'>";
var closeList = "</li>";

for (var i=0; i<6; i++) 
{
    fileNames.push("partner-"+(i+1));
    photos.push("<img src='images/partners_img/"+fileNames[i]+".png'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);
}
//Display all six image codes stored in the array
document.getElementById("partners").innerHTML = imageList.join();
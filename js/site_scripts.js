const photos = [];
const fileNames = [];
const imageList = [];
const openList = "<li class='partner'>";
const closeList = "</li>";

for (let i = 0; i < 5; i++) {
    fileNames.push(`partner-${i + 1}`);
    photos.push(`<img src='images/partners_img/${fileNames[i]}.png'>`);
    const image = openList + photos[i] + closeList;
    imageList.push(image);
}

// Display all image codes stored in the array
document.getElementById("partners").innerHTML = imageList.join("");
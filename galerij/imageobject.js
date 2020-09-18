let objectArray = [];

// Imageobject functie aanmaken
function Imageobject(name, description) {
    let imgObj = this;
    imgObj.name = name;
    imgObj.description = description;
    console.log(name);
}

function createObjects() {
    for (let counter = 0; counter < allImages.length; counter++) {
        objactArray.push(new Imageobject(allImages[counter], counter));
        
    }
}

function plaatsEenFoto(url) {
    let item = document.createElement('div');
    item.className = 'item';
    let deFoto = document.createElement('img');
    deFoto.src = url;
    deFoto.alt = 'Turks eten';
    item.append(deFoto);
    houder.append(item);
}

createObjects();

function createJSON() {
    let id = document.getElementById( elementid: 'json');
    
}
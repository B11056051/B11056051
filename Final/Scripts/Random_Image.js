const animalImage = document.getElementById('animal-img');
const animalButton = document.getElementsByClassName('btn-animal')[0];
var Choice_animals = document.getElementById('Animals_Choice'); //選擇的種類


var images = {
    'Dog': 'https://dog.ceo/api/breeds/image/random',
    'Cat': 'https://api.thecatapi.com/v1/images/search',
    'Fox': 'https://randomfox.ca/floof'
}

Random_Animal();

animalButton.addEventListener('click', Random_Animal);

function Random_Animal() {
    if (Choice_animals.value in images) {
        fetch(images[Choice_animals.value])
            .then(response => response.json())
            .then(data => {
                animalImage.innerHTML = `<img src="${data.message || data.image || data[0].url}"/>`;
            })
    } else if (Choice_animals.value == "All") {
        var Array_random = function(obj) {
            var keys = Object.keys(obj);
            return obj[keys[keys.length * Math.random() << 0]];
        };
        fetch(Array_random(images))
            .then(response => response.json())
            .then(data => {
                animalImage.innerHTML = `<img src="${data.message || data.image || data[0].url}"/>`;
            })
    }
}
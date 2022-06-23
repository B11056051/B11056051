const dogImage = document.getElementById('dog-img');
const dogButton = document.getElementById('btn-dog');

fetchDogImage()

dogButton.addEventListener('click', fetchDogImage);

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImage.innerHTML = `<img src="${data.message}"/>`;
        })
}
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
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else if (response.status === 404) {
                    Toast_Waring("對方網址掛了...再等一段時間吧!");
                    return Promise.reject('error 404')
                } else {
                    return Promise.reject('some other error: ' + response.status)
                }
            })
            .then(data => {
                animalImage.innerHTML = `<img src="${data.message || data.image || data[0].url}"/>`;
            })
    } else if (Choice_animals.value == "All") {
        var Array_random = function(obj) {
            var keys = Object.keys(obj);
            return obj[keys[keys.length * Math.random() << 0]];
        };
        fetch(Array_random(images))
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else if (response.status === 404) {
                    Toast_Waring("對方網址掛了...再等一段時間吧!");
                    return Promise.reject('error 404')
                } else {
                    return Promise.reject('some other error: ' + response.status)
                }
            })
            .then(data => {
                animalImage.innerHTML = `<img src="${data.message || data.image || data[0].url}"/>`;
            })
    }
}

//彈出提示框(警告詢問)
var toastLiveExample_Waring = document.getElementById('liveToast-Waringg'); // 提示框
var host_name_Waring = document.getElementById('host_name_Waringg'); //寫入訊息

function Toast_Waring(message) {
    host_name_Waring.innerHTML = message;
    let toast = new bootstrap.Toast(toastLiveExample_Waring);
    toast.show();
}
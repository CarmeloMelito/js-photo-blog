let img = 'https:lanciweb.github.io/demo/api/pictures';


const cardContainer = document.querySelector('.container')
console.log(cardContainer);

axios.get(img)
    .then(response => {
        const addImage = response.data
        console.log(addImage)


        let image = '';

        addImage.forEach(element => {
            image += ` 
        <div class="card-container">
            <div class="pin"><img src="img/pin.svg" alt="pin"></div>
        <img src="${element.url}" alt="${element.title}" style="width: 100%; height: 90%; object-fit: cover; ">
            <div class="description">
                 <h4>${element.title}</h4>
                    <p>${element.date}</p>
            </div>
        </div>`;
            console.log(image)

        })
        cardContainer.innerHTML = image
    });








let img = 'https:lanciweb.github.io/demo/api/pictures';


const cardContainer = document.querySelectorAll('cardContainer')
//console.log(cardContainer);

axios.get(img)
    .then(response => {
        const addImage = response.data
        console.log(addImage)


        let image = [];

        addImage.forEach(element => {
            image += `<div class="card-container">
    <div class="pin"><img src="img/pin.svg" alt="pin"></div>
    <!-- <img src="img prova.jpg" alt="propva-img" > -->
    <div class="description">
        <h4></h4>
    </div>
</div>`;
            console.log(image)
        })
    });


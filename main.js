let img = 'https:lanciweb.github.io/demo/api/pictures';


const cardContainer = document.querySelector('.container')
console.log(cardContainer);
// AXIOS

axios.get(img)
    .then(response => {
        const addImage = response.data
        console.log(addImage)


        let image = '';

        addImage.forEach(element => {
            image += ` 
        <div class="card-container">
            <div class="pin"><img src="img/pin.svg" alt="pin"></div>
        <img  src="${element.url}" alt="${element.title}" style="width: 100%; height: 90%; object-fit: cover; ">
            <div class="description">
                    <p>${element.date}</p>
                     <h4>${element.title}</h4>
            </div>
        </div>`;
            // console.log(image);
        })
        cardContainer.innerHTML = image
    });




const overlay = document.querySelector('.button');
//console.log(overlay);

const overlayImage = document.getElementById('overlay-image')
//console.log(overlayImage);

const buttonOver = document.getElementById('button-over');
//console.log(buttonOver);

// IMMAGINE
document.querySelector('.container').addEventListener('click', (element) => {
    overlay.classList.remove('hidden');
    console.log('ho clickato l immagine');
}
);


//Bottone
buttonOver.addEventListener('click', () => {
    console.log('ho clickato il bottone')
    overlay.classList.remove('hidden');
})






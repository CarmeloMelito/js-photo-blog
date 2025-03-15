let img = 'https:lanciweb.github.io/demo/api/pictures';
let image = []

axios.get(img)
    .then(response => {
        image.push(response.data)
        console.log(image)



    })
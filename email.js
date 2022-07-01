let url = "https://jsonplaceholder.typicode.com/photos";

fetch(url)
.then((res) => {
    return res.json();
})
.then((responseFromBackend) => {
    let photos = responseFromBackend;
    photos.map((photo) => {
       console.log(photo)
    })
})
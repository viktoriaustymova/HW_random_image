const showImageButton  = document.getElementById("showImage");
const image = document.getElementById("image");
const url ="https://dog.ceo/api/breeds/image/random";

function loadImage() {
        let response= fetch(url);
        response.then((response)=>{
        data = response.json();
        data.then((res)=>{
            console.log(res);   
         })
        image.src = data.message;
    });  
    
}

showImageButton.addEventListener("click", () => {
    loadImage();
});


const showImageButton  = document.getElementById('showImage');
const image = document.getElementById('image');

const url ="https://dog.ceo/api/breeds/image/random";
showImageButton.addEventListener("click", loadImage);

function loadImage() {
    fetch(url).then((response)=>{
        if(response.ok){
            return response.json();
        } else {
            return Promise.reject(new Error(response.status +" " + response.statusText));
        }
    }
    ).then((res)=>{
        if(res.status == "success" ) {
            image.src=res.message;
        } else {
            return Promise.reject(new Error("something goes wrong! Status "+ res.status));
        }
    }).catch ( (qwer)=>{
        console.log(qwer);  
     }
 );

}




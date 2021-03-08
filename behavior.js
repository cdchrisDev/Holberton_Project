document.addEventListener("DOMContentLoaded", function(event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");
    
    thumbnailElement.addEventListener("click", function() {
       thumbnailElement.className = "";
    
       if (thumbnailElement.className == "") {
            thumbnailElement.addEventListener("click", function() {
                thumbnailElement.className = "small";
            });
        }else {
            thumbnailElement.addEventListener("click", function() {
                thumbnailElement.className = ""
            });
        }
       });
    }); 

     //better way to do it 

/*document.getElementById("smart_thumbnail").addEventListener("click", ()=> {
    var element = document.getElementById("smart_thumbnail")
    element.classList.toggle("small")
    element.classList.toggle("big")
}) */

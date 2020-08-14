document.getElementById("h1").addEventListener("click", function() {
    document.getElementById("h1").style.color = "black";
    document.getElementById("h1").style.textDecoration = "underline";
    alert("You found my secret link! Please check out my project, ChinaForUs. The link is: https://davidsongchen.wixsite.com/chinaforus");
});



document.getElementById("h1").addEventListener("mouseout", function() {
    document.getElementById("h1").style.color = "#FA42BA";
    document.getElementById("h1").style.textDecoration = "none";
});


document.getElementById("li1").addEventListener("click", function() {
    document.getElementById("picture").src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80"
});

document.getElementById("li2").addEventListener("click", function() {
    document.getElementById("picture").src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"
});

document.getElementById("li3").addEventListener("click", function() {
    document.getElementById("picture").src="https://www.hamline.edu/uploadedImages/Hamline_WWW/CLA/_CLA_Programs/Legal_Studies/Images/mock-trial.jpg?n=5538"
});

document.getElementById("li4").addEventListener("click", function() {
    document.getElementById("picture").src="https://static01.nyt.com/images/2017/09/25/dining/bonebrothchickenstock/bonebrothchickenstock-articleLarge.jpg"
});

document.getElementById("instrument1").addEventListener("click", function() {
    alert("Correct! Next clue: Of all these lovely creatures, there shall be one I despise. Find the distinctive feature, and it shall meet its demise.")

});

document.getElementById("instrument2").addEventListener("click", function() {
    alert("Incorrect.")
});

document.getElementById("instrument3").addEventListener("click", function() {
    alert("Incorrect.")
});

document.getElementById("poke1").addEventListener("click", function() {
    alert("Incorrect.")

});

document.getElementById("poke2").addEventListener("click", function() {
    alert("Correct! What a fun game. So sad it's over. Or... is it? Find something. Anything. Nothing. Something.")
});

document.getElementById("poke3").addEventListener("click", function() {
    alert("Incorrect.")
});

document.getElementById("clue3").addEventListener("click", function(){
    alert("Congrats. You solved the puzzle! Let's move on to the next page!")
});


//


document.getElementById("dogButton1").addEventListener("click", function(){
    document.getElementById("dogPic").src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=980:*"
});


document.getElementById("dogButton2").addEventListener("click", function(){
    document.getElementById("dogPic").src="https://d3olh6krvu9a10.cloudfront.net/static/cache/500x500/Australian%20Shepherd.jpeg"
});


document.getElementById("dogButton3").addEventListener("click", function(){
    document.getElementById("dogPic").src="http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg"
});


document.getElementById("dogButton4").addEventListener("click", function(){
    document.getElementById("dogPic").src="http://cdn.akc.org/content/article-body-image/border_collie_dog_pictures_.jpg"
});

//


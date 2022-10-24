// Get the Images
let imageOne = document.querySelector('.icon1')
let imageTwo = document.querySelector('.icon2')
let imageThree = document.querySelector('.icon3')
let imageFour = document.querySelector('.icon4')
let imageFive = document.querySelector('.icon5')

// add ShowText function to each one of them
imageOne.addEventListener("click", ShowAnsOne)
imageTwo.addEventListener("click", ShowAnsTwo)
imageThree.addEventListener("click", ShowAnsThree)
imageFour.addEventListener("click", ShowAnsFour)
imageFive.addEventListener("click", ShowAnsFive)

// get the answers
let answer1 = document.querySelector('.ans1');
let answer2 = document.querySelector('.ans2');
let answer3 = document.querySelector('.ans3');
let answer4 = document.querySelector('.ans4');
let answer5 = document.querySelector('.ans5');

// Show answer one 
function ShowAnsOne () {
    if (answer1.classList.contains('hide')) {

        // show the Text
        answer1.classList.remove("hide");

        // add the after styling
        imageOne.classList.add("icon1-after-clicking-on-image-one");
        imageTwo.classList.add("icon2-after-clicking-on-image-one");
        imageThree.classList.add('icon3-after-clicking-on-image-one');
        imageFour.classList.add('icon4-after-clicking-on-image-one') ;
        imageFive.classList.add('icon5-after-clicking-on-image-one') ;
    }else{

        // hide the Text
        answer1.classList.add("hide");

        // remove the after styling
        imageOne.classList.remove("icon1-after-clicking-on-image-one");
        imageTwo.classList.remove("icon2-after-clicking-on-image-one");
        imageThree.classList.remove("icon3-after-clicking-on-image-one");
        imageFour.classList.remove("icon4-after-clicking-on-image-one");
        imageFive.classList.remove("icon5-after-clicking-on-image-one");

    }
}

// Show answer Two 
function ShowAnsTwo () {
    if (answer2.classList.contains('hide')) {
        // show the Text
        answer2.classList.remove("hide");

        // add the after styling
        imageOne.classList.add("icon1-after-clicking-on-image-two");
        imageTwo.classList.add("icon2-after-clicking-on-image-two");
        imageThree.classList.add("icon3-after-clicking-on-image-two");
        imageFour.classList.add("icon4-after-clicking-on-image-two");
        imageFive.classList.add("icon5-after-clicking-on-image-two");
    }else{
        // hide the Text
        answer2.classList.add("hide");

        // remove the after styling
        imageOne.classList.remove("icon1-after-clicking-on-image-two");
        imageTwo.classList.remove("icon2-after-clicking-on-image-two");
        imageThree.classList.remove("icon3-after-clicking-on-image-two");
        imageFour.classList.remove("icon4-after-clicking-on-image-two");
        imageFive.classList.remove("icon5-after-clicking-on-image-two");
    }
}

// Show answer Three 
function ShowAnsThree () {
    if (answer3.classList.contains('hide')) {
        
        // show the Text
        answer3.classList.remove("hide");

        // add the after styling
        imageTwo.classList.add("icon2-after-clicking-on-image-three");
        imageThree.classList.add("icon3-after-clicking-on-image-three");
        imageFour.classList.add("icon4-after-clicking-on-image-three")
        imageFive.classList.add("icon5-after-clicking-on-image-three")

    }else{
        // hide the Text
        answer3.classList.add("hide");

        // remove the after styling
        imageOne.classList.remove("icon1-after-clicking-on-image-three");
        imageTwo.classList.remove("icon2-after-clicking-on-image-three");
        imageThree.classList.remove("icon3-after-clicking-on-image-three"); 
        imageFour.classList.remove("icon4-after-clicking-on-image-three"); 
        imageFive.classList.remove("icon5-after-clicking-on-image-three");
    }
}
// Show answer Four 
function ShowAnsFour () {
    if (answer4.classList.contains('hide')) {
        // show the Text
        answer4.classList.remove("hide");

        // add the after styling
        imageOne.classList.add("icon1-after-clicking-on-image-four"); 
        imageTwo.classList.add("icon2-after-clicking-on-image-four");    
        imageThree.classList.add("icon3-after-clicking-on-image-four");        
        imageFour.classList.add("icon4-after-clicking-on-image-four");    
        imageFive.classList.add("icon5-after-clicking-on-image-four");   

    } else{
        // hide the Text
        answer4.classList.add("hide");

        // remove the after styling
        imageOne.classList.remove("icon1-after-clicking-on-image-four");
        imageTwo.classList.remove("icon2-after-clicking-on-image-four");
        imageThree.classList.remove("icon3-after-clicking-on-image-four");
        imageFour.classList.remove("icon4-after-clicking-on-image-four");
        imageFive.classList.remove("icon5-after-clicking-on-image-four");
    }
}
// Show answer Five 
function ShowAnsFive () {
    if (answer5.classList.contains('hide')) {

        // show the Text
        answer5.classList.remove("hide");

        // add the after styling
        imageOne.classList.add("icon1-after-clicking-on-image-five"); 
        imageTwo.classList.add("icon2-after-clicking-on-image-five"); 
        imageThree.classList.add("icon3-after-clicking-on-image-five"); 
        imageFour.classList.add("icon4-after-clicking-on-image-five"); 
        imageFive.classList.add("icon5-after-clicking-on-image-five"); 
    }else{
        // hide the Text
        answer5.classList.add("hide");

        // remove the after styling 
        imageOne.classList.remove("icon1-after-clicking-on-image-five");
        imageTwo.classList.remove("icon2-after-clicking-on-image-five");
        imageThree.classList.remove("icon3-after-clicking-on-image-five");
        imageFour.classList.remove("icon4-after-clicking-on-image-five");
        imageFive.classList.remove("icon5-after-clicking-on-image-five");
    }
}

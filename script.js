const arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"] ;
const btn = document.getElementById("btn");
const color = document.querySelector(".color") ;

btn.addEventListener('click', function(){
    let randomNumber = "#" ;
    for(let i = 0 ; i< 6 ; i++){
        randomNumber += arr[newly()] ;

    }
    console.log(randomNumber) ;
    color.textContent = randomNumber ;
    document.body.style.backgroundColor = randomNumber ;

})

function newly(){
    return Math.floor(Math.random()*arr.length) ;
}  
let player = document.querySelector(".player");
let startBtn = document.querySelector(".start-button");
let scenery = document.querySelector(".scenery");


let foodArray = ['hamburger', 'fries', 'tomato', 'banana'];

let jump = function() 
{
    scenery.removeEventListener("click", jump);
    player.classList.add("jump");
    setTimeout(function()
    {
        player.classList.remove("jump");
        player.classList.add("fall");
        setTimeout(function(){
            player.classList.remove("fall");
            scenery.addEventListener("click", jump);
        },500);
    },400);
}



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! AFTER START EVENT FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

startBtn.addEventListener("click", function()
{
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! MENU STYLE FUNCTIONS ETC !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let mainMenu= document.querySelector(".start-menu");
    mainMenu.style.display = "none";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SCORE FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    let score = document.querySelector(".score");
    let points = 0;
    score.textContent = points;

    // let addScore = setInterval(function()
    // {
    //     points++;
    //     score.textContent = points;

    // },10000);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SPAWN FOOD FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


   let spawnFood = setInterval(function()
    {
            let food = document.createElement("div");
            scenery.appendChild(food);
            food.classList.add("food");
            food.classList.add("foodSlide");

           
                
                let i = Math.floor(Math.random()*4);

                food.classList.add(foodArray[i]);
            
            

           

            let checkDead = setInterval(function()
            {
                let chefBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
                let foodLeft = parseInt(window.getComputedStyle(food).getPropertyValue("left"));
                
                if(foodLeft<54 && foodLeft>=10 && i<2  && chefBottom<=134){
                   
                    clearInterval(spawnFood);
                    clearInterval(checkDead);
                    // clearInterval(addScore);
                    mainMenu.style.display = "flex";
                }
                else if(foodLeft<54 && foodLeft>=10 && i>=2 && chefBottom<=134){
                   
                    points++;
                    score.textContent=points;
                }
                

            },100);

            setTimeout(function()
            {
                food.remove();
                clearInterval(checkDead);
            },1800);
            
     },1500);
        
    
});



scenery.addEventListener("click", jump);
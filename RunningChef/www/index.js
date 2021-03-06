window.onload = function()
{




let player = document.querySelector(".player");
let startBtn = document.querySelector(".start-button");
let scenery = document.querySelector(".scenery");
let score_container = document.querySelector(".score_container");
let dead_container = document.querySelector(".dead-container");
let foodArray = ['hamburger', 'fries', 'tomato', 'banana', 'avocado', 'broccoli'];
let cancel_btn = document.querySelector(".cancel");

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
        },300);
    },300);
}



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! AFTER START EVENT FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

startBtn.addEventListener("click", function()
{
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! MENU STYLE FUNCTIONS ETC !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let mainMenu= document.querySelector(".start-menu");
    mainMenu.style.display = "none";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SCORE FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    score_container.style.display = "flex";
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

           
                
                let i = Math.floor(Math.random()*6);

                food.classList.add(foodArray[i]);
            
            

           

            let checkDead = setInterval(function()
            {
                let chefBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
                let foodLeft = parseInt(window.getComputedStyle(food).getPropertyValue("left"));
                
                if(foodLeft<54 && foodLeft>=10 && i<2  && chefBottom<=134){
                   
                    clearInterval(spawnFood);
                    
                    clearInterval(checkDead);
                    // clearInterval(addScore);
                    dead_container.style.display = "flex";

                    let timer = document.querySelector(".timer");
                    timer.className = "timer";
                    let i=5;
                   let time =  setInterval(function()
                    {
                        if(i==0)
                        {   
                            clearInterval(time);

                        }
                        else{
                            
                            timer.classList.add(`timer${i}`);
                        i--
                        }
                        
                    },1000);
                    
                    
                }
                if(foodLeft<54 && foodLeft>=10 && i>=2 && chefBottom<=134){
                   
                    points++;
                    score.textContent=points;
                }
                

            },90);

            setTimeout(function()
            {
                food.remove();
                clearInterval(checkDead);
            },1800);
            
     },1500);
        
    
});



scenery.addEventListener("click", jump);
cancel_btn.addEventListener("click", function() 
{
    dead_container.style.display = "none";
    let mainMenu= document.querySelector(".start-menu");
    score_container.style.display ="none";
    mainMenu.style.display = "flex";
});


}
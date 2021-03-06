window.onload = function()
{
let points;

let player = document.querySelector(".player");
let startBtn = document.querySelector(".start-button");
let scenery = document.querySelector(".scenery");
let score_container = document.querySelector(".score_container");
let dead_container = document.querySelector(".dead-container");
let foodArray = ['hamburger', 'fries', 'tomato', 'banana', 'avocado', 'broccoli'];
let cancel_btn = document.querySelector(".cancel");
let ad_btn = document.querySelector(".advert");
let ad_container = document.querySelector("#advert-container");

let ifCancel;
let reviveTimes;




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
    reviveTimes=0;
    

    let mainMenu= document.querySelector(".start-menu");
    mainMenu.style.display = "none";

    
    
    score_container.style.display = "flex";
    let score = document.querySelector(".score");
    points = 0;
    score.textContent = points;

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
                    dead_container.style.display = "flex";

                    ifCancel=0;

                    let timer = document.querySelector(".timer");
                    timer.className = "timer";
                    let i=5;
                   let time =  setInterval(function()
                    {
                        if(i==0)
                        {   
                            clearInterval(time);
                            if(reviveTimes===0 && ifCancel===0)
                            {
                                    cancel_btn.click();
                            }

                            

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




let watch_ad = function() 
{
    reviveTimes=1;
    dead_container.style.display = "none";
   ad_container.style.display = "flex";

   let adTimer = document.querySelector(".ad-time");
   let time = 3;

   adTimer.innerHTML = time;

   let countAd = setInterval(function()
   {

    if(time==0)
    {
        ad_container.style.display="none";
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
                let score = document.querySelector(".score");
                let chefBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
                let foodLeft = parseInt(window.getComputedStyle(food).getPropertyValue("left"));
                
                if(foodLeft<54 && foodLeft>=10 && i<2  && chefBottom<=134){
                   
                    clearInterval(spawnFood);
                    
                    clearInterval(checkDead);
                    dead_container.style.display = "flex";

                    
                    
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
        clearInterval(countAd);
    }

    else 
    {
        adTimer.innerHTML = time;
        time--;
    }
    

   },1000);
}





scenery.addEventListener("click", jump);

cancel_btn.addEventListener("click", function() 
{
    
    ifCancel=1;
    dead_container.style.display = "none";
    let mainMenu= document.querySelector(".start-menu");
    score_container.style.display ="none";
    mainMenu.style.display = "flex";
    
});

ad_btn.addEventListener("click", function()
{
    if(reviveTimes===1)
    {
        dead_container.style.display = "none";
        let mainMenu= document.querySelector(".start-menu");
        score_container.style.display ="none";
        mainMenu.style.display = "flex";
    }

    else 
    {
        watch_ad();
    }
});


}
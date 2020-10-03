let player = document.querySelector(".player");
let startBtn = document.querySelector(".start-button");
let scenery = document.querySelector(".scenery");




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
    },500);
}

scenery.addEventListener("click", jump);









startBtn.addEventListener("click", function()
{
    let mainMenu= document.querySelector(".start-menu");
    mainMenu.style.display = "none";

    

   let spawnFood = setInterval(function()
    {
            let food = document.createElement("div");
            scenery.appendChild(food);
            food.classList.add("food");
            food.classList.add("foodSlide");

            let checkDead = setInterval(function()
            {
                let chefBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
                let foodLeft = parseInt(window.getComputedStyle(food).getPropertyValue("left"));
                
                if(foodLeft<54 && foodLeft>=10&& chefBottom<=134){
                    clearInterval(spawnFood);
                    clearInterval(checkDead);
                    mainMenu.style.display = "flex";
                }
               
                
            },10) 

            setTimeout(function()
            {
                food.remove();
                clearInterval(checkDead);
            },1990);
            
     },2000);
        
    
});





(function(){
    let loaderBar = document.querySelector(".loader");
    let button = document.querySelector("button");
    

    button.addEventListener("click", runLoader);

    let percentage = 0;

    


    function setRandomInterval() {
        return Math.floor((Math.random() * 10) + 5);
    }
    
    function getARandomInterval() {
        return Math.floor((Math.random() * 5) + 1);
    }
    
     function runLoader() {
         
         setInterval(function(){
             if(percentage < 120) {
                 loaderBar.style.setProperty('--progress', `${percentage}%`);
                 percentage += setRandomInterval();
                 if(percentage > 120) {
                    document.querySelector(".dog").style.display = "block";
                }
             }

             
            console.log("boom")
        }, getARandomInterval()*100);
        
     }

    
    
    

    
})()





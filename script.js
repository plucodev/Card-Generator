window.onload = () =>{
    
    let suiteArray =["&#9824", "&#9827", "&#9829", "&#9830"];
    
   
    let numberArray =["A",2,3,4,5,6,7,8,9,10,"J", "Q", "K"];
    
    
    // let completeRandomCardArray = [];
    
    // completeRandomCardArray.push(suiteArray[Math.floor(Math.random()*suiteArray.length)]);
    // completeRandomCardArray.push(numberArray[Math.floor(Math.random()*numberArray.length)]);
    
    let suit = suiteArray[Math.floor(Math.random()*suiteArray.length)];
    let numb = numberArray[Math.floor(Math.random()*numberArray.length)]
    
    
    // if(completeRandomCardArray[0] === "&#9829" || completeRandomCardArray[0] === "&#9830"){
    //     document.querySelector("#custom-card-header").classList.add("heart-diamond");
    //     document.querySelector("#custom-card-footer").classList.add("heart-diamond");
        
        if (suit ===  "&#9829" || suit === "&#9830") {
            document.querySelector("#custom-card-header").classList.add("heart-diamond");
            document.querySelector("#custom-card-footer").classList.add("heart-diamond");
        }
 

    // }
    document.querySelector("#custom-card-header").innerHTML = suit;
    document.querySelector("#custom-card-body").innerHTML = numb;
    document.querySelector("#custom-card-footer").innerHTML = suit;
    
};

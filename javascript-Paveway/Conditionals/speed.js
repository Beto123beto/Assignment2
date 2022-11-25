let speed;
function calspd(speed){
    if(speed <= 10){
        return "slow";
    }else if(speed >10 && speed<=50){
        return "Average";
    } else if(speed>50 && speed<=150){
        return "Fast";
    }else if(speed>150 && speed <= 1000){
        return "Ultra Fast"
    }
    else if(speed>1000){
        return "Extremely Fast";
    }
    
}
console.log(calspd(3500));
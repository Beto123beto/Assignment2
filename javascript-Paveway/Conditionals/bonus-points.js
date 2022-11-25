let num, bonus;
function points(num){
    if (num <= 100){
        bonus = 5;


    } else if(num > 100 && num<1000){
        bonus = 0.2 * num;
    }
    else if(num > 1000){
        bonus = 0.1* num;
    }

    if(num%2==0){
        bonus += 1;

    }else if(num%5==0 && num%10 != 0){
        bonus += 2;
    }
    console.log(bonus)
    return(num+bonus)
}
console.log(points(15875));

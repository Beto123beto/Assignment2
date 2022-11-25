let min , hrs;
function time15(min, hrs){
    min += 15;
    if(min > 60){

        hrs += 1;
        if(hrs>23){
            hrs=0;
        }
        min -= 60;

    }
    if(min<10){
        min = "0"+min
    }
    return (hrs + " : "+ min)
}

console.log(time15(49, 12));
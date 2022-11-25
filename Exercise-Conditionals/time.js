let x, y, z;
function time(x,y,z){
    let sum=x+y+z;
    let sec = sum % 60;
   if(x>50 || y>50 || z>50 || z<0 || y<0 || x<0){
    return ("All three Input must be Between 0 - 50");
   }else{
    if(sec<10){
        sec += "0"+sec
    }
    if(sum >= 120 ){
        return (2 + " : "+ sec);
    }else if(sum >=60){
        return (1 + " : "+ sec);
    } else if(sum >=59){
        return (0 + " : "+ sec);
    }

   }
}
time(35, 45, 44);
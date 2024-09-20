function checkDigitsInName(name) {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
  if (typeof name === "string") {
    for(num of numbers){
        if(name.includes(num) === true){
            return true;
        }
    }
    return false;
  }
  else{
    return "Invalid Input";
  }
}


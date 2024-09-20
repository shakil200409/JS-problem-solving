function calculateFinalScore(obj) {
    if(typeof(obj)=== "object"){
        let score = obj.testScore + obj.schoolGrade;
        if(obj.isFamily === true){
            score += 20;
        }

        if(score >= 80){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return "Invalid Input";
    }
}

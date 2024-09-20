function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) === true && typeof(serialNumber) === 'number'){
        let totalTime = 0;
        for(let i = 0; i< waitingTimes.length; i++){
            totalTime += waitingTimes[i];
        }
        const avgTime = totalTime / waitingTimes.length;
        
        const moreToGo = (serialNumber - 1) - waitingTimes.length;

        const wait = avgTime * moreToGo;

        return wait;
    }
    else{
        return "Invalid Input";
    }
}


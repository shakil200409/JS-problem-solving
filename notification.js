function sendNotification(email) {
    const massage = 'sent you an email from';
    if (email.match('@')){
        const cut = email.split('@');
        const first = cut[0];
        const last = cut[1];
        const notification = first.toString() + ' ' + massage + ' '+ last.toString();
        return notification;
    }
    else{
        return "Invalid Input"
    }
    
}
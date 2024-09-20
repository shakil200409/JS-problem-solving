function calculateTax(income, expenses) {
    if((income, expenses) <= 0){
        const invalid = "Invalid Input";
        return invalid;
    }
    else{
        const tax = (income - expenses) * .20;

        return tax;
    }
}
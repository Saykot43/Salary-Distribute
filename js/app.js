
document.getElementById('calculation').addEventListener('click', function(){

    const totalIncome = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothesInput = document.getElementById('clothes-input').value;
    if (totalIncome<0 || foodInput<0 || rentInput<0 || clothesInput<0){
        window.alert('please insert positive number');
    }else{
        // expenses calculation
    const totalExpenses = parseInt(foodInput) + parseInt(rentInput)+parseInt(clothesInput);
    
    if(totalExpenses>totalIncome){
        window.alert('Your income is so low to your expenses');
    }else{
        document.getElementById('total-expenses').innerText = totalExpenses;
        const totalBalance= totalIncome-totalExpenses;
        document.getElementById('balance').innerText = totalBalance;
        // calculation(' ');
        // Saving calculation
        document.getElementById('save-btn').addEventListener('click', function(){
            // 20% saving calculation
            // const saving = totalIncome*.2;
            const SaveTaka = document.getElementById('save-money').value;
            const saveMoney=parseFloat(SaveTaka);
            const saving=totalIncome*(saveMoney/100);
            console.log(saving);
            if(saving>totalBalance){
                window.alert("Wop's!! you hove not enough money for saving ");
            }else{
                document.getElementById('saving-amount').innerText=saving;
            document.getElementById('saving-balance').innerText=totalBalance-saving;
            }
    
        });
    }
    
    }
    


});
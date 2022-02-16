document.getElementById('calculation').addEventListener('click', function(){
    const totalIncome = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothesInput = document.getElementById('clothes-input').value;
    const totalExpenses = parseInt(foodInput) + parseInt(rentInput)+parseInt(clothesInput);
    const totalExpense = parseInt(totalIncome) - totalExpenses;
    document.getElementById('total-expenses').innerText = totalExpenses;
    const rBalance= totalIncome-totalExpenses ;
    
    document.getElementById('balance').innerText = rBalance;
    
    // Saving calculation
    document.getElementById('save-btn').addEventListener('click', function(){
        const saving = rBalance*.2;
        document.getElementById('saving-amount').innerText=saving;
        document.getElementById('saving-balance').innerText=rBalance-saving;

    });


});
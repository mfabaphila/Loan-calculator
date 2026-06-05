const button = document.getElementById("submitBtn");
button.addEventListener("click", function(){

    const name= (document.getElementById("name").value);
    const income = Number(document.getElementById("income").value);
    const monthlyExpenses = Number(document.getElementById("monthlyExpenses").value);
    const totalDebt = Number(document.getElementById("totalDebt").value);
           
    // console.log("totalDebt:", totalDebt);
    // console.log("income:", income);
    // console.log("monthlyExpenses:", monthlyExpenses);

   
    const remainingAmount = (income - monthlyExpenses - totalDebt);
    document.getElementById("remainingAmount").value ="R" + remainingAmount;

    const remainingPercentage = (remainingAmount/income*100);
    document.getElementById("remainingPercentage").value = remainingPercentage + "%";

     const suggestedLoan = (remainingAmount* 0.5);
    document.getElementById("suggestedLoan").value ="R" + suggestedLoan;

    let advice ="";

    if(remainingPercentage<=30){
        advice = name + " " + "Consider other options before taking a loan. Read the list of suggestions below"
    }

    else if(remainingPercentage<=50){
        advice =  name + " " +  "You can take a loan if you have an emegerncy, alternativey consider other options. See the list of suggestions below"
    }

    else{
        advice =  name + " " +  "You in a good position to take a loan, just be very careful not to borrow too much."
    }
    document.getElementById("advice").textContent = advice;

})
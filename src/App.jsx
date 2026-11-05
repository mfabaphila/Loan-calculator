
import { useState } from "react";
import "./styles.css"

export default function App() {

    const [name, setName] = useState("");
    const [income, setIncome] = useState("");
    const [monthlyExpenses, setMonthlyExpenses] = useState("");
    const [totalDebt, setTotalDebt] = useState("");
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('')

    const [remainingAmount, setRemainingAmount] = useState("");
    const [remainingPercentage, setRemainingPercentage] = useState("");
    const [suggestedLoan, setSuggestedLoan] = useState("");
    const [advice, setAdvice] = useState("");
    const [nameError, setNameError] = useState('');
    const [incomeError, setIncomeError] = useState('');
    const [expensesError, setExpensesError] = useState('');
    const [debtError, setDebtError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const loginUser = () => {
        if (validation() === true) {
            calculations()
        }
        return true
    }

    const validation = () => {
        setNameError("");
        setSurnameError("");
        setEmailError("");
        setIncomeError("");
        setExpensesError("");
        setDebtError("");

        if (name.trim() === "") {
            setNameError("A Name is required")
            return false
        }

        if (surname.trim() === "") {
            setSurnameError("A surname is required")
        }

        if (email.trim() === "") {
            setEmailError("email is required")
        }

        if (income.trim() === "") {
            setIncomeError("Income is required");
            return false;
        }

        if (monthlyExpenses.trim() === "") {
            setExpensesError("Expenses are required");
            return false;
        }

        if (totalDebt.trim() === "") {
            setDebtError("Debt is required");
            return false;
        }

        return true
    }

    function calculations() {

        const remainingAmount = (
            Number(income) - Number(monthlyExpenses) - Number(totalDebt)
        );

        setRemainingAmount("R" + remainingAmount);

        const remainingPercentage = (remainingAmount / Number(income) * 100);

        setRemainingPercentage(remainingPercentage + "%");

        const suggestedLoan = (remainingAmount * 0.5);

        setSuggestedLoan("R" + suggestedLoan);

        let advice = "";

        if (remainingPercentage <= 30) {
            advice = name + " " + "Consider other options before taking a loan. Read the list of suggestions below";
        }

        else if (remainingPercentage <= 50) {
            advice = name + " " + "You can take a loan if you have an emergency, alternatively consider other options. See the list of suggestions below";
        }

        else {
            advice = name + " " + "You are in a good position to take a loan, just be very careful not to borrow too much.";
        }

        setAdvice(advice);
    }

    return (
        <>

            <h1>Loan Calculator</h1>
            <h3>How Much Can I afford to loan?</h3>

            <div className="loan">

                <div className="Personal Details">

                    <h2>Personal Details</h2>

                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p style={{ color: "red", fontStyle: "italic" }}>{nameError}</p>

                    <label>Surname</label>
                    <input
                        type="text"
                        placeholder="Enter your Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <p style={{ color: "red", fontStyle: "italic" }}>{surnameError}</p>

                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p style={{ color: "red", fontStyle: "italic" }}>{emailError}</p>

                </div>

                <div className="Financial Details">

                    <h2>Financial Details</h2>

                    <label>Income</label>
                    <input
                        type="text"
                        placeholder="R"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                    <p style={{ color: "red", fontStyle: "italic" }}>{incomeError}</p>

                    <label>Total Monthly Expenses</label>
                    <input
                        type="text"
                        placeholder="R"
                        value={monthlyExpenses}
                        onChange={(e) => setMonthlyExpenses(e.target.value)}
                    />
                    <p style={{ color: "red", fontStyle: "italic" }}>{expensesError}</p>

                    <label>Total Active Debt</label>
                    <input
                        type="text"
                        placeholder="R"
                        value={totalDebt}
                        onChange={(e) => setTotalDebt(e.target.value)}
                    />
                    <p style={{ color: "red", fontStyle: "italic" }}>{debtError}</p>
<button onClick={loginUser}>Calculate</button>
                </div>
  
            </div>

          
<div className="results"> 
            <h2>Results</h2>

            <label>Remaining Amount</label>
            <input
                type="text"
                placeholder="R"
                value={remainingAmount}
                readOnly
            />

            <label>Remaining Percentage</label>
            <input
                type="text"
                placeholder="%"
                value={remainingPercentage}
                readOnly
            />

            <label>Suggested Loan</label>
            <input
                type="text"
                placeholder="R"
                value={suggestedLoan}
                readOnly
            />

            <label>Advice</label>
            <h4>{advice}</h4>
</div>
        </>
    );

}

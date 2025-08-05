import calculator from "../../assets/images/icon-calculator.svg";
import "./Leftside.scss";
import MortgageAmount from "./mortgageAmount/mortgageAmount";
import MortgageTerm_InterestRate from "./MortgageTerm_InterestRate/MortgageTerm_InterestRate";
import MortgageType from "./MortgageType/MortgageType";

function Leftside(props) {
    const {
        inputValidation,
        set_inputValidation,
        setShowResult,
        setCalculatedValues,
    } = props;

    const handleInputFields = (e) => {
        e.preventDefault();

        let updatedFormState = { ...inputValidation };
        let radioCheckedisValid = [];

        for (let i = 0; i < e.target.length; i++) {
            const input = e.target[i];
            const { type, name, value, checked } = input;

            if (type === "number") {
                updatedFormState[name] = {
                    isValid: value !== "",
                    value: value,
                };
            }

            if (type === "radio") {
                radioCheckedisValid.push(checked);

                let isAnyChecked = radioCheckedisValid.some(
                    (each) => each === true
                );

                updatedFormState[name] = {
                    isValid: isAnyChecked,
                    value: isAnyChecked ? value : "",
                };
            }
        }

        set_inputValidation(updatedFormState);
        handler_show_result(updatedFormState, e);
    };

    const handler_show_result = (updatedFormState, e) => {
        let finallResult = false;

        for (let each in updatedFormState) {
            if (!updatedFormState[each].isValid) {
                finallResult = false;
                break;
            } else {
                finallResult = true;
            }
        }

        setShowResult(finallResult);

        if (finallResult) {
            calculateRepaymentMortgage(e);
        }
    };

    const calculateRepaymentMortgage = (e) => {
        const formData = new FormData(e.target);
        const mortgageAmount = parseFloat(formData.get("MortgageAmount"));
        const mortgageTermYears = parseFloat(formData.get("MortgageTerm"));
        const annualInterestRate = parseFloat(formData.get("InterestRate"));
        const mortgageType = formData.get("MortgageType").toLowerCase();

        const monthlyInterestRate = annualInterestRate / 100 / 12;
        const totalPayments = mortgageTermYears * 12;

        let monthlyPayment = 0;
        let totalRepayment = 0;

        if (mortgageType === "repayment") {
            const compoundFactor = Math.pow(
                1 + monthlyInterestRate,
                totalPayments
            );
            monthlyPayment =
                (mortgageAmount * monthlyInterestRate * compoundFactor) /
                (compoundFactor - 1);

            totalRepayment = monthlyPayment * totalPayments;
        } else if (mortgageType === "interest-only") {
            monthlyPayment = mortgageAmount * monthlyInterestRate;
            totalRepayment = monthlyPayment * totalPayments;
        } else {
            console.error("Unknown mortgage type");
            return;
        }

        setCalculatedValues([
            monthlyPayment.toFixed(2),
            totalRepayment.toFixed(2),
        ]);
    };

    const clearAll = () => {
        set_inputValidation({
            MortgageAmount: { isValid: true, value: "" },
            MortgageTerm: { isValid: true, value: "" },
            InterestRate: { isValid: true, value: "" },
            MortgageType: { isValid: true, value: "" },
        });
    };

    return (
        <div className="leftSide">
            <div className="calculator-wrapper">
                <div className="calculator-header">
                    <h1 className="calculator-title">Mortgage Calculator</h1>
                    <button onClick={clearAll} className="clear-button">
                        <span>Clear All</span>
                    </button>
                </div>

                <form onSubmit={handleInputFields}>
                    <MortgageAmount
                        inputValidation={inputValidation}
                        set_inputValidation={set_inputValidation}
                    />
                    <MortgageTerm_InterestRate
                        inputValidation={inputValidation}
                        set_inputValidation={set_inputValidation}
                    />
                    <MortgageType
                        inputValidation={inputValidation}
                        set_inputValidation={set_inputValidation}
                    />

                    <button className="mortgage-btn">
                        <img src={calculator} />
                        <p>Calculate Repayments</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Leftside;

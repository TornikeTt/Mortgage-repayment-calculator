import calculator from "../../assets/images/icon-calculator.svg";
import "./Leftside.scss";
import MortgageAmount from "./mortgageAmount/mortgageAmount";
import MortgageTerm_InterestRate from "./MortgageTerm_InterestRate/MortgageTerm_InterestRate";
import MortgageType from "./MortgageType/MortgageType";
import { useRef } from "react";

function Leftside(props) {
    const {
        inputValidation,
        set_inputValidation,
        setShowResult,
        setCalculatedValues,
    } = props;

    let Repayment_Radio_button = useRef(null);
    let Interestonly_Radio_button = useRef(null);

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
        } else if (mortgageType === "interestonly") {
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

    const collectValues = (e) => {
        const { name, value } = e.target;
        set_inputValidation((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value: value,
            },
        }));
    };

    const clearAll = () => {
        set_inputValidation({
            MortgageAmount: { isValid: true, value: "" },
            MortgageTerm: { isValid: true, value: "" },
            InterestRate: { isValid: true, value: "" },
            MortgageType: { isValid: true, value: "" },
        });

        Repayment_Radio_button.current.checked = false;
        Interestonly_Radio_button.current.checked = false;

        setShowResult(false);
        setCalculatedValues([0, 0]);
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
                        collectValues={collectValues}
                    />
                    <MortgageTerm_InterestRate
                        inputValidation={inputValidation}
                        collectValues={collectValues}
                    />
                    <MortgageType
                        inputValidation={inputValidation}
                        Repayment_Radio_button={Repayment_Radio_button}
                        Interestonly_Radio_button={Interestonly_Radio_button}
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

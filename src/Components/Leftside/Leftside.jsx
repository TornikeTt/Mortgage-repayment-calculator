import calculator from "../../assets/images/icon-calculator.svg";
import "./Leftside.scss";
import MortgageAmount from "./mortgageAmount/mortgageAmount";
import MortgageTerm_InterestRate from "./MortgageTerm_InterestRate/MortgageTerm_InterestRate";
import MortgageType from "./MortgageType/MortgageType";

function Leftside({ isInvalid, setIsInvalid }) {
    const handleInputFields = (e) => {
        e.preventDefault();

        let radioCheckedStatus = [];

        for (let i = 0; i < e.target.length; i++) {
            const input = e.target[i];
            const { type, name, value, checked } = input;

            if (type === "number") {
                setIsInvalid((prev) => ({
                    ...prev,
                    [name]: value === "" ? false : true,
                }));
            }

            if (type === "radio") {
                radioCheckedStatus.push(checked);

                let isAnyChecked = radioCheckedStatus.some(
                    (each) => each === true
                );

                setIsInvalid((prev) => ({
                    ...prev,
                    [name]: isAnyChecked,
                }));
            }
        }
    };

    return (
        <div className="leftSide">
            <div className="calculator-wrapper">
                <div className="calculator-header">
                    <h1 className="calculator-title">Mortgage Calculator</h1>
                    <button className="clear-button">
                        <span>Clear All</span>
                    </button>
                </div>

                <form onSubmit={handleInputFields}>
                    <MortgageAmount
                        MortgageAmount_input_status={isInvalid.MortgageAmount}
                    />
                    <MortgageTerm_InterestRate
                        MortgageTerm_input_status={isInvalid.MortgageTerm}
                        InterestRate_input_status={isInvalid.InterestRate}
                    />
                    <MortgageType
                        MortgageType_input_status={isInvalid.MortgageType}
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

import "./MortgageType.scss";

function MortgageType({
    inputValidation,
    Repayment_Radio_button,
    Interestonly_Radio_button,
}) {
    return (
        <div className="MortgageType-container">
            <p>Mortgage Type</p>
            <label>
                <input
                    ref={Repayment_Radio_button}
                    type="radio"
                    name="MortgageType"
                    value="Repayment"
                />
                <span>Repayment</span>
            </label>

            <label>
                <input
                    ref={Interestonly_Radio_button}
                    type="radio"
                    name="MortgageType"
                    value="Interestonly"
                />
                <span>Interest Only</span>
            </label>

            {!inputValidation.MortgageType.isValid && (
                <small>This field is required</small>
            )}
        </div>
    );
}

export default MortgageType;

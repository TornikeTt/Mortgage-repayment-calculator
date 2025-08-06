import "./MortgageTerm_InterestRate.scss";

function MortgageTerm_InterestRate({ inputValidation, collectValues }) {
    return (
        <div className="MortgageTerm_InterestRate-container">
            <div className="MortgageTerm-wrapper">
                <label htmlFor="MortgageTerm-input">Mortage Term</label>

                <div
                    className={`input-wrapper ${
                        !inputValidation.MortgageTerm.isValid ? "error" : ""
                    }`}
                >
                    <div className="input-description">
                        <p>Years</p>
                    </div>
                    <input
                        id="MortgageTerm-input"
                        type="number"
                        name="MortgageTerm"
                        value={inputValidation.MortgageTerm.value}
                        onChange={(e) => collectValues(e)}
                    />
                </div>

                {!inputValidation.MortgageTerm.isValid && (
                    <small>This field is required</small>
                )}
            </div>

            <div className="InterestRate-wrapper">
                <label htmlFor="InterestRate-input">Interest Rate</label>

                <div
                    className={`input-wrapper ${
                        !inputValidation.InterestRate.isValid ? "error" : ""
                    }`}
                >
                    <div className="input-description">
                        <p>%</p>
                    </div>
                    <input
                        id="InterestRate-input"
                        type="number"
                        name="InterestRate"
                        value={inputValidation.InterestRate.value}
                        onChange={(e) => collectValues(e)}
                    />
                </div>

                {!inputValidation.InterestRate.isValid && (
                    <small>This field is required</small>
                )}
            </div>
        </div>
    );
}

export default MortgageTerm_InterestRate;

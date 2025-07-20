import "./MortgageTerm_InterestRate.scss";

function MortgageTerm_InterestRate({
    MortgageTerm_input_status,
    InterestRate_input_status,
}) {
    return (
        <div className="MortgageTerm_InterestRate-container">
            <div className="MortgageTerm-wrapper">
                <label htmlFor="MortgageTerm-input">Mortage Term</label>

                <div
                    className={`input-wrapper ${
                        !MortgageTerm_input_status ? "error" : ""
                    }`}
                >
                    <div className="input-description">
                        <p>Years</p>
                    </div>
                    <input
                        id="MortgageTerm-input"
                        type="number"
                        name="MortgageTerm"
                    />
                </div>

                {!MortgageTerm_input_status && (
                    <small>This field is required</small>
                )}
            </div>

            <div className="InterestRate-wrapper">
                <label htmlFor="InterestRate-input">Interest Rate</label>

                <div
                    className={`input-wrapper ${
                        !InterestRate_input_status ? "error" : ""
                    }`}
                >
                    <div className="input-description">
                        <p>%</p>
                    </div>
                    <input
                        id="InterestRate-input"
                        type="number"
                        name="InterestRate"
                    />
                </div>

                {!InterestRate_input_status && (
                    <small>This field is required</small>
                )}
            </div>
        </div>
    );
}

export default MortgageTerm_InterestRate;

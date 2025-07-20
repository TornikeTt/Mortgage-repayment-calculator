import "./MortgageTerm_InterestRate.scss";

function MortgageTerm_InterestRate() {
    return (
        <div className="MortgageTerm_InterestRate-container">
            <div className="MortgageTerm-wrapper">
                <label htmlFor="MortgageTerm-input">Mortage Term</label>

                <div className="input-wrapper">
                    <div className="input-description">
                        <p>Years</p>
                    </div>
                    <input
                        id="MortgageTerm-input"
                        type="number"
                        name="MortgageTerm"
                    />
                </div>
            </div>

            <div className="InterestRate-wrapper">
                <label htmlFor="InterestRate-input">Interest Rate</label>

                <div className="input-wrapper">
                    <div className="input-description">
                        <p>%</p>
                    </div>
                    <input
                        id="InterestRate-input"
                        type="number"
                        name="InterestRate"
                    />
                </div>
            </div>
        </div>
    );
}

export default MortgageTerm_InterestRate;

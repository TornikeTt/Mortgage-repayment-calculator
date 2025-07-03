import calculator from "../../assets/images/icon-calculator.svg";
import "./Leftside.scss";

function Leftside() {
    return (
        <div className="leftSide">
            <div className="calculator-wrapper">
                <div className="calculator-header">
                    <h1 className="calculator-title">Mortgage Calculator</h1>
                    <button>
                        <p className="clear-button">Clear All</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Leftside;

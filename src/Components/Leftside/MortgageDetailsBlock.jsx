function MortgageDetailsBlock({ class_name, label_text, input_description }) {
    return (
        <div className={class_name}>
            <label htmlFor={`${class_name}-input`}>{label_text}</label>

            <div className={`${class_name}-input-wrapper`}>
                <div className={`${class_name}-input-description`}>
                    <p>{input_description}</p>
                </div>
                <input id={`${class_name}-input`} type="number" />
            </div>
        </div>
    );
}

export default MortgageDetailsBlock;

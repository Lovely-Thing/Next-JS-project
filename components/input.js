export default function Input(props) {
    return(
        <div className="input-item">            
            <div className="input-item-label-wrap">
                <label className="input-label">{props.label}</label><label className={"rmark " + (props.labelMark === "必須"? "required": "")}>{props.labelMark}</label>
            </div>
            <div>
                <input
                    type={props.type}
                    value={props.value}
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
                <p className="format">{props.format}</p>
                <p>{props.error}</p>
            </div>
        </div>
    )
}
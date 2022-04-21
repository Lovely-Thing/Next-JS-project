

export default function CustomButton01(props) {
    return(
    <div className={props.className} onClick={props.onClick}>
        <label>{props.name}</label>
    </div>
    )
}
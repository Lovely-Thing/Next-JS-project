

export default function Badge(props) {
    return(
    <div className={props.className}>
        <label>{props.name}</label>
    </div>
    )
}
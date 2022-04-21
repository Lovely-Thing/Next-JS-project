export default function PageHeader(props) {
    return(
        <div className="page-topbar">            
            <div className="container">
                <h1 className={"" + (props.enTitle ===""? "nodisplay" : "")}>{props.enTitle}</h1>
                <h1 className={"" + (props.jpTitle ===""? "nodisplay" : "")}>{props.jpTitle}</h1>
                <p className={"" + (props.description1 ===""? "nodisplay" : "")}>{props.description1}</p>
                <p className={"" + (props.description2 ===""? "nodisplay" : "")}>{props.description2}</p>
            </div>
        </div>
    )
}
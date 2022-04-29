import Image from "next/image" 

export default function BenefitCard(props) {
    return(
    <div className="benefitCard">
        <div className="benefitCard_header">
            {props.title}
            <div className="benefitbadge">
            <Image src={props.badge} alt="導入のメリット"/>
            </div> 
        </div>
        <div className="benefitCard_body">
            <div className="benefit_textpart">
                <div className="benefit_text_header">
                    {props.texts_header}
                </div>
                <div className="benefit_text_body">
                    {props.texts_body}
                </div>
            </div>
            <div className="benefit_detail_image">
                <Image src={props.mainImage} alt="導入のメリット"/> 
            </div>
        </div>

    </div>
    )
}

import Image from 'next/image'

export default function SmallCard(props) {
    return(
    <div className="smallCard">
        <div className='smallCard_title'>{props.cardTitle}</div>
        <div className='smallCard_body'>
            <div className='smallCard_img'>
                <div>
                <Image
                    src={props.image}
                    alt="card img"
                />
                </div>
            </div>
            <div className='smallCard_text'>
                {props.children}
            </div>
        </div>
    </div>
    )
}
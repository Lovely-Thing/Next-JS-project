
import Image from 'next/image'

export default function Card(props) {
    return(
    <div className="cardTileImgText">
        <p className='title'>{props.cardTitle}</p>
        <div className='card-img'>
            <Image
                src={props.image}
                alt="card img"
            />
        </div>
        <div>
            {props.children}
        </div>
    </div>
    )
}
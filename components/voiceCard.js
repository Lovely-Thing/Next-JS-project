
import Image from 'next/image'

export default function VoiceCard(props) {
    return(
    <div className="voice_card">           
        <div className='voice_card_img'>
            <Image
                src={props.image}
                alt="card img"
            /> 
        </div>
        <div className='voice_card_texts'>
            <div className='voice_card_title'>
            {props.title}
            </div>
            <div className='voice_card_sentence'>
            {props.texts}
            </div>
        </div>
        <div className='voice_card_badge'>
            <Image
                src={props.badge}
                alt="card img"
            />
        </div>
    </div>
    )
}
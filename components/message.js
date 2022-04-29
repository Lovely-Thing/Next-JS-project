

import Image from 'next/image'

export default function Message(props) {
    return(
    <div className="message-container">
        <div>
            <Image
                src={props.image}
                alt="message user"
            />    
        </div>
        {props.children}
    </div>
    )
}
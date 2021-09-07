
import styles from '../styles/House.module.css'
import Image from 'next/image'
import pic from '../images/foto1.png'
export default function HouseC(props) {
    return (
        <div className={styles.date}>
           <div>
                <Image src={pic} width={'150%'} height={'80vh'}  quality={90} alt='casa'/>
                </div>      
            <div className={styles.info}>

            <label>Casa:{props.casa}</label>
            <label>Reis de:{props.reino}</label>
            <label>Origem: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque cupiditate ab animi! Temporibus assumenda commodi, ut aspernatur deserunt illo praesentium fugit ipsam, 
                vero asperiores consequatur harum ullam impedit reiciendis.</label>
            </div>    
        </div>
    )
}

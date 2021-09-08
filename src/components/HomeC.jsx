import Image from 'next/image'
import pic from '../images/group.webp'
import styles from '../styles/HomeC.module.css'


export default function HomeC() {
    return (
        <div className={styles.home}>
          <h1>Cavaleiros Remanescentes</h1>
        <Image src={pic} quality={90} alt='dados'/>
           
           <h2>A quem se destina:</h2>
           <label>A todos os jogadores de RPG da mesa do CROSS!!</label>
           <p>Essa pagina se destina a informações da campanha <b>Crônicas do norte</b></p>
        </div>
    )
}

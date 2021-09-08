import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Layout(props) {

  return (
       <div className={styles.layout}>
         <div className={styles.header}>
           <h3>Casas do Norte</h3>
         <Link href='/'>Voltar</Link>
         </div>
         <div className={styles.content}>
         {props.children}
         </div>
       </div>
    )
      
}
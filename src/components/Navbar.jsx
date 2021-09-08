import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(props) {
    return ( 
        <div className={styles.layout}> 
           <div className={styles.header}>  
            <Link href={props.destiny}> 
            {props.text}
            </Link>
            </div>
        </div>
    )
}

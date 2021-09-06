
import styles from '../styles/House.module.css'

export default function House(props) {
    return (
        <div className={styles.date}>
            
                <img  src='https://media.istockphoto.com/vectors/coat-of-arms-with-wolves-vector-id1188360768' alt='casa'/>
            
            <label>Casa:{props.casa}</label>
            <label>Reis de:{props.reino}</label>
            <label>Origem: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque cupiditate ab animi! Temporibus assumenda commodi, ut aspernatur deserunt illo praesentium fugit ipsam, 
                vero asperiores consequatur harum ullam impedit reiciendis.</label>
        </div>
    )
}

import Link from 'next/link'

export default function Navbar(props) {
    return ( 
    
            <Link href={props.destiny}> 
            {props.text}
            </Link>
        
    )
}

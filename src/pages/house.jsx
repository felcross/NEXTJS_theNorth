import House from '../components/HouseC'
import Layout from '../components/Layout'
import Brave from '../images/Brave.png'
import Engenhoff from '../images/engenhoff.png'
import Ashes from '../images/ashes.png'
import Griffon from '../images/griffon.png'
import VonB from '../images/vonbrasken.png'

export default function house() {
  return (
          <Layout>
            <House pic={Brave}  casa='Brave' reino='Northumbria' />
            <House pic={Engenhoff} casa='Engenhoff' reino='Northumbria' />
            <House pic={Ashes} casa='Ashes' reino='Northumbria' />
            <House pic={Griffon} casa='Griffon' reino='Northumbria' />
            <House pic={VonB} casa='Von Brasken' reino='Northumbria' />
          </Layout>
            
  )
}

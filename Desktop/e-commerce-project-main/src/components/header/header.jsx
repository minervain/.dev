import React from 'react'
import styles from './header.module.css'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.left}> 
            <div className={styles.logo }> <Link to="/"><p style={{color:'white'}}>Minervain</p></Link> </div>
            <div className={styles.product}><Button colorScheme='purple'size='sm' > <Link to="/product">Ürünler</Link></Button></div>
        </div>
        <div className="basket"><Button colorScheme='purple' size='xs'  ><Link to="/sepet">Sepet</Link></Button></div>

        
    </div>
  )
}

export default Header
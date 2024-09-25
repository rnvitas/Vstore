import { Icon } from "@iconify/react/dist/iconify.js"
import styles from'../assets/Navigation.module.css'

function Navigation ({countcart}){
 
    return(
        <>
        <header className="wrapper container">
        <div className={`${styles.navbar}  my-3 container py-3  bg-white`}>
        <nav className="flex px-5 justify-between items-center ">
        <div className="logo font-extrabold">
            <h1 className={`${styles.logo}`}>Vitarts</h1>
        </div>

        <div className={`${styles['cart-container']}`}>
            <span className={`${styles['counter-cart']}`}>{countcart}</span>
            <Icon icon="solar:cart-bold-duotone" width="48" height="48" />
        </div>
     </nav>
        </div>
        </header>
        </>
    )
}

export default Navigation
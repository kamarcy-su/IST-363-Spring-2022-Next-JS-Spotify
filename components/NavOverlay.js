import styles from './navoverlay.module.scss'
import Logo from './Logo'
import Nav from './Nav'
import ButtonUI from './ButtonUI'

const NavOverlay = ({ clickHandler }) => {
    return <div className={styles.navOverlay}>
        <Logo color="white" size="2"/>
        <Nav mobile flexDirection="column" />
        <ButtonUI 
            icon="close" 
            color="white"
            clickHandler={() => {
                clickHandler(false)
            }}
        />
    </div>
}
export default NavOverlay;
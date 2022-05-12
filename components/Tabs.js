import styles from './tabs.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles); //takes all the classes and combine them into true or false statement

const Tabs = ({ items, activeItem, clickHandler }) => {
    return <ul className={styles.tabs}>
        {items.map((item, index) => {
            let tabItemClasses = cx({
                tabItem : true,
                active : activeItem === item
            })
            return <li 
                key={index}
                className={tabItemClasses}
                onClick={() => {
                    clickHandler(item)
                }}
                >{item}</li>
        })}
    </ul>
}
export default Tabs;
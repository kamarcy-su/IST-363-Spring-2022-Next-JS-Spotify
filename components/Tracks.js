import styles from './tracks.module.scss'
import Paragraph from './Paragraph'

function convertDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    const formattedDuration = `${minutes}:${seconds}`
    return formattedDuration;
}

const Tracks = ({ items }) => {
    return <ul className={styles.tracks}>
        {items.map((item, index) => {
            const { title, songInformation } = item;
            return <li
                key={index}
                className={styles.trackItem}
                > 
                <h3>{item.title}</h3>
                <Paragraph>{convertDuration(songInformation.duration)}</Paragraph>
            </li>
        })}

    </ul>
}
export default Tracks;
import styles from '../styles/contact.module.css'
import classess from '../styles/Home.module.css'


export default function Contact(){
    return(
        <div className={classess.main}>
            <h2 className={styles.contactHeader}> contact us</h2>
            <p className={styles.contactPragraph}>
                contact information
            </p>
        </div>
    )
}
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEiny_KuIMIjQ/profile-displayphoto-shrink_100_100/0/1578772156776?e=1619654400&v=beta&t=NajijgN6X_7cE32UEklK9TxIKoDanKmY8CG9fGA8aIE" alt="Diego Alves" />
            <div>
                <strong>
                    Diego Alves
                </strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}
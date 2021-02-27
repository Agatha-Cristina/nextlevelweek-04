import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/58121494?s=100&v=4" alt="Agatha Cristina"/>
            <div>
                <strong>Agatha Cristina</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}
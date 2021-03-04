import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext, CountDownProvider } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {

    const { 
        minutes, 
        seconds, 
        hasFinish, 
        isActive,
        startCountDown,
        resetCountdown,     
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinish ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo ENCERRADO
                    
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
        
                              Abandonar ciclo

                            </button>
                        ) : (
                            <button
                                type="button"
                                className={styles.countdownButton}
                                onClick={startCountDown}
                            >
          
                                Iniciar ciclo
                            
                            </button>
                            )}
                    </>
                )}
        </div>
    )
}
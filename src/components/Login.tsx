import styles from "../styles/components/Login.module.css";
import { useState, useEffect } from "react";

export function Login() {
    return (
              
        <div className={styles.loginContainer}>

            <main>             
                <p>Bem-vindo</p>
                <strong>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png" alt=""/>
                    <p>Faça login com seu GitHub para começar</p>
                </strong>
            </main>

            <div>
                <input type='text' placeholder='Digite seu username'></input>
                <button>seta</button>
            </div>
        </div>
    );
}
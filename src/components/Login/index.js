import React, { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Login = (props) => {
   /*console.log(props)*/

    const firebase = useContext(FirebaseContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();
        /*console.log(password, email)*/
        firebase.loginUser(email, password)
            .then(user => {
                setEmail('');
                setPassword('');
                props.history.push('/welcome')
            })
            .catch(error => {
                setError(error)
                setEmail('');
                setPassword('');
            })
    }

    /*const handleEmail = e => {
        setEmail(e.target.value)
    }*/

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftLogin" style={{}}>

                </div>
                <div className="formBoxRight" style={{}}>
                    <div className="formContent">

                        {error !== '' ? <span>{error.message}</span> : ''}

                        <h2>Connexion</h2>
                        <form onSubmit={ handleSubmit }>
                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} /*value={loginData.email}*/ type="email" required autoComplete="on" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={e => setPassword(e.target.value)} value={password} /*value={loginData.password}*/ type="password" required autoComplete="off" />
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}

                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Nouveau ? Inscrivez-vous maintenent</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
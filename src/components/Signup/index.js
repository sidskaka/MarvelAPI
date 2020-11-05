import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Signup = (props) => {
    /*console.log(props)*/

    const firebase = useContext(FirebaseContext)
    /*console.log("firebase!!",firebase)*/

    const data = {
        pseudo: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [loginData, setLoginData] = useState(data)
    const [error, setError] = useState('')

    /*console.log("login", loginData)*/

    const handleChange = e => {
        setLoginData({
            ...loginData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = loginData
        firebase.signupUser(email, password)
            .then(user => {
                setLoginData({ ...data })
                props.history.push('/welcome')
            })
            .catch(error => {
                setError( error )
                setLoginData({ ...data })
            })
    }

    const { pseudo, email, password, confirmPassword } = loginData

    const bouton = pseudo === '' || email === '' || password === '' || password !== confirmPassword ?
        <button disabled>S'inscrire</button> : <button>S'inscrire</button>

    // gestion des erreurs
    const errormsg = error !== '' && <span>{error.message}</span>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer" style={{}}>
                <div className="formBoxLeftSignup" style={{}}>

                </div>
                <div className="formBoxRight" style={{}}>
                    <div className="formContent">
                        {errormsg}
                        <h2>Inscription</h2>
                        <form onSubmit={ handleSubmit }>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} /*value={loginData.pseudo}*/ type="text" id="pseudo" required autoComplete="on" />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={email} /*value={loginData.email}*/ type="email" id="email" required autoComplete="on" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={password} /*value={loginData.password}*/ type="password" id="password" required autoComplete="off" />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} /*value={loginData.confirmPassword}*/ type="password" id="confirmPassword" required autoComplete="off" />
                                <label htmlFor="confirmPassword">Veuillez confirmer le mot de passe</label>
                            </div>
                            {bouton}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Connectez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
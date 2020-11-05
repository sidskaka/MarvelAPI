import React, { useRef, useEffect, useState, Fragment } from "react"
import { Link } from "react-router-dom"

const Landing = () => {
    const [btn, setBtn] = useState(false)
    /*console.log(btn)*/
    const refWolverine = useRef(null)
    /*console.log("teste!!", refWolverine)*/

    useEffect(() => {
        // Afficher les griffes au chargement de la page
        refWolverine.current.classList.add("startingImg")

        // Supprimer les griffes après 3 secondes
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg")
            setBtn(true)
        }, 1000)
    }, [])

    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg")
    }

    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg")
    }

    /*const clearLeftImg = () => {
        refWolverine.current.classList.remove("leftImg")
    }

    const clearRightImg = () => {
        refWolverine.current.classList.remove("rightImg")
    }*/

    const clearImg = () => {
        if (refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg")
        } else if (refWolverine.current.classList.contains("rightImg")) {
            refWolverine.current.classList.remove("rightImg")
        }
    }

    const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link className="btn-welcome" to="/signup">Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </Fragment>
    )

    return (
        <main ref={refWolverine} className="welcomePage">
            {displayBtn}
        </main>    
    )
}

export default Landing
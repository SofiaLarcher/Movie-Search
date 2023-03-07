import { useState } from "react"
import "./style.css"

export function Search(props){ 
    const[nomeDoFilme, setnomeDoFilme]= useState('')
    
    function PesquisarFilme(e){
        e.preventDefault()
        console.log(nomeDoFilme)
        props.pesquisarfilme(nomeDoFilme
        )
    }
    function MudarVariavel(e){
        setnomeDoFilme(e.target.value)
    }

    
    return(
        <div className="searchbar">

        <form>
            <input className="form-input" value= {nomeDoFilme} onChange={MudarVariavel} type="text" placeholder="Search here" ></input>
            <div className="buttons">
            <button className="form-button" onClick={PesquisarFilme}>Search</button>
            <button className="form-button">Delete</button>
            </div>
        </form>
        </div>
    )


}
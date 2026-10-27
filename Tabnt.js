import { useState } from "react"

function Tabnt(props){
    return(<div>
        <table>
            {props.notes.map((nt,i)=>
            <tr><td>{nt}{props.noms[i]}</td>
            <td>{nt>=10?"admis":"na"}</td>
            </tr>
            )}
        </table>
        Moyenne : {props.notes.reduce((nt,total)=>
        total+nt,0)/props.notes.length}
    </div>)
} 

function Cptst(){
    const[ cpt,setcpt]=useState(0);
    const incrementer=()=>setcpt(cpt+1);
    return(
        <div> 
            <h3> compteur:{cpt}</h3>
                <button onClick={incrementer}>inc+</button>
        </div>
    )
}export default Cptst;
 
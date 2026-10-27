function Compnpm ({nom,age}){
    return (<div>
        <h3> bienvenue{nom}</h3>
        <h3> votre age:{age}</h3>
    </div>)
}
//function Compnpm1(props){
    //return (<div>
        //<h3> bienvenue{props.nom}</h3>
       // <h3> votre age:{props.age}</h3>
   // </div>)
//}
function Compnpm2(props){
    return(<div>
        <h3 style={{color: props.couleur||"black"}}>
            bienvenue{props.retour1 &&<br></br>}{props.nom}
        </h3>
        <h3>{props.message ||"bienvenue"}{props.nom}</h3>
        <h3>{props.message ??"bienvenue"}{props.nom}</h3>
        <h3>bienvenue{props.sexe=="H"?"Mr":
        props.sexe=="F"?"Mme":""}
        {props.nom}</h3>
<h3>votre age:{props.age}</h3>
    </div>)
}
export {Compnpm,Compnpm2};


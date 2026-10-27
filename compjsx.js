function Compjsx(){
    const caree=(x)=>x*x;
    const noms = ["Ali", "Sara", "Yassine", "Nora"];
    let x=10; let y=20;
    let message="bienvenue";
    return(<div>
        <h1> {message}</h1>
        <h4> {5+5}</h4>
        <h3> caree de 10:{caree(10)}</h3>
        <h3>l max est:{(x>=y)?x:y}</h3>
        <h3>y est {(y%2==0)?"pair" :"impair"}</h3>
        <h1>{message}</h1>
        <h4>{5+5}</h4>
        <h3>carre de 10 :{caree(10)}</h3>
        <h2>Liste des étudiants</h2>
            <ul>
                {noms.map((nom, index) => (
                    <li key={index}>{nom}</li>
                ))}
            </ul>
        </div>
    );
}export default Compjsx;

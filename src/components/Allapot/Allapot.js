
import './Allapot.css';

function Allapot(props) {
  
    const szov= (joE)=>{
        if (joE==1) return "🔥GOOD🔥 ✔"
        else if(joE==2){return "(steal)❌"}
        else if(joE==3){return""}

    }
    const katt=()=>{
        console.log("történik")
        props.katt()

    }





  return (
    <div className="Allapot" >
    {szov(props.Allapot)}
    <button hidden={props.Allapot === 1 ? false : true} onClick={katt}>NEXT</button>


    </div>
  );
}

export default Allapot;

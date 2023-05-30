import axios from "axios";



function DispRes({ver}) {
    console.log(ver)
    var gee= "https://api.dictionaryapi.dev/api/v2/entries/en/"+ver
    
    axios.get(gee).
    then((response) => {
        var x=(response.data[0]);
        x=x.meanings[0].definitions[0].definition;
        console.log(x)})



    return (
      <div>
        <b>Pronunciation : </b>
        <br></br><hr></hr>
        <b>Definition : </b>
        <li></li>

      </div>
    );
  }
  
  export default DispRes;
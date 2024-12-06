import './mobile.css'

function mobile(props){
    return(
        <>
        <div class="parent">
            <div id="image"> <img src={props.src}/> </div>
            <div id="details"> <h1>{props.details}</h1> <ul><li>{props.d1}</li>
            <li>{props.d2}</li>
            <li>{props.d3}</li>   
            <li>  {props.d4}</li>
            </ul> </div>
            <div id="price"> <h3>{props.price} </h3>
            <img src={props.img} width="150"/>
            </div>
        </div>
        
        </>
    );
}
export default mobile;
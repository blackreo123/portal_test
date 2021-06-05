import { useEffect, useState } from "react"

export default function AccSelect(props) {
    const [textColor, setTextColor] = useState();

    useEffect(()=>{
        if(props.placeHolder){
            setTextColor('grey')
        }else{
            setTextColor('')
        }
    },[props.placeHolder])

    const colorChange = () => {
        setTextColor(props.textColor)
    }
    return(
        <>
        {props.placeHolder 
            ?   <select onChange={colorChange} disabled = {props.isDisabled} style={{width : props.fieldWidth, color : textColor}}>
                    <option disabled selected hidden>{props.placeHolder}</option>
                    {props.list.map((item, index) => {
                        return <option key={index} style={{color : 'black'}}>{item}</option>
                    })}
                 </select>
            :   <select onChange={colorChange} disabled = {props.isDisabled} style={{width : props.fieldWidth, color : textColor}}>
                    {props.list.map((item, index) => {
                        return <option key={index}>{item}</option>
                    })}
                </select>    
            }
            
                
        </>
    )
}
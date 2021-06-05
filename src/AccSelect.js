import { useState } from "react"

export default function AccSelect(props) {
    const [textColor, setTextColor] = useState();

    const colorChange = () => {
        setTextColor(props.textColor)
    }
    return(
        <>
        {props.placeHolder 
            // props.placeHolderを入れた場合 
            ?   <select onChange={colorChange} disabled = {props.isDisabled} style={{width : props.fieldWidth, color : textColor}}>
                    {/* props.placeHolderの内容を一つ目の項目に */}
                    <option>{props.placeHolder}</option>    
                    {props.list.map((item, index) => {
                        return <option key={index} style={{color : 'black'}}>{item}</option>
                    })}
                 </select>
            // props.placeHolderを入れなかった場合
            :   <select onChange={colorChange} disabled = {props.isDisabled} style={{width : props.fieldWidth, color : textColor}}>
                    {props.list.map((item, index) => {
                        return <option key={index}　style={{color : 'black'}}>{item}</option>
                    })}
                </select>    
            }
            
                
        </>
    )
}
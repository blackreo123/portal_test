/* 
 * Component名：Dropdown List
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/07  設計者：ユンジハ        製造者：ユンジハ
*/

import { useEffect, useState } from "react"

export default function AccSelect(props) {
    
    const [val, setVal] = useState();
    
    //選択した項目をvalueに設定
    const valChange = (e) => {
        setVal(e.target.value)
    }

    //render時に指定indexがあればvalueに設定
    useEffect(()=>{
        if(props.listIndex){
            setVal(props.listData[props.listIndex])
        }    
    },[props.listData, props.listIndex])
    return(
        <>
        {props.placeHolder 
            // props.placeHolderを入れた場合 
            ?   <select onChange={valChange} disabled = {props.isDisabled} value={val}  style={{width : props.fieldWidth, color : props.textColor, height : '1.7rem'}}>
                    {/* props.placeHolderの内容を一つ目の項目に */}
                    <option>{props.placeHolder}</option>    
                    {props.listData.map((item, index) => {
                        return <option key={index} style={{color : 'black'}}>{item}</option>
                    })}
                 </select>
            // props.placeHolderを入れなかった場合
            :   <select onChange={valChange} disabled = {props.isDisabled} value={val} style={{width : props.fieldWidth, color : props.textColor, height : '1.7rem'}}>
                    {props.listData.map((item, index) => {
                        return <option key={index} style={{color : 'black'}}>{item}</option>
                    })}
                </select>    
            }
            
                
        </>
    )
}
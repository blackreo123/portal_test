/* 
 * Component名：背景なしLabel
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/05/31  設計者：ユンジハ          製造者：ユンジハ
* Rev.1 　　　2021/06/07  設計者：ユンジハ          製造者：ユンジハ
*/

import { useEffect, useState } from "react"

export default function AccLabelTransparent(props){
    
    
    const [color, setColor] = useState();                       //textのカーラを持つstate
    
    useEffect(()=>{
        if (props.labelType === 1) {                                                          
            setColor('black');                                  //colorをblackに変更
        } else if (props.labelType === 4) {                      
            setColor('blue');                                   //colorをblueに変更
        }
    }, [props.labelType])                                       //useEffectの内容をprops.labelTypeが変更されるたびに実行

    return(
        <div style={{                  
            color       :   color,
            fontSize    :   '1rem',
            fontWeight  :   props.bold ? 'bold' : 'normal'
        }}>
            {props.caption}
        </div>
    )
}
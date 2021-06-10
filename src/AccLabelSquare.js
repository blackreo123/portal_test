/* 
 * Component名：背景色付きLabel
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/05/31  設計者：パクソンジュン        製造者：パクソンジュン
* Rev.1 　　　2021/06/04  設計者：パクソンジュン        製造者：高潔
* Rev.2 　　　2021/06/07  設計者：パクソンジュン        製造者：ユンジハ
*/

import React , { useEffect, useState } from 'react'
import { HEIGHT } from "../constant/Common/ui/Constant_Compo.js"

export default function AccLabelSquare(props) {
    //背景色
    const [backgroundColor  , setBackgroundColor] = useState("#0066CC");

    //labelTypeによってlabel設定
    useEffect(() => {
        const labelType = props.labelType ?? "normal";
        
        if (labelType === 1) {
            setBackgroundColor("#31859C");
        } else if (labelType === 2) {
            setBackgroundColor("#0066CC");
        } else if (labelType === 3) {
            setBackgroundColor("#CC0000");
        } else if (labelType === 4) {
            setBackgroundColor("#FFCC00");
        } 
    },[props.labelType])

    return (
        <div style={{
            backgroundColor :   backgroundColor,
            width           :   (props.labelWidth??"10") + "rem",
            color           :   "white",
            height          :   HEIGHT.HEIGHT_LABEL + "rem",
            display         :   "grid",
            placeItems      :   "center",
            fontWeight      :   props.bold ? 'bold' : 'normal'
        }}>
            {props.caption}
        </div>
    )
}
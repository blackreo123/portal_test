/*
* Component名：AccVInputText
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/07  設計者：高潔        製造者：高潔
*/

import React from "react";
import styled from 'styled-components'
import AccTextField from "./AccTextField";
import AccLabelTransparent from "./AccLabelTransparent";
import { TEXTFIELD } from "./Constant_Compo.js"

// css style
const LabelDiv = styled.div`
    padding-left: 5px;
    padding-bottom: 1px;
`

export default function AccVInputText(props) {

    return (
        <div>
            <LabelDiv>
                <AccLabelTransparent 
                    labelType={props.labelType} 
                    caption={props.caption} 
                    bold={props.bold}
                ></AccLabelTransparent>
            </LabelDiv>
            <AccTextField 
                textType={TEXTFIELD.TXT_TYPE_STRING} 
                text={props.text}
                textColor={props.textColor}
                isDisabled={props.isDisabled}
                fieldWidth={props.textFieldWidth}
                placeHolder={props.placeHolder}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
            ></AccTextField>
        </div>
    )
}
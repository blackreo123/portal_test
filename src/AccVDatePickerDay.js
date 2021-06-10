/*
* Component名：縦型 Date Picker（日）
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/04  設計者：イグッゴン        製造者：イグッゴン
*/

import React from "react";
import styled from 'styled-components'
import AccLabelTransparent from "./AccLabelTransparent";
import { TEXTFIELD } from "./Constant_Compo.js"
import AccDatePickerDay from './AccDatePickerDay'
// css style
const LabelDiv = styled.div`
    padding-left: 5px;
    padding-bottom: 1px;
`

export default function AccVDatePickerDay(props) {

    return (
        <div>
            <LabelDiv>
                <AccLabelTransparent
                    labelType={props.labelType}
                    caption={props.caption}
                    bold={props.bold}
                ></AccLabelTransparent>
            </LabelDiv>
            <AccDatePickerDay fieldWidth={props.fieldWidth} textColor={props.textColor} initDate={props.initDate} isDisabled={props.isDisabled}></AccDatePickerDay>
        </div>
    )
}
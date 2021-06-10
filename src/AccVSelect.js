/*
* Component名：AccVSelect
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/07  設計者：ユンジハ       製造者：ユンジハ 
*/

import styled from 'styled-components'
import AccLabelTransparent from './AccLabelTransparent'
import AccSelect from './AccSelect'

// css style
const LabelDiv = styled.div`
    padding-left: 5px;
    padding-bottom: 1px;
`

export default function AccVSelect(props){
    return(
        <>
        <LabelDiv>
            <AccLabelTransparent
                labelType={props.labelType}
                caption={props.caption}
                bold={props.bold}
            ></AccLabelTransparent>
        </LabelDiv>
        <AccSelect
            listData={props.listData}
            listIndex={props.listIndex}
            textColo={props.textColor}
            fieldWidth={props.fieldWidth}
            placeHolder={props.placeHolder}
            isDisabled={props.isDisabled}
            onChange={props.onChange}
        ></AccSelect>
        </>
    )
}
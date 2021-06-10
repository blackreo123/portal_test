/*
* Component名：決裁ステータス表示
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/07  設計者：イグッゴン        製造者：イグッゴン
*/

import React from "react";
import styled from "styled-components";
import { HEIGHT } from "./Constant_Compo.js";

const Container = styled.div`
    height : ${HEIGHT.HEIGHT_LABEL}rem;
    display : flex;
`

const Icon = styled.img`
    height : 100%;
`

const Label = styled.div`
    height : 100%;
    color : red;
    display : flex;
    align-items : center;
    justify-contents : center;
`

export default function AccLabelApprovalStatus({ caption }) {
    return (
        <Container>
            <Icon src={process.env.PUBLIC_URL + '/icons/svgs/solid/workflow-color.svg'}></Icon>
            <Label>{caption}</Label>
        </Container>
    );
}
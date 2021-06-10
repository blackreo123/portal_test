/*
 * Component名：表示専用Textfield
 *
 * Copyright(c) Asia Information System Co., Ltd. All rights reserved.
 *
 * 変更履歴
 * Rev.0 　　　2021/06/01  設計者：イグッゴン        製造者：イグッゴン
 */

import React from "react";
import styled from "styled-components";
import { HEIGHT } from "./Constant_Compo.js";

const Input = styled.input`
    padding: 0 0.5rem;
    font-size: 1rem;
    height: ${HEIGHT.HEIGHT_TEXTFIELD}rem;
    border: 0.0625rem solid;
    opacity: 0.3;
    width: ${(props) => props.textFieldWidth}rem;
`;

export default function AccTextFieldDisabled({ text, textFieldWidth }) {
    return (
        <Input
            type="text"
            value={text}
            textFieldWidth={textFieldWidth}
            disabled
        ></Input>
    );
}

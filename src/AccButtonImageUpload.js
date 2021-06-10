/*
* Component名：イメージUploadボタン
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/07  設計者：イグッゴン        製造者：イグッゴン
*/

import React from "react";
import styled from 'styled-components';
import AccButton from './AccButton'
import { BUTTON } from "./Constant_Compo.js";
import { useRef } from "react";


export default function AccButtonImageUpload({ caption }) {
    const inputFile = useRef();

    const onClick = () => {
        inputFile.current.click();
    }

    return (
        <>
            <AccButton caption={caption} bgColor="#97BA4E" icon={process.env.PUBLIC_URL + '/icons/svgs/solid/image.svg'} onClick={onClick} ></AccButton>

            {/* 안보이는 input */}
            <input type="file" ref={inputFile} style={{ display: 'none' }}></input>
        </>
    );
}
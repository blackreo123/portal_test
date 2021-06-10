/*
* Component名：申請ボタン
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/07  設計者：イグッゴン        製造者：イグッゴン
*/

import React from "react";
import styled from 'styled-components';
import AccButton from './AccButton'


export default function AccButtonApplication({ onClick }) {
    return (
        <AccButton caption={"申請"} bgColor="#5DA6C3" icon={process.env.PUBLIC_URL + '/icons/svgs/solid/edit.svg'} onClick={onClick}></AccButton>
    );
}
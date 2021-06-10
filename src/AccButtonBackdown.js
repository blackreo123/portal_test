/*
* Component名：取下げボタン
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/07  設計者：イグッゴン        製造者：イグッゴン
*/

import React from "react";
import styled from 'styled-components';
import AccButton from './AccButton'



export default function AccButtonBackdown({ onClick }) {
    return (
        <AccButton caption={"取下げ"} bgColor="#AC4841" icon={process.env.PUBLIC_URL + '/icons/svgs/solid/undo-alt.svg'} onClick={onClick}></AccButton>
    );
}
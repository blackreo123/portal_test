/*
* Component名：保存ボタン
*
* Copyright(c) Asia Information System Co., Ltd. All rights reserved.
*
* 変更履歴
* Rev.0 　　　2021/06/07  設計者：イグッゴン        製造者：イグッゴン
*/

import React from "react";
import styled from 'styled-components';
import AccButton from './AccButton'



export default function AccButtonSave({ onClick }) {
    return (
        <AccButton caption={"保存"} bgColor="#97BA4E" icon={process.env.PUBLIC_URL + '/icons/svgs/solid/save.svg'} onClick={onClick}></AccButton>
    );
}
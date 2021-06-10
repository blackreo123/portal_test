/*
 * Component名：Date Picker（日）
 *
 * Copyright(c) Asia Information System Co., Ltd. All rights reserved.
 *
 * 変更履歴
 * Rev.0 　　　2021/06/04  設計者：イグッゴン        製造者：イグッゴン
 */

import React, { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import { HEIGHT } from "./Constant_Compo.js";

//날짜 표시 input
const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: #eee;
    border: 1px solid #d2d6de;
    font-size: 12px;
    padding: 5px 10px;
    box-sizing: border-box;
    line-height: 1.5;
    color: ${(props) => props.textColor ?? "#000000"};
`;

//아이콘, 날짜input Container
const DatePickerContainer = styled.div`
    height: ${HEIGHT.HEIGHT_DATEPICKER}rem;
    width: ${(props) => props.fieldWidth}rem;
    display: flex;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: normal;
`;

//아이콘 Container
const IconContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #e8e8e8;
    border-right: 0;
    background-color : white;
`;

//FontAwesomeIcon
const Icon = styled(FontAwesomeIcon)`
    width: 13px !important;
    height: 100%;
`;

export default function AccDatePickerDay(props) {
    return (
        <DatePickerContainer fieldWidth={props.fieldWidth}>
            <IconContainer>
                <Icon icon={faCalendarAlt} />
            </IconContainer>
            <DateRangePicker
                initialSettings={{
                    startDate: props.initDate,
                    singleDatePicker: true,
                    locale: {
                        format: "YYYY-MM-DD",
                    },
                    autoApply: true,
                }}
            >
                <Input
                    type="text"
                    textColor={props.textColor}
                    initDate={props.initDate}
                    disabled={props.isDisabled}
                    fieldWidth={props.fieldWidth}
                ></Input>
            </DateRangePicker>
        </DatePickerContainer>
    );
}

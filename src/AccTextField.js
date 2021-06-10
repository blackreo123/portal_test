/*
 * Component名：TextField
 *
 * Copyright(c) Asia Information System Co., Ltd. All rights reserved.
 *
 * 変更履歴
 * Rev.0 　　　2021/06/03  設計者：高潔        製造者：高潔
 */

//2021-06-06 高潔 components追加及び　styled-components、eastasianwidth設置

// docker-compose up --build お願いします。

import React from "react";
import styled from "styled-components";
import Check from "eastasianwidth";
import { HEIGHT } from "./Constant_Compo.js";

// css style
const Input = styled.input`
  padding: 0 0.5rem;
  font-size: 1rem;
  height: ${HEIGHT.HEIGHT_TEXTFIELD}rem;
  border: 0.0625rem #b2b2b2 solid;
  width: ${(props) => props.fieldWidth}rem;
  color: ${(props) => props.textColor};
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function AccTextField(props) {
  // INTEGER,REALチェック
  const numberCheck = (e) => {
    // . の重複チェック
    let dotCheck = "false";

    //　INTEGERではない文字の削除
    let numArray = e.target.value.split("");
    let filteredNum = numArray.filter((item, index) => {
      if (isNaN(parseInt(item)) === false || item === ".") {
        // 最初のもじが . の場合削除
        if (index === 0) {
          if (item === ".") {
            return "";
          }
        }

        // 二番目の . を削除
        if (dotCheck === "true" && item === ".") {
          return "";
        }

        if (item === ".") {
          dotCheck = "true";
        }

        return item;
      }
    });
    let num = filteredNum.join("");

    // 韓国語、漢字、カナ削除
    if (num === "" || Check.characterLength(num) === 2) {
      e.target.value = "";
    } else {
      e.target.value = num;
    }
  };

  // CURRENCYチェック
  const currencyCheck = (e) => {
    //　INTEGERに変更ための「,」削除
    let currencyArray = e.target.value.split("");
    let filteredCur = currencyArray.filter((item, index) => {
      return item !== ",";
    });
    let currency = filteredCur.join("");

    // 韓国語、漢字、カナ削除
    if (currency === "" || Check.characterLength(currency) === 2) {
      e.target.value = "";
    }

    // Integer valueをcurrency刑に変更
    else {
      e.target.value = parseInt(currency).toLocaleString();
    }
  };

  // 半角,全角チェック
  const widthCheck = (e) => {
    // focus out, enter key入力の時に実行
    if (e.type === "blur" || e.key === "Enter") {
      let strArray = e.target.value.split("");

      let filteredStr = strArray.filter((item, index) => {
        // 半角のみ
        if (props.textType === 5 || props.textType === undefined) {
          console.log(Check.characterLength(item));
          return Check.characterLength(item) === 1;
        }

        // 全角のみ
        else if (props.textType === 6) {
          return Check.characterLength(item) === 2;
        }
      });

      e.target.value = filteredStr.join("");
    }

    // props.blurが存在場合
    if (e.type === "blur") {
      if (props.onBlur !== undefined) {
        props.onBlur();
      }
    }

    // props.onKeyDownが存在場合
    else if (e.type === "onKeyDown") {
      if (props.onKeyDown !== undefined) {
        props.onKeyDown();
      }
    }
  };

  // onFocus select all text
  const handdleFocus = (e) => {
    e.target.select();
    if (props.onFocus !== undefined) {
      props.onFocus();
    }
  };

  if (props.textType === 1) {
    return (
      <>
        <Input
          type="text"
          placeholder={props.placeHolder}
          value={props.text}
          disabled={
            props.isDisabled === "True" ||
            props.isDisabled === "true" ||
            props.isDisabled === "TRUE" ||
            props.isDisabled === true
              ? true
              : false
          }
          fieldHeight={props.fieldHeight}
          fieldWidth={props.fieldWidth}
          textColor={props.textColor}
          onKeyPress={(event) => {
            console.log(event.key);
            if (/[^0-9/]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onKeyUp={numberCheck}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          onFocus={handdleFocus}
        ></Input>
      </>
    );
  } else if (props.textType === 2) {
    return (
      <>
        <Input
          type="text"
          placeholder={props.placeHolder}
          value={props.text}
          disabled={
            props.isDisabled === "True" ||
            props.isDisabled === "true" ||
            props.isDisabled === "TRUE" ||
            props.isDisabled === true
              ? true
              : false
          }
          fieldHeight={props.fieldHeight}
          fieldWidth={props.fieldWidth}
          textColor={props.textColor}
          onKeyPress={(event) => {
            if (/[^0-9/^.]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onKeyUp={numberCheck}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          onFocus={handdleFocus}
        ></Input>
      </>
    );
  } else if (props.textType === 3) {
    return (
      <>
        <Input
          type="text"
          placeholder={props.placeHolder}
          value={props.text}
          disabled={
            props.isDisabled === "True" ||
            props.isDisabled === "true" ||
            props.isDisabled === "TRUE" ||
            props.isDisabled === true
              ? true
              : false
          }
          fieldHeight={props.fieldHeight}
          fieldWidth={props.fieldWidth}
          textColor={props.textColor}
          // 数字と「,」以外の文字の入力を禁止
          onKeyPress={(event) => {
            console.log(event.key);
            if (/[^0-9/^,]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onKeyUp={currencyCheck}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          onFocus={handdleFocus}
        ></Input>
      </>
    );
  } else if (props.textType === 4) {
    return (
      <>
        <Input
          type="text"
          placeholder={props.placeHolder}
          value={props.text}
          disabled={
            props.isDisabled === "True" ||
            props.isDisabled === "true" ||
            props.isDisabled === "TRUE" ||
            props.isDisabled === true
              ? true
              : false
          }
          list={props.list}
          fieldHeight={props.fieldHeight}
          fieldWidth={props.fieldWidth}
          textColor={props.textColor}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          onFocus={handdleFocus}
        ></Input>
      </>
    );
  } else if (props.textType === 5 || props.textType === undefined) {
    return (
      <>
        <Input
          type="text"
          placeholder={props.placeHolder}
          value={props.text}
          disabled={
            props.isDisabled === "True" ||
            props.isDisabled === "true" ||
            props.isDisabled === "TRUE" ||
            props.isDisabled === true
              ? true
              : false
          }
          fieldHeight={props.fieldHeight}
          fieldWidth={props.fieldWidth}
          textColor={props.textColor}
          onChange={props.onChange}
          onBlur={widthCheck}
          onKeyDown={widthCheck}
          onFocus={handdleFocus}
        ></Input>
      </>
    );
  } else if (props.textType === 6) {
    return (
      <>
        <Input
          type="text"
          placeholder={props.placeHolder}
          value={props.text}
          disabled={
            props.isDisabled === "True" ||
            props.isDisabled === "true" ||
            props.isDisabled === "TRUE" ||
            props.isDisabled === true
              ? true
              : false
          }
          fieldHeight={props.fieldHeight}
          fieldWidth={props.fieldWidth}
          textColor={props.textColor}
          // length=1の文字（半角）を禁止
          onKeyPress={(event) => {
            if (/[1]/g.test(Check.characterLength(event.target.value))) {
              event.preventDefault();
            }
          }}
          onChange={props.onChange}
          onBlur={widthCheck}
          onKeyDown={widthCheck}
          onFocus={handdleFocus}
        ></Input>
      </>
    );
  }
}

/*
 * Component名： AccButton
 *
 * Copyright(c) Asia Information System Co., Ltd. All rights reserved.
 *
 * 変更履歴
 * Rev.0 　　　2021/06/04  設計者：車周悦        製造者：車周悦
 */

/*
 *importの目録
 *
 * ToolTipは　material-ui　ライブラリー使用
 *
 * その他のスタイルは　AccButton/style.js　に定義されている
 */
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import { Button, ButtonContent, ButtonDisableBox, Icon } from "./style";

//propsとして　caption, icon, bgColor, hover, isDisabled, onClickを持っている。
const AccButton = ({ caption, icon, bgColor, hover, isDisabled, onClick }) => {
  return (
    <Tooltip title={hover ?? ""} enterDelay={300}>
      <Button bgColor={bgColor} disabled={isDisabled} onClick={onClick}>
        <ButtonDisableBox
          display={isDisabled ? "block" : "none"}
        ></ButtonDisableBox>
        <ButtonContent>
          {icon ? <Icon src={icon} /> : null}
          {caption}
        </ButtonContent>
      </Button>
    </Tooltip>
  );
};

/*propsのタイプチェックを行う
 *
 *コードの構造は下記の通り
 *
 *prop名:PropTypes.タイプ名.必須有無
 */
AccButton.propTypes = {
  caption: PropTypes.string.isRequired,
  icon: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  hover: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AccButton;

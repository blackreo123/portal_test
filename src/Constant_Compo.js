const DIALOGBOX = {
    dialogType: {
      DIAG_TYPE_ALERT: 1,
      DIAG_TYPE_WARNING: 2,
      DIAG_TYPE_ERROR: 3,
      DIAG_TYPE_QUESTION: 4,
      DIAG_TYPE_INFO: 5,
    },
  
    dialogButtonType: {
      DIAG_BTN_OK: 1,
      DIAG_BTN_CANCEL: 2,
      DIAG_BTN_OKCANCEL: 3,
      DIAG_BTN_YES: 4,
      DIAG_BTN_NO: 5,
      DIAG_BTN_YESNO: 6,
    },
  };
  
  const LABEL = {
    LBL_TYPE_NORMAL: 1,
    LBL_TYPE_QUERY: 2,
    LBL_TYPE_ACCENT: 3,
    LBL_TYPE_MANDATORY: 4,
  };
  
  const TEXTFIELD = {
    TXT_TYPE_INTEGER: 1,
    TXT_TYPE_REAL: 2,
    TXT_TYPE_CURRENCY: 3,
    TXT_TYPE_STRING: 4,
    TXT_TYPE_STRING_HW: 5,
    TXT_TYPE_STRING_FW: 6,
  };
  
  const HEIGHT = {
    HEIGHT_LABEL: 2.5,
    HEIGHT_TEXTFIELD: 1.9,
    HEIGHT_SELECT: 1.9,
    HEIGHT_DATEPICKER: 2,
  };
  
  export { DIALOGBOX, LABEL, TEXTFIELD, HEIGHT };
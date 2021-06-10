import { useEffect, useState } from 'react';
import {Modal, Button, Col, Row, Container, ModalBody} from 'react-bootstrap';
import { hexToCSSFilter } from "hex-to-css-filter";
import styled from "styled-components";
import AccButtonApplication from './AccButtonApplication'
import AccButtonBackdown from './AccButtonBackdown'
import AccButtonSave from './AccButtonSave'
import './test.css'
import AccDatePickerDay from './AccDatePickerDay';
import AccSelect from './AccSelect';
import AccVDatePickerDay from './AccVDatePickerDay';
import AccVSelect from './AccVSelect';
import AccVInputInteger from './AccVInputInteger';
import AccButtonImageUpload from './AccButtonImageUpload';
import AccVInputText from './AccVInputText';
import AccLabelApprovalStatus from './AccLabelApprovalStatus';
import { blue } from '@material-ui/core/colors';

const Img = styled.img`
    height : 2rem;
    background-color : ${hexToCSSFilter('#2F6EBA')};
`

export default function ExpExpensesRequest(props){
  const [show, setShow] = useState();

  useEffect(()=>{
      setShow(props.show)
  },[props.show])

      const handleClose = () => {
          setShow(false)
          props.close(false)
      }
  return(
      <>
    <Modal
      
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{backgroundColor : '#FFFFD1'}}>
      <Modal.Header closeButton style={{borderBottom :  '1px solid red', borderTop : '3px solid black', borderLeft : '3px solid black', borderRight : '3px solid black'}}>
      <Img src={process.env.PUBLIC_URL + '/icons/svgs/solid/edit.svg'}/>
        <Modal.Title>経費申請</Modal.Title>
        <div className='buttons'>
          <span><AccButtonSave></AccButtonSave></span>
          <span><AccButtonBackdown></AccButtonBackdown></span>
          <span><AccButtonApplication></AccButtonApplication></span>
        </div>
      </Modal.Header>
      <Modal.Body style={{borderLeft : '3px solid black', borderRight : '3px solid black'}}>
        <div className='body-grid'>
        <div>
          <AccVDatePickerDay labelType={4} caption={'使用日'} bold={true}></AccVDatePickerDay>
        </div>
        <div><AccVSelect labelType={4} caption={'経費区分'} bold={true} listData={['test1', 'test2', 'test3']} fieldWidth={10}></AccVSelect></div>
        <div><AccVInputInteger labelType={4} caption={'申請金額'} bold={true}></AccVInputInteger></div>
        <div><AccButtonImageUpload caption={'領収書添付'}></AccButtonImageUpload></div>
        <div><AccVInputText labelType={4} caption={'目的'} bold={true}></AccVInputText></div>
        <div className='uchiwake'><AccVInputText labelType={1} caption={'内訳'} bold={true} textFieldWidth={29}></AccVInputText></div>
        <div className='thumbnail'>그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림그림</div>
        <div className='companion'><AccVInputText labelType={1} caption={'同席者（交際費、会議費の場合）'} bold={true} textFieldWidth={46.3}></AccVInputText></div>
        <div><AccLabelApprovalStatus caption={'申請'}></AccLabelApprovalStatus></div>
        <div className='sinseibi'>1</div>
        
        
    
        
        </div>
        

      </Modal.Body>
      <Modal.Footer style={{borderTop :  '1px solid red', padding : '24px', borderLeft : '3px solid black', borderRight : '3px solid black', borderBottom : '3px solid black'}}>
      </Modal.Footer>
      </div>
    </Modal>
  </>
  )
}
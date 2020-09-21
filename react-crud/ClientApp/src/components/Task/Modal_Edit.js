import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup, Label,Input } from 'reactstrap';
import axios from 'axios';

function ModalCustom(props) {
  const {
    buttonLabel,
    className
  } = props;
const {id,name,status,startDate,endDate} = props.data;
  const [item,setItem] = useState({
    id,name,status,startDate,endDate
  })

  const toggle = () => {
    props.handleShowModal(props.status)
  }
  function handleChange(e) {
    let { name, value } = e.target;
    if(name === 'status') value = parseInt(value);
    setItem(
      {...item,[name]:value}
    )
  }

  const handleSave = (item) => {
    const newItem = {...item};
    newItem.id = item.id;
    axios({
      method:"post",
      url:`https://localhost:44350/api/task`,
      data:newItem
    }).then(res=> {
      console.log('Success')
      props.handleUpdate(true)
      toggle();
    }).catch(err=> {
      console.log("Error");
    })
  }

  return (
    <div>
      <Modal isOpen={props.status} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="name">Tên</Label>
        <Input type="text" name="name" id="exampleEmail" onChange={handleChange} value={item.name} />
      </FormGroup>
      <FormGroup>
        <Label for="startDate">Ngày bắt đầu</Label>
        <Input type="text" name="startDate" id="startDate" onChange={handleChange} value={item.startDate}/>
      </FormGroup>
      <FormGroup>
        <Label for="endDate">Ngày bắt kết thúc</Label>
        <Input type="text" name="endDate" id="endDate" onChange={handleChange} value={item.endDate}/>
      </FormGroup>
      <FormGroup>
        <Label for="status">Trạng thái</Label>
        <Input type="select" name="status" id="status" onChange={handleChange} value={item.status}>
        <option value = {-1}>Đang thực hiện</option>
         <option value = {0}>Chưa thực hiện</option>
         <option value = {1}>Đã hoàn thành</option>
        </Input>
      </FormGroup>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() =>handleSave(item)}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  }
  export default ModalCustom;
import React, { useState, render } from 'react';
import Moment from 'react-moment';
import ModalTask from './Modal_Edit';
import axios from 'axios';

function TaskItem(props) {
    const [isClick, setCLick] = useState(false);
    const [itemCur, setItemCur] = useState();

    function handleShow(item) {
        setCLick(true);
        setItemCur(item);
    }

    function handleDelete(id) {
        axios({
            method: "delete",
            url: `https://localhost:44350/api/task/${id}`,
            data: null
        }).then(res => {
            console.log('Success')
            props.handleUpdate(false)

        }).catch(err => {
            console.log("Error");
        })
    }

    function handleModal(val) {
        setCLick(!val)
    }

    function setStatus(status) {
        var nameStatus = '';
        if (status === 1) {
            nameStatus = 'Đã hoàn thành';
        } else if (status === -1) {
            nameStatus = 'Đang thực hiện';
        } else {
            nameStatus = 'Chưa thực hiện';
        }
        return nameStatus;
    }

    return (
        <>
            {props.listTasks.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td className="text-center">
                            <Moment format="DD-MM-YYYY">{item.startDate}</Moment>
                        </td>
                        <td className="text-center">
                            <Moment format="DD-MM-YYYY">{item.endDate}</Moment>
                        </td>
                        <td className="text-center">
                            {setStatus(item.status)}
                        </td>
                        <td className="text-center">
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => handleShow(item)}>
                                <span className="fa fa-pencil mr-2"></span>Sửa
                            </button>&nbsp;
                            <button
                                type="button" className="btn btn-danger"
                                onClick={() => handleDelete(item.id)}>
                                <span className="fa fa-trash mr-2"></span>Xóa
                            </button>
                            {isClick && <ModalTask status={isClick} handleUpdate={props.handleUpdate} handleShowModal={handleModal} data={itemCur} />}
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default TaskItem;



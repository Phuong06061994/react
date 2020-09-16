import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import axios from 'axios';
import ModalTask from './Modal_Task';
function TaskList() {
    const [Tasks, setTasks] = useState([]);
    const [isUpdate, setUpdate] = useState(false);
    const [isClick, setCLick] = useState(false);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://localhost:44350/api/task',
            // url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
            // data: null
        }).then(response => {
            console.log(response.data);
            const { data } = response;
            setTasks(data);
        }).catch(err => {
            console.log(err);
        });
    }
        , [isUpdate]);

    const handleUpdate = () => {
        setUpdate(!isUpdate)
    }
    function handleCreate() {
        setCLick(true);
    }
    function handleModal(val) {
        setCLick(!val)
    }

    return (
        <>
            <div>
                <div className="titlePage">
                    <h2 >Quản lí công việc</h2>
                </div>
                <div className="container-fluid">
                    <div className="mb-1">
                        <button
                            type="button" className="btn btn-primary"
                            onClick={() => handleCreate()}>
                            <span className="fa fa-plus mr-2"></span>Tạo mới
                </button>
                {isClick&&<ModalTask status={isClick} handleUpdate={isUpdate} handleShowModal={handleModal} data={null} /> } 
                    </div>
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">Tên</th>
                                        <th className="text-center">Ngày bắt đầu</th>
                                        <th className="text-center">Ngày kết thúc</th>
                                        <th className="text-center">Trạng Thái</th>
                                        <th className="text-center">Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TaskItem listTasks={Tasks} handleUpdate={handleUpdate} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default TaskList;



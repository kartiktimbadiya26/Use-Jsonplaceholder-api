import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function Albums() {
    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(function (response) {
                console.log(response);
                setdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.userId}</td>
                                    <td>{element.id}</td>
                                    <td>{element.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

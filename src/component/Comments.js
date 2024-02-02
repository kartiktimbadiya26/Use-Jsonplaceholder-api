import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function Comments() {

    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
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
                        <th>PostId</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.postId}</td>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

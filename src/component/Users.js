import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function Users() {
    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
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
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>suite</th>
                        <th>city</th>
                        <th>zipcode</th>
                        <th>lat</th>
                        <th>lng</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>Name</th>
                        <th>catchPhrase</th>
                        <th>bs</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.username}</td>
                                    <td>{element.email}</td>
                                    <td>{element.address.street}</td>
                                    <td>{element.address.suite}</td>
                                    <td>{element.address.city}</td>
                                    <td>{element.address.zipcode}</td>
                                    <td>{element.address.geo.lat}</td>
                                    <td>{element.address.geo.lng}</td>
                                    <td>{element.phone}</td>
                                    <td>{element.website}</td>
                                    <td>{element.company.name}</td>
                                    <td>{element.company.catchPhrase}</td>
                                    <td>{element.company.bs}</td>


                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Photos() {
    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
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
            <div className="main">
                {
                    data.map((element, index) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={element.url} />
                                <Card.Body>
                                    <Card.Title>{element.albumId} - {element.id}</Card.Title>
                                    <Card.Text>{element.title}</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link ><Link to='/'>Posts</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link ><Link to="/comments">Comments</Link></Nav.Link>
                </Nav.Item><Nav.Item>
                    <Nav.Link ><Link to="/albums">Albums</Link></Nav.Link>
                </Nav.Item><Nav.Item>
                    <Nav.Link ><Link to="/photos">Photos</Link></Nav.Link>
                </Nav.Item><Nav.Item>
                    <Nav.Link ><Link to="/todos">Todos</Link></Nav.Link>
                </Nav.Item><Nav.Item>
                    <Nav.Link ><Link to="/users">Users</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

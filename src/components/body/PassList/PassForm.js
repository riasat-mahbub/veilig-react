import React, { useEffect, useState } from 'react'
import {Modal, Button} from 'react-bootstrap';

import {genPassUrl} from '../../../urlData/urlData'

import './PassForm.css'

const PassForm = ({show, handleClose}) =>{
    const [userPass, setUserPass] = useState('')

    const genPass = async() => {
        const response = await fetch(genPassUrl);
        const responseData = await response.json()
        setUserPass(response)
    }

    const handlePassChange = (event) =>{
        setUserPass(event.target.value)
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>User Name</p>
                    <input type='text'></input>
                </div>

                <div>
                    <p>URL</p>
                    <input type='text'></input>
                </div>

                <div>
                    <p>Password</p>
                    <input type='password' value={userPass} onChange={handlePassChange}></input>
                    <img src = 'spin.svg' id = 'genPass' onClick={genPass}></img>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PassForm
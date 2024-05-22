import React, { useState } from 'react';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Users() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="container">
      <div>
        <div className="flex gap-2 justify-between">
          <h1 className="pageTitle">Users</h1>
          <button className="hover:text-white hover:bg-gray-300 rounded-full p-2" onClick={toggle}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="2xl"
              style={{ color: "#203682" }}
            />
          </button>
        </div>
        <div className="border-2 flex flex-col justify-between gap-2 m-2 text-center ">
          <div className="flex flex-col sm:flex-row justify-between">
            <h1>User ID</h1>
            <h1>User Name</h1>
            <h1>User Surname</h1>
            <h1>User Role</h1>
            <p>Email addy</p>
            <p>Phone</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <h1>User ID</h1>
            <h1>User Name</h1>
            <h1>User Surname</h1>
            <h1>User Role</h1>
            <p>Email addy</p>
            <p>Phone</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <h1>User ID</h1>
            <h1>User Name</h1>
            <h1>User Surname</h1>
            <h1>User Role</h1>
            <p>Email addy</p>
            <p>Phone</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <h1>User ID</h1>
            <h1>User Name</h1>
            <h1>User Surname</h1>
            <h1>User Role</h1>
            <p>Email addy</p>
            <p>Phone</p>
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

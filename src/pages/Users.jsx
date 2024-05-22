import React, { useState } from 'react';
import { faMinusCircle, faPlusCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../store/actions/userAction';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

  const [modal, setModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const toggle = () => setModal(!modal);

  const onSubmit = async (data) => {
    if (isEditMode) {
      dispatch(updateUser({ ...data, id: currentUserId }));
      toast.success("Kullanıcı başarıyla güncellendi!", {
        position: "top-right",
      });
    } else {
      dispatch(addUser({ ...data, id: Date.now() }));
      toast.success("Kullanıcı başarıyla eklendi!", {
        position: "top-right",
      });
    }
    reset();
    toggle();
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.success("Kullanıcı başarıyla silindi!", {
      position: "top-right",
    });
  };

  const handleEdit = (user) => {
    setCurrentUserId(user.id);
    setIsEditMode(true);
    setValue('name', user.name);
    setValue('phone', user.phone);
    setValue('email', user.email);
    setValue('password', user.password);
    setValue('userRole', user.userRole);
    toggle();
  };

  return (
    <div className="container">
      <div>
        <div className="flex gap-2 justify-between">
          <h1 className="pageTitle">Users</h1>
          <button className="hover:text-white hover:bg-gray-300 rounded-full p-2" onClick={() => { reset(); setIsEditMode(false); toggle(); }}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="2xl"
              style={{ color: "#203682" }}
            />
          </button>
        </div>
        <div className="border-2 m-2 text-center">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Full Name</th>
                <th>User Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.userRole}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.phone}</td>
                  <td className="p-2 flex justify-center">
                    <button className="hover:text-white hover:bg-gray-300 rounded-full p-2 mx-1" onClick={() => handleEdit(user)}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        size="2xl"
                        style={{ color: "#007BFF" }}
                      />
                    </button>
                    <button className="hover:text-white hover:bg-gray-300 rounded-full p-2 mx-1" onClick={() => handleDelete(user.id)}>
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        size="2xl"
                        style={{ color: "#FF0000" }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{isEditMode ? 'Edit User' : 'Add New User'}</ModalHeader>
        <ModalBody>
          <div className="flex flex-col items-center gap-4">
            <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-col flex p-3 gap-3 rounded-xl">
                <div className="flex flex-col gap-2">
                  <h3 className="text-textColor text-lg leading-6">FullName</h3>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Full Name *"
                    className="form-input"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm leading-7">
                      FullName Cannot Be Empty
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-textColor text-lg leading-6">
                    Phone *
                  </h3>
                  <input
                    {...register("phone", {
                      required: true,
                      pattern: /^(\+90|0)?\d{10}$/,
                    })}
                    type="text"
                    placeholder="Phone * _(___)_______"
                    className="form-input"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm leading-7">
                      Please Enter A Valid Phone Number. "+90- XXX XXX
                      XX XX"
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-textColor text-lg leading-6">Email *</h3>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    type="email"
                    placeholder="Email *"
                    className="form-input"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm leading-7">
                      Lütfen Geçerli Bir Email Giriniz.
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-textColor text-lg leading-6">Password *</h3>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/,
                    })}
                    type="password"
                    placeholder="Password *"
                    className="form-input"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm leading-7">
                      Şifreniz en az 8 karakter olmalı ve büyük-küçük harf, rakam ve özel karakter içermelidir.
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-textColor text-lg leading-6">User Role</h3>
                  <select
                    {...register("userRole", { required: true })}
                    className="form-input"
                  >
                    <option value="">Please Pick User Role</option>
                    <option value="Admin">Admin</option>
                    <option value="superAdmin">Super Admin</option>
                    <option value="User">User</option>
                  </select>
                  {errors.productType && (
                    <span className="text-red-500 text-sm leading-7">
                      User Role Must Be Picked.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit(onSubmit)}>
            {isEditMode ? 'Update User' : 'Save User'}
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

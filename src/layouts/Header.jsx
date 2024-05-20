import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Button
} from 'reactstrap';

export default function Header() {
  const history = useHistory();
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    setOpen(open === id ? '' : id);
  };

  return (
    <div className="container primaryColor py-3 ">
      <div className="flex flex-col justify-between items-center">
        <div className="logo">
          <img
            src="https://www.gokhangultan.com/logo.gg2.png"
            className="lg:max-w-[150px] max-w-[100px] object-contain pb-3 "
            alt="Logo"
          />
        </div>
        <nav className="hidden lg:flex flex-col justify-between gap-3 basis-2/6 header-nav">
        <Button className="text-xl px-5 py-3 mt-3 bg-white text-black border-none"  onClick={() => {
                history.push("/");
              }}>
            Dashboard
          </Button>
          <Accordion open={open} toggle={toggle} className="w-full  ">
            <AccordionItem>
              <AccordionHeader targetId="1">
                <span className="px-48 text-xl ">Pages</span>
              </AccordionHeader>
              <AccordionBody accordionId="1" className="px-5 text-xl">
                <div className="flex flex-col gap-3 text-center ">
                  <Link to="/users">Users</Link>
                  <Link to="/categories">Categories</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/orders">Orders</Link>
                  <Link to="/users">Users</Link>
                 
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
          <Button className="text-xl px-5 py-3  bg-white text-black border-none"  onClick={() => {
                history.push("/profile");
              }}>
            Profile
          </Button>
        </nav>
      </div>
    </div>
  );
}

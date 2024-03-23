import React from 'react'
import {
   Route,
} from "react-router-dom";
import { About, Contact, NavBar, Services } from '../components';

const routes = () => {
  return (
    <>
    <Route path="/" element={<NavBar />}>
    <Route path="/service" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />


    </Route>
    </>
  )
}

export default routes

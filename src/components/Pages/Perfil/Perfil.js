import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase/credenciales";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getPaymentByUID from "../../../functions/getPaymentsByUID";
import { useUserContext } from "../../../contexts/userContext";
import PerfilCanvas from "../../Perfil/PerfilRobot";
import './Perfil.css'

export default function Perfil() {
  const { user } = useUserContext();
  const [payments, setPayments] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function getPayments() {
      if (!user) return;
      const payments = await getPaymentByUID(user.uid);
      setPayments(payments);
    }
    getPayments();
  }, [user]);

  function logout() {
    signOut(auth);
    toast.info('See you soon!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        setTimeout(() => {
            navigate("/");
          }, 2000);
  }

  return(
      
    <>
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    
     <div className="profile-container">
    
    
    {user ?  (<div>
        <div>Perfil</div>
        <div>Welcome {user.email} - {user.uid}</div>

        {/* {payments.length > 0 && payments.map((payment )=>{payment.amount/100})} */}
       <div className="canvas"> <PerfilCanvas/> </div>
        <button onClick={logout}>Cerrar Sesión</button>
        </div> ):( "LOGIN PLEASE")}
        </div>
      
    </>
  );
}

import React from "react";
import { useEffect, useState } from "react";

function Cart() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);
  return <div>
    
  </div>;
}

export default Cart;

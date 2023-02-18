import React, { useState, useEffect } from "react";

const useRedirect = (isSuccess, route) => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      setRedirect(true);
    }
  }, [isSuccess]);

  if (redirect) {
    window.location.href = route;
  }
  return null;
}

export default useRedirect;
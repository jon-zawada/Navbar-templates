// export function NotFound() {
//   return <h1>NotFound</h1>
// }  alternative to navigate component

import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000);
  })
  return <h1>Not Found</h1>
}
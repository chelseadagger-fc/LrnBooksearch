//   const items = ['Casablanca','London','Istbanbul','Milan','Buenos Aires','Tokyo','Nairobi'];

import { ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.css';

interface Props {
    children: ReactNode;
    onClick: () => void;
}


const Alert = ({children, onClick}: Props) => {

  return (
    <div className="alert alert-warning alert-dismissable fade show" role="alert">
      {children}
      <button onClick={onClick} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
import { useState } from 'react';
import Alert from './components/Alert';
import InfoButton from './components/InfoButton'
import 'bootstrap/dist/css/bootstrap.css'


export default function App() {
  const [isVisible, setVisibility] = useState(false);
  
  const showAlert = () => {
    setVisibility(true);
  }

  const hideAlert = () => {
    setVisibility(false);
  }

  return (
      <div>
        {
          isVisible && <Alert 
          children="This is the alert."
          onClick={hideAlert} />
        }

        <InfoButton 
        color="info" 
        onClick={showAlert} 
        children="Click for Information" />


      </div>
    );
}
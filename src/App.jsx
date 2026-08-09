import { useState } from 'react'
import ExpenseHomePage from './ExpenseHomePage'
import WelcomePage from './Common/WelcomePage'

function App() {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || '';
  });

  let handleContinue = (name) => {
    localStorage.setItem("userName", name);
    setUserName(name);
  }

  if (!userName) {
    return <WelcomePage onContinue={handleContinue}/>
  }

  return (
   <>
      <ExpenseHomePage userName={userName}/>
   </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import User from './interfaces/UserInterface'

function App() {
  
  const [user, setUser] = useState<User>({
    name: '',
    surname: '',
    dob: null,
  })

  useEffect(() => {
    setUser({
      name: 'Juan',
      surname: 'Pérez',
      dob: new Date(1980, 0, 1)
    })
  }, [])

  return (
    <div className="App">
        <h1>Usuario</h1>
        <p>Nombre {user.name}</p>
        <p>Apellidos {user.surname}</p>
        <p>Año de nacimiento {user.dob?.getFullYear()}</p>
    </div>
  )
}

export default App

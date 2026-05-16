import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

const App = () => {
  return (
    <div>
      <PasswordInput />
      <SubmitButton />
    </div>
  )
}

export default App
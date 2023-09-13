import './App.css'
import { useOnlineStatus } from './useOnlineStatus'
import { useFormInput } from './useFormInput'

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();
  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

function Form() {
  const firstName = useFormInput("Harsh");
  const lastName = useFormInput("Sheth");

return (
<>
<label>
        First name:
        <input {...firstName} />
      </label>
      <label>
        Last name:
        <input {...lastName} />
      </label>
      <p><b>Good morning, {firstName.value} {lastName.value}.</b></p>
 

</>)

}


export default function App() {
  return (
    <>
      <Form />
      <StatusBar />  
      <SaveButton />  
    </>


  )
}


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jslogo from './assets/js-logo-xs.png'

function App() {

  const [count, setCount] = useState(0)

  const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem",
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering",
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)",
    ],
  
  ];

 

  return (
    <>
      <header>
        <img src={jslogo} alt="Javascript logo"/>
        
      </header>
      <div>
        <h1>React JSX</h1>
        <p>i.e., JavaScript with React Library</p>
      </div>

      <div id='tabs'>
        <menu>
          <Button>Why React</Button>
          <Button>Core Features</Button>
          <Button>Related Resources</Button>
        </menu>
        <div>
          
        </div>
      </div>
    </>
  )
}

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button>
      {children}
    </button>
  );
}
export default App

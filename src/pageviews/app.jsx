import { useState } from 'preact/hooks'

import '../layouts/Styles/bcmainstyles.css'
import SeeBusinessCardContent from '../components/SeeBusinessCardContent';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* So sieht ein Kommentar in JSX aus */}
      <SeeBusinessCardContent />
    </>
  )
}

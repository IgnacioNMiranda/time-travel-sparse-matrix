import { useMemo } from 'react'
import { AudioManager } from './components/audio-manager'
import { useSpareMatrixStore } from './state/spare-matrix'
import { DimensionsForm } from './components/dimensions-form'
import { SparseMatrixGame } from './components/sparse-matrix-game'
import './styles.css'
import { TextBox } from './components/text-box'

function App() {
  const { rows, columns } = useSpareMatrixStore()

  const isSetup = useMemo(() => !!rows && !!columns, [rows, columns])

  return (
    <main
      className="h-screen grid place-items-center px-4 relative chrono-font"
      style={{
        background: `url('/background-image.webp')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {!isSetup && <DimensionsForm />}

      {isSetup && <SparseMatrixGame />}

      {isSetup && <TextBox />}

      <AudioManager play={isSetup} />
    </main>
  )
}

export default App

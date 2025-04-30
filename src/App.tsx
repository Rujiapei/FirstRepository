import TimeCard from './components/TimeCard'
import styled from '@emotion/styled'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
`

function App() {
  return (
    <AppContainer>
      <TimeCard />
    </AppContainer>
  )
}

export default App

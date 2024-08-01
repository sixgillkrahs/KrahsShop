

import { ConfigProvider } from 'antd'
import './App.css'
import { RecoilRoot } from 'recoil'
import RootRoute from './components/routes/rootRoute'

function App() {
  

  return (
    <>
      <ConfigProvider>
        <RecoilRoot>
          <RootRoute/>
        </RecoilRoot>
      </ConfigProvider>
    </>
  )
}

export default App

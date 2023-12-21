import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RdAppExtends, RdModule, RdModulesManager } from '@radts/reactjs'

ReactDOM.createRoot(document.getElementById('root')!).render(
     <RdAppExtends
            appProps={{
              modules:   new RdModulesManager<RdModule>(),
              configs: {
                closeModalOnTapOutside: true,
                maxAmountMessage: 5,
              },
            }}
          >
            <App />
          </RdAppExtends>
)

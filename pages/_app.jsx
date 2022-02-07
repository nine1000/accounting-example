import { AppContextProvider } from "../src/components/AppContext"
import "../styles/globals.css"

const id = (x) => x

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || id

  return getLayout(
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default App

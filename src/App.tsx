import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

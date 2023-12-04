import './App.css'
import { useTranslation } from 'react-i18next'
import './i18n'

function App() {
  const { t, i18n } = useTranslation();
  const switchLanguageTo = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <button onClick={() => switchLanguageTo("pt")}>Português</button>
      <button onClick={() => switchLanguageTo("en")}>English</button>
      <button onClick={() => switchLanguageTo("es")}>Español</button>
      <hr />
      <h1>{t('title')}</h1>
      <p>{t('intro.part1')}</p>
      <p>{t("intro.part2")}</p>
    </>
  )
}

export default App

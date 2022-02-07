import { useContext } from "react"
import AppContext from "../src/components/AppContext"
import Journal from "../src/components/Journal"
import Page from "../src/components/Page"

const IndexPage = () => {
  const { entries } = useContext(AppContext)

  return <Journal entries={entries} />
}

IndexPage.getLayout = (page) => <Page title="Dashboard">{page}</Page>

export default IndexPage

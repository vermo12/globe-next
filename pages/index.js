import DWP from '../components/Page/DWP/DWP'
import Layout from '../components/Layout/Layout'
import { getCobaltSectionPage } from '../lib/cobalt-cms/cobalt-api'

export default function Home({ pageData }) {
  return (
    <Layout pageType='home'>
        <DWP pageData={pageData}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const pageData = await getCobaltSectionPage('/');

  return {
      props: {
          pageData
      },
      revalidate: 30
  }

}

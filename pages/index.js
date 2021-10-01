import DWP from '../components/Page/DWP/DWP'
import Layout from '../components/Layout/Layout'
import { getCobaltPage } from '../lib/cobalt-cms/cobalt-api'

export default function Home({ pageData }) {
  return (
    <Layout pageType='home'>
        <DWP pageData={pageData}/>
    </Layout>
  )
}

export async function getStaticProps() {
  console.log('RENDERING: /');
  const pageData = await getCobaltPage('/');

  return {
      props: {
          pageData
      },
      revalidate: 5
  }

}

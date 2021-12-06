import DWP from '../components/Page/DWP/DWP'
import Layout from '../components/Layout/Layout'
import { getCobaltPageByUrl as getCobaltPageByUrl, getCobaltSite } from '../lib/cobalt-cms/cobalt-api'

export default function Home({ cobaltData }) {

  return (
    <Layout siteStructure={cobaltData.siteContext.siteStructure} pageType='home'>
        <DWP cobaltData={cobaltData}/>
    </Layout>
  )
}

export async function getStaticProps() {
  console.log('RENDERING: /');
  const cobaltData = await getCobaltPageByUrl('/');

  return {
      props: {
          cobaltData
      },
      revalidate: 5
  }

}

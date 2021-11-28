import DWP from '../components/Page/DWP/DWP'
import Layout from '../components/Layout/Layout'
import { getCobaltPage, getCobaltSite } from '../lib/cobalt-cms/cobalt-api'
import { getCobaltDataHelper } from '../lib/cobalt-cms/cobalt-helpers'

export default function Home({ responseData, siteStructure, url }) {

  const cobaltData = {
    object: {
      data: responseData.model.data,
      helper: getCobaltDataHelper(responseData.model.data),
    },
    linkContext: null,
    pageContext: {
      url: url,
      nodes: responseData.model.nodes,
      resourcesUrls: responseData.resourcesUrls,
      nodesUrls: responseData.nodesUrls
    },
    siteContext: {
        siteStructure
    }
  }

  console.log(cobaltData.object.helper)

  return (
    <Layout siteStructure={cobaltData.siteContext.siteStructure} pageType='home'>
        <DWP cobaltData={cobaltData}/>
    </Layout>
  )
}

export async function getStaticProps() {
  console.log('RENDERING: /');
  const responseData = await getCobaltPage('/');
  const siteStructure = await getCobaltSite();

  return {
      props: {
          responseData,
          siteStructure,
          url: '/'
      },
      revalidate: 5
  }

}

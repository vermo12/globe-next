import DWP from '../components/Page/DWP/DWP'
import Layout from '../components/Layout/Layout'
import { getCobaltPage } from '../lib/cobalt-cms/cobalt-api'
import { getCobaltDataHelper } from '../lib/cobalt-cms/cobalt-helpers'

export default function Home({ responseData, url }) {

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
    }
  }

  console.log(cobaltData.object.helper)

  return (
    <Layout pageType='home'>
        <DWP cobaltData={cobaltData}/>
    </Layout>
  )
}

export async function getStaticProps() {
  console.log('RENDERING: /');
  const responseData = await getCobaltPage('/');

  return {
      props: {
          responseData,
          url: '/'
      },
      revalidate: 5
  }

}

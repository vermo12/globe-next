import DWP from "../components/Page/DWP/DWP";
import Layout from "../components/Layout/Layout";
import { getCobaltPage } from "../lib/cobalt-cms/cobalt-api";
import GenericDetails from "../components/Page/Details/GenericDetails";
import { getCobaltDataHelper } from "../lib/cobalt-cms/cobalt-helpers";

export default function Page ( {responseData,url } ){

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

    let render = null;
    let pageType = null;
    switch (cobaltData.object.data.sys.baseType) {
        case 'webpage':
            pageType = "section";
            render = <DWP cobaltData={cobaltData}/>
            break;
        default:
            pageType = "details";
            render = <GenericDetails cobaltData={cobaltData}/>
    }

    return (
        <Layout pageType={pageType}>
           {render}
        </Layout>
      )
}



export async function getStaticPaths({}) {
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    console.log('RENDERING: ' + params.url.join('/'));
    const url = params.url.join('/');
    
    const responseData = await getCobaltPage(url);
    
    const props = {
        responseData,
        url
    };

    let revalidate = 60;

    switch (responseData.model.data.sys.baseType){
        case 'webpage':                       
            revalidate = 5;
            break;
        default:
            revalidate = 60;
    }
    
    return {
        props: props,
        revalidate: revalidate
    }

}
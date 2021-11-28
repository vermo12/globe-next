import DWP from "../components/Page/DWP/DWP";
import Layout from "../components/Layout/Layout";
import { getCobaltPage, getCobaltSite } from "../lib/cobalt-cms/cobalt-api";
import GenericDetails from "../components/Page/Details/GenericDetails";
import { getCobaltDataHelper } from "../lib/cobalt-cms/cobalt-helpers";

export default function Page ( {responseData, siteStructure, url } ){

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
        <Layout siteStructure={cobaltData.siteContext.siteStructure} pageType={pageType}>
           {render}
        </Layout>
      )
}



export async function getStaticPaths({}) {

    const response = await getCobaltSite();
    let paths = [];
    try {
        paths = response.root.items.map((item) => {
            return item.uri
        })
    } catch(e){
        // nothing
    }
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    console.log('RENDERING: ' + params.url.join('/'));
    const url = params.url.join('/');
    
    const responseData = await getCobaltPage(url);
    const siteStructure = await getCobaltSite();
    
    const props = {
        responseData,
        siteStructure,
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
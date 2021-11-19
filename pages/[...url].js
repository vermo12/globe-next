import DWP from "../components/Page/DWP/DWP";
import Layout from "../components/Layout/Layout";
import { getCobaltPage } from "../lib/cobalt-cms/cobalt-api";
import GenericDetails from "../components/Page/Details/GenericDetails";

export default function Page ( {pageData} ){

    let render = null;
    let pageType = null;
    switch (pageData.model.data.sys.baseType) {
        case 'webpage':
            pageType = "section";
            render = <DWP pageData={pageData}/>
            break;
        default:
            pageType = "details";
            render = <GenericDetails pageData={pageData}/>
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
    
    const pageData = await getCobaltPage(params.url.join('/'));
    
    const props = {
        pageData
    };

    let revalidate = 60;

    switch (pageData.model.data.sys.baseType){
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
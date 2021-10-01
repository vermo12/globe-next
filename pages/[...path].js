import DWP from "../components/Page/DWP/DWP";
import Layout from "../components/Layout/Layout";
import { getCobaltPage } from "../lib/cobalt-cms/cobalt-api";
import GenericDetails from "../components/Page/Details/GenericDetails";

export default function Page ( {pageData, pageType} ){
    return (
        <Layout pageType={pageType}>
            {pageType === 'section'?<DWP pageData={pageData}/>:<GenericDetails pageData={pageData}/>}
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
    console.log('RENDERING: ' + params.path.join('/'));
    let props = null;
    let revalidate = 60;
    const pageData = await getCobaltPage(params.path.join('/'));
    switch (pageData.sys.baseType){
        case 'article':
            // This is an article page
            props = {
                pageType: 'details',
                pageData
            };
            revalidate = 60;
            break;
        case 'webpage':
            //this is a section page
            props = {
                pageType: 'section',
                pageData
            };
            revalidate = 5;
            break;
    }
    

    return {
        props: props,
        revalidate: revalidate
    }

}
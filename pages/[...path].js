import DWP from "../components/Page/DWP/DWP";
import Layout from "../components/Layout/Layout";
import { getCobaltContentPage, getCobaltSectionPage } from "../lib/cobalt-cms/cobalt-api";
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
    console.log(params.path);
    let props = null;
    let revalidate = 300;
    if (params.path.includes('index.html')){
        // This is an article page
        console.log("THIS IS ARTICLE")
        const pageData = await getCobaltContentPage(params.path.join('/'))
        props = {
            pageType: 'details',
            pageData
        }
        
    } else {
        //this is a section page
        const pageData = await getCobaltSectionPage(params.path.join('/'));
        props = {
            pageType: 'section',
            pageData
        }
        revalidate = 30
    }

    return {
        props: props,
        revalidate: revalidate
    }

}
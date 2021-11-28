import ArticleFragment1colBig from "./ArticleFragment1colBig";
import ArticleFragmentDefault from "./ArticleFragmentDefault";
import ArticleFragmentBox from "./ArticleFragmentBox";
import WebContainerFragment from "./WebContainerFragment";

export default function GenericFragment({cobaltData}) {
   
    const baseType = cobaltData.object.data.sys.baseType;
    const linkZone = cobaltData.linkContext.linkData.zone;
    const linkTemplate = cobaltData.linkContext.linkData.template;
    let render = null;

    switch (baseType) {
        case "article":
            if (!linkTemplate){
                switch(linkZone) {
                    case "main":
                    case "header":
                    case "footer":
                        render = <ArticleFragmentDefault cobaltData={cobaltData}/>;
                        break;
                    case "box":
                        render = <ArticleFragmentBox cobaltData={cobaltData}/>;
                        break;
                }
            } else {
                switch(linkTemplate) {
                    case "1col_big":
                        render = <ArticleFragment1colBig cobaltData={cobaltData}/>
                        break;
                }
            }      
            break;
        case "webpagefragment":
            render = <WebContainerFragment cobaltData={cobaltData}/>;
            break;
        default:
            render = <p>No template found! {baseType + "/" + linkZone + "/" + linkTemplate}</p>;

    }
    return render;
}
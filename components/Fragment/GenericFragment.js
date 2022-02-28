import ArticleFragment1colBig from "./ArticleFragment1colBig";
import ArticleFragmentDefault from "./ArticleFragmentDefault";
import ArticleFragmentBox from "./ArticleFragmentBox";
import WebContainerFragment from "./WebContainerFragment";

export default function GenericFragment({ cobaltData, index }) {

    let render = null;

    try {

        const baseType = cobaltData.object.data.sys.baseType;
        const linkZone = cobaltData.linkContext.linkData.zone;
        const linkTemplate = cobaltData.linkContext.linkData.template;


        switch (baseType) {
            case "article":
                if (!linkTemplate) {
                    switch (linkZone) {
                        case "main":
                        case "header":
                        case "footer":
                            render = <ArticleFragmentDefault cobaltData={cobaltData} index={index} />;
                            break;
                        case "box":
                            render = <ArticleFragmentBox cobaltData={cobaltData} />;
                            break;
                    }
                } else {
                    switch (linkTemplate) {
                        case "1col_big":
                            render = <ArticleFragment1colBig cobaltData={cobaltData} />
                            break;
                    }
                }
                break;
            case "webpagefragment":
                render = <WebContainerFragment cobaltData={cobaltData} />;
                break;
            default:
                render = <p>No template found! {baseType + "/" + linkZone + "/" + linkTemplate}</p>;

        }
    } catch (e) { console.log(e) }
    return render;
}
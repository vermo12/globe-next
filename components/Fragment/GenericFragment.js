import ArticleFragmentBasic from "./ArticleFragmentBasic";
import ArticleFragmentBox from "./ArticleFragmentBox";
import WebContainerFragment from "./WebContainerFragment";

export default function GenericFragment({cobaltData}) {
   
    const type = cobaltData.object.data.sys.type;
    const linkZone = cobaltData.linkContext.linkData.zone;
    const linkTemplate = cobaltData.linkContext.linkData.template;
    let render = null;

    switch (type) {
        case "article":
            if (!linkTemplate)
            {
                switch(linkZone) {
                    case "main":
                    case "header":
                    case "footer":
                        render = <ArticleFragmentBasic cobaltData={cobaltData}/>;
                        break;
                    case "box":
                        render = <ArticleFragmentBox cobaltData={cobaltData}/>;
                        break;
                }
            }       
            break;
        case "box":
            render = <WebContainerFragment cobaltData={cobaltData}/>;
            break;
        default:
            render = <p>No template found!</p>;

    }
    return render;
}
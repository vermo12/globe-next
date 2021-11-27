import ArticleFragment from "./ArticleFragment";
import WebContainerFragment from "./WebContainerFragment";

export default function GenericFragment({objectData, linkData}) {
    const type = objectData.sys.type;
    let render = null;

    switch (type) {
        case "article": 
            render = <ArticleFragment objectData={objectData} linkData={linkData}/>;
            break;
        case "box":
            render = <WebContainerFragment objectData={objectData} linkData={linkData}/>;
            break;
        default:
            console.log("----")
            console.log(objectData);
            render = <p>No template found!</p>;

    }
    return render;
}
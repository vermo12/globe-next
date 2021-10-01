import ArticleFragment from "./ArticleFragment";

export default function GenericFragment({objectData, linkData}) {
    const type = objectData.sys.type;

    let render = null;

    switch (type) {
        case "article": 
            render = <ArticleFragment objectData={objectData} linkData={linkData}/>;
            break;
        default:
            render = <p>No template found!</p>;

    }
    return render;
}
import ArticleDetails from "./ArticleDetails"

export default function GenericDetails({ cobaltData }){
    let details = (
        <p>no details template found!</p>
    )

    switch(cobaltData.object.data.sys.type){
        case "article":
            details = <ArticleDetails cobaltData={cobaltData}/>
    }

    return details;
}
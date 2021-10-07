import ArticleDetails from "./ArticleDetails"

export default function GenericDetails({ pageData }){
    let details = (
        <p>no details template found!</p>
    )

    switch(pageData.model.data.sys.type){
        case "article":
            details = <ArticleDetails pageData={pageData}/>
    }

    return details;
}
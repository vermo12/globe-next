import { xml2json } from 'xml-js'

export function getCobaltDataHelper(data){
    let helper = null;
    switch(data.sys.baseType){
        case "webpage":
            return getCobaltWebPageHelper(data);
            break;
        case "webpagefragment":
            return getCobaltWebPageHelper(data);
            break;
        case "article":
            return getCobaltArticleHelper(data);
            break;
        default:
            return null;
    }
}

function getCobaltWebPageHelper(data){

    const zones = Object.keys(data.files.content.data.zones)

    const zonesWithObjects = zones.filter((zone) => data.links.pagelink[zone])
        .map((zone) => {
        return {
            zone: zone,
            objects: data.links.pagelink[zone].map((link) => {
                return {
                    linkData: link.metadata,
                    objectId: link.targetId
                }
            })
        }
    })

    return {
        pageTemplate: data.files.content.data.pageTemplate,
        zones: zonesWithObjects
    }
}

function getCobaltArticleHelper(data){
    let content = null;
    try {
        content = JSON.parse(xml2json(data.files.content.data))
    } catch(e) {
        console.log("error parsing object xml: " + e)
    }

    return {
        content
    };
}
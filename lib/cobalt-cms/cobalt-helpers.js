import { xml2json, json2xml } from 'xml-js'
import { COBALT_BASE } from './cobalt-api';


export function getPageTemplate(pageData) {
    return pageData.model.data.files.content.data.pageTemplate
}

export function getPageZones(pageData) {
    const zones = Object.keys(pageData.model.data.files.content.data.zones)
    return zones;
}

export function getObjectsInZone(zone, pageData) {
    let links = []
    const zoneLinks = pageData.model.data.links.pagelink[zone]
    if (zoneLinks) {
        links = zoneLinks.map((link) => {
            const linkData = link.metadata;
            const objectData = pageData.model.nodes[link.targetId]
            return {
                linkData,
                objectData
            }
        });
    }
    return links;
}

export function cobaltAggregateHelper(data){
    const agg = data.model.data
    let {files,links,...baseAgg} = agg

    const zones = Object.keys(data.model.data.files.content.data.zones)

    const zonesWithObjects = zones.filter((zone) => data.model.data.links.pagelink[zone])
        .map((zone) => {
        return {
            zone: zone,
            objects: data.model.data.links.pagelink[zone].map((link) => {
                return {
                    linkData: link.metadata,
                    objectData: cobaltObjectHelper(data.model.nodes[link.targetId],data.resourcesUrls,data.nodesUrls[link.targetId])
                }
            })
        }
    })

    const result = {
        ...baseAgg,
        pageTemplate: data.model.data.files.content.data.pageTemplate,
        zones: zonesWithObjects
    }

    return result;
}

export function cobaltObjectHelper(objectData, resourcesUrls, url) {

    const convertOptions = { compact: true, spaces: 4 };
    let content = null;
    if(objectData.sys.baseType === 'article'){
        let contentJson = xml2json(objectData.files.content.data,convertOptions);
        /* console.log("CONTENT_JSON")
        console.log(contentJson) */

        contentJson = JSON.parse(contentJson)
        const document = contentJson.document
        const headgroup = (Array.isArray(document.headgroup)?document.headgroup[0]:document.headgroup)
        const summary = (Array.isArray(document.summary)?document.summary[0]:document.summary)
        const mainPictureUrl = (objectData.links && objectData.links.system && objectData.links.system.mainPicture?
                                COBALT_BASE + resourcesUrls[objectData.links.system.mainPicture[0].targetId]
                                :null)

        content = {
            headline: json2xml(headgroup.headline.p,convertOptions),
            summary: json2xml(summary.p,convertOptions),
            mainPictureUrl: mainPictureUrl
        }
    }
    
    let {links,files,...baseObject} = objectData;

    return {
        ...baseObject,
        content: content,
        url: url
    }
}


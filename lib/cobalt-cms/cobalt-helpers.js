import { xml2json, json2xml } from 'xml-js'
import { COBALT_BASE } from './cobalt-api';


export function getPageTemplate(pageData) {
    return pageData.model.data.files.content.data.pageTemplate
}

export function cobaltAggregateHelper(data){
 
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
        ...data,
        helper: {
            pageTemplate: data.model.data.files.content.data.pageTemplate,
            zones: zonesWithObjects
        }
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
    
    return {
        ...objectData,
        helper: {
            content: content,
            url: url
        }
    }
}

export function cobaltStoryPageHelper(data, url){

    const result = {
        ...data,
        helper: {
            url:url
        }
    }
    return result
}

export function cobaltReportHelper(data){

    const parts = data.model.data.files.content.data.parts.map((part) => {
        return {
            partName: part.name,
            chunks: part.chunks.map((chunk) => {
                let chunkData = null;
                chunkData = data.model.data.files[chunk.file].data
                if(chunkData){
                    chunkData = xml2json(chunkData)
                }
                if(chunkData){
                    chunkData = JSON.parse(chunkData)
                }
                return chunkData
            })
        }
    })

    let correlateds = Object.entries(data.model.data.links.correlated)
    console.log(JSON.stringify(correlateds))
    correlateds = correlateds.map((correlated) => {
        let correlatedData = data.model.nodes[correlated[1][0].targetId].files.content.data
        if (correlatedData) {
            correlatedData = xml2json(correlatedData)
        }
        if (correlatedData){
            correlatedData = JSON.parse(correlatedData)
        }
        return {
            correlatedName: correlated[0],
            correlatedData: correlatedData
        }
    })

   
    const result = {
        ...data,
        helper:{
            parts: parts,
            correlateds: correlateds
        }
    }

    return result;
}



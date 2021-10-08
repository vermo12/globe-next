import { xml2json, json2xml } from 'xml-js'
import { COBALT_BASE, COBALT_PREVIEW_BASE } from '../../cobalt.settings';


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
    let content = null;
    if(objectData.sys.baseType === 'article'){

        try {
            content = JSON.parse(xml2json(objectData.files.content.data))
        } catch(e) {
            console.log("error parsing object xml: " + e)
        }

        const mainPictureUrl = (objectData.links && objectData.links.system && objectData.links.system.mainPicture?
                                COBALT_BASE + resourcesUrls[objectData.links.system.mainPicture[0].targetId]
                                :null)
                               
    }
       
    const result = {
        ...objectData,
        helper: {
            content: content,
            resourcesUrls: resourcesUrls,
            url: url
        }
    }
    return result; 
}

export function cobaltStoryPageHelper(data, url){

    let content = null;

    try {
        content = JSON.parse(xml2json(data.model.data.files.content.data))
    } catch(e) {
        console.log("error parsing object xml: " + e)
    }

    const result = {
        ...data,
        helper: {
            content: content,
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
    correlateds = correlateds.map((correlated) => {
        let correlatedData = data.model.nodes[correlated[1][0].targetId].files.content.data //TODO
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


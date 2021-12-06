import axios from 'axios'
import cacheData from "memory-cache";
import { COBALT_BASE, COBALT_PREVIEW_BASE } from '../../cobalt.settings';
import { COMMON_DATA_CACHE_TTL_MINUTES } from '../../apps.settings';
import { getCobaltDataHelper } from './cobalt-helpers';

export async function getCobaltPageByUrl(url,preview){

    const pageData = await cobaltRequest('/api/pages/?url=' + url,preview)
    const siteStructure = await getCobaltSite(preview)

    const cobaltData = {
        object: {
          data: pageData.model.data,
          helper: getCobaltDataHelper(pageData.model.data),
        },
        linkContext: null,
        pageContext: {
          url: url,
          nodes: pageData.model.nodes,
          resourcesUrls: pageData.resourcesUrls,
          nodesUrls: pageData.nodesUrls
        },
        siteContext: {
            siteStructure
        }
      }

    return cobaltData;
}

async function cobaltRequest(url,preview){
    let result = null;
    try {
        const options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + url,
            mode: 'no-cors'
        };

        const response = await axios.request(options)
        result = response.data
    }
    catch (e){
        console.log(e)
    }
    return result
}

export async function getCobaltPageById(id,preview){

    let result = null;

    try {
        const options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/pages/' + id,
            mode: 'no-cors'
        };

        const response = await axios.request(options)
        result = response.data;
    }
    catch (e){
        console.log(e)
    } 

    return result;

}

export async function searchCobalt(params,preview){
    let result = null;

    const qstring = params.reduce((acc,p,i) => {
        return acc + (i > 0?'&':'') + p.key + "=" + p.value
    },"?")
    
    try {
        const options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/search' + qstring,
            mode: 'no-cors'
        };

        const response = await axios.request(options);
        result = response.data;
    }
    catch (e){
        console.log(e)
    }

    return result;

}

export async function getCobaltSite(preview){
    let result = null;
    const url = '/api/site';

    result = cacheData.get(url);
    if (result){
        console.log("getting cached site structure")
        return result;
    } else {
        console.log("fetching site structure")
        try {
            const options = {
                method: 'GET',
                url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/site',
                mode: 'no-cors'
            };

            const response = await axios.request(options)
            result = response.data
            cacheData.put(url, result, COMMON_DATA_CACHE_TTL_MINUTES * 1000 * 60 );
        }
        catch (e){
            console.log(e)
        }
        return result;
    }
}
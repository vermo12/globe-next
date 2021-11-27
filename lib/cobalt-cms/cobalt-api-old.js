import axios from 'axios'
import { COBALT_BASE, COBALT_PREVIEW_BASE } from '../../cobalt.settings';
import { cobaltAggregateHelper, cobaltObjectHelper, cobaltReportHelper, cobaltStoryPageHelper } from './cobalt-helpers-old';

export async function getCobaltPage(url,preview){
    let result = null;

    try {
        const options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/pages/?url=' + url,
            mode: 'no-cors'
        };

        const response = await axios.request(options)
        result = processCobaltResponse(response, url);
    }
    catch (e){
        console.log(e)
    }
    return result;
}

function processCobaltResponse(response, url) {
    let result = null;
    try {
        switch (response.data.model.data.sys.baseType) {
            case 'webpage':
                result = cobaltAggregateHelper(response.data);break;
            case 'article':
                result = cobaltStoryPageHelper(response.data, url);break;
            case 'report':
                result = cobaltReportHelper(response.data); break;
            //result = response.data.model.data
            default:
                result = response.data;

        }
    } catch (e) {
        result = response.data;
    }
    return result;
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
        result = processCobaltResponse(response, '/'+id+'/index.html'); //TODO 
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
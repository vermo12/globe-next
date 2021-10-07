import axios from 'axios'
import { COBALT_BASE, COBALT_PREVIEW_BASE } from '../../cobalt.settings';
import { cobaltAggregateHelper, cobaltObjectHelper, cobaltReportHelper, cobaltStoryPageHelper } from './cobalt-helpers';

export async function getCobaltPage(url,preview){
    let options = null;
    let response = null;

    try {
        options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/pages/?url=' + url,
            mode: 'no-cors'
        };

        response = await axios.request(options)
    }
    catch (e){
        console.log(e)
    }

    let result = processCobaltResponse(response, url);

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
    let options = null;
    let response = null;

    try {
        options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/pages/' + id,
            mode: 'no-cors'
        };

        response = await axios.request(options)
    }
    catch (e){
        console.log(e)
    }

    let result = processCobaltResponse(response, '/'+id+'/index.html'); //TODO 

    return result;

}

export async function searchCobalt(params,preview){
    let options = null;
    let response = null;

    const qstring = params.reduce((acc,p,i) => {
        return acc + (i > 0?'&':'') + p.key + "=" + p.value
    },"?")
    try {
        options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/search' + qstring,
            mode: 'no-cors'
        };

        response = await axios.request(options)
    }
    catch (e){
        console.log(e)
    }

    return response.data

}
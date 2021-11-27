import axios from 'axios'
import { COBALT_BASE, COBALT_PREVIEW_BASE } from '../../cobalt.settings';

export async function getCobaltPage(url,preview){
    let result = null;

    try {
        const options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/pages/?url=' + url,
            mode: 'no-cors'
        };

        const response = await axios.request(options)
        result = response.data
    }
    catch (e){
        console.log(e)
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

    try {
        const options = {
            method: 'GET',
            url: (preview?COBALT_PREVIEW_BASE:COBALT_BASE) + '/api/site',
            mode: 'no-cors'
        };

        const response = await axios.request(options)
        result = response.data
    }
    catch (e){
        console.log(e)
    }
    return result;
}
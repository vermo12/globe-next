import axios from 'axios'
import { cobaltAggregateHelper, cobaltObjectHelper } from './cobalt-helpers';

export const COBALT_BASE = 'https://demo.eidosmedia.io'
const API_BASE = COBALT_BASE + '/api'
const API_QSTRING = 'emk.disableCache=true'

export async function getCobaltContentPage(url){

    let options = null;
    let response = null;

    try {
        options = {
            method: 'GET',
            url: API_BASE + '/pages/?url=' + url + '&' + API_QSTRING,
            mode: 'no-cors'
        };

        response = await axios.request(options)
    }
    catch (e){
        console.log(e)
    }

    const result = cobaltObjectHelper(response.data.model.data,response.data.resourcesUrls, url)
    return result;

}

export async function getCobaltSectionPage(sectionPath){

    let options = null;
    let response = null;

    try {
        options = {
            method: 'GET',
            url: API_BASE + '/pages?url=' + sectionPath + '&' + API_QSTRING,
            mode: 'no-cors'
        };

        response = await axios.request(options)
    }
    catch (e){
        console.log(e)
    }

    const result = cobaltAggregateHelper(response.data);
    return result;
}
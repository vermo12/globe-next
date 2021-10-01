import axios from 'axios'
import { cobaltAggregateHelper, cobaltObjectHelper } from './cobalt-helpers';

export const COBALT_BASE = 'https://demo.eidosmedia.io'
const API_BASE = COBALT_BASE + '/api'
const API_QSTRING = 'emk.disableCache=true'

export async function getCobaltPage(url){
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

    let result = null;
    switch (response.data.model.data.sys.baseType){
        case 'webpage': 
            result = cobaltAggregateHelper(response.data);break;
        case 'article':
            result = cobaltObjectHelper(response.data.model.data,response.data.resourcesUrls, url);break;
    }
    return result;

}
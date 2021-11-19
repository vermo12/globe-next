import axios from "axios";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "../../../cloudinary.setting";

export default function CloudinarySearch({ items }) {
    return (
    <div>
        {items.map((item) => {
            return (<p>{item.filename}</p>)
        })}
    </div>
    )
}

export async function getStaticProps({ params }) {

    let options = null;
    let response = null;

    try {
        options = {
            method: 'POST',
            url: 'https://' + CLOUDINARY_API_KEY + ':' + CLOUDINARY_API_SECRET + '@api.cloudinary.com/v1_1/' + CLOUDINARY_CLOUD_NAME + '/resources/search',
            mode: 'no-cors'
        };

        response = await axios.post('https://' + CLOUDINARY_API_KEY + ':' + CLOUDINARY_API_SECRET + '@api.cloudinary.com/v1_1/' + CLOUDINARY_CLOUD_NAME + '/resources/search',
            {
                "expression": "resource_type:video",
                "sort_by": [{ "public_id": "desc" }],
                "max_results": 30
            })
    }
    catch (e) {
        console.log(e)
    }


    const items = response.data.resources

    console.log(items)
    return {
        props: {
            items
        },
        revalidate: 60
    }
}
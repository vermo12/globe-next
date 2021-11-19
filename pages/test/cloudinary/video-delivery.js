import Layout from "../../../components/Layout/Layout";
import {Video, Transformation} from 'cloudinary-react';


export default function CloudinaryVideo(props){
    const render = (
        <Layout>
            <p>This is a test for cloudinary video delivery</p>
            <Video cloudName="eidosmedia-test" publicId="samples/elephants" controls="true" width="600">
            </Video>
        </Layout>
    )
    return render;
}
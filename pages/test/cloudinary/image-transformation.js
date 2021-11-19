import { Image, Transformation } from 'cloudinary-react'

export default function ImageTransformation(props) {
    const render = (
        <Image cloudName="eidosmedia-test" publicId="samples/biden_vu8jsb" width="auto" >
            {/* <Transformation gravity="face" height="400" width="400" crop="crop" />             */}
            {/* <Transformation effect="sepia" /> */}
            {/* <Transformation overlay={{fontFamily: "Roboto", fontSize: 40, fontWeight: "bold", text: "Biden"}} color="#fff" /> */}
            {/* <Transformation flags="layer_apply" gravity="north_west" y="0.05"/> */}
            {/* <Transformation radius="max" /> */}
            {/* <Transformation width="200" crop="scale" /> */}
        </Image>
    )
    return render;
}
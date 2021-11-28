import { getCobaltDataHelper } from "../../lib/cobalt-cms/cobalt-helpers"
import GenericFragment from "./GenericFragment"

export default function WebContainerFragment({ cobaltData }) {

    const zonesRender = cobaltData.object.helper.zones.map((zone) => 
        zone.objects.map((object) => {
            // Here we need to build the cobaltData for each object
            const objNodeData = cobaltData.pageContext.nodes[object.objectId]
            const objCobaltData = {
                object: {
                    data: objNodeData,
                    helper: getCobaltDataHelper(objNodeData)
                },
                linkContext: {
                    linkData: object.linkData
                },
                pageContext: cobaltData.pageContext
            }
            return (
                <GenericFragment cobaltData={objCobaltData}/>
            )
        }))
  

    const render = (
        <article className="GL4horizontalStoryCarouselContainer">
            <div className="GL4horizontalStoryCarousel">
                <h4 className="GLsectionLabel">
                    <span> <a href="">view more</a>
                    </span>
                </h4>
                <div className="flexsliderGL4horizontalStoryCarousel carousel">
                    <div className="flex-viewport" style={{overflow: 'hidden',position: 'relative'}}></div>
                    <ul className="flex-direction-nav">
                        <li className="flex-nav-prev"><a className="flex-prev flex-disabled" href="#" tabIndex="-1">Previous</a></li>
                        <li className="flex-nav-next"><a className="flex-next flex-disabled" href="#" tabIndex="-1">Next</a></li>
                    </ul>
                    <div className="flex-viewport" style={{overflow: 'hidden', position: 'relative'}}>
                        <ul className="slides" style={{width: '800%', transitionDuration: '0s', transform: 'translate3d(0px, 0px, 0px)'}}>
                            {zonesRender}
                        </ul>
                    </div>
                    <ul className="flex-direction-nav">
                        <li className="flex-nav-prev"><a className="flex-prev flex-disabled" href="#" tabIndex="-1">Previous</a></li>
                        <li className="flex-nav-next"><a className="flex-next flex-disabled" href="#" tabIndex="-1">Next</a></li>
                    </ul>
                </div>
            </div>
        </article>
    )

    return render;
}
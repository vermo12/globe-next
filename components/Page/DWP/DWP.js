import React from "react";
import { getCobaltDataHelper } from "../../../lib/cobalt-cms/cobalt-helpers";
import GenericFragment from '../../Fragment/GenericFragment';

export default function DWP({ cobaltData }) {
    let index = 0;
    const zonesRender = cobaltData.object.helper.zones.map((zone,i) => 
        zone.objects.map((object,j) => {
            index++;
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
                <GenericFragment key={index} cobaltData={objCobaltData} index={index}/>
            )
        }))


    return (
        <div>
            <section className="GLsection">
                <ul>
                    {zonesRender}
                </ul>
                <hr />
            </section>
        </div>
    )
}
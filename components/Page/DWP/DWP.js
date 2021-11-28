import React from "react";
import { getCobaltDataHelper } from "../../../lib/cobalt-cms/cobalt-helpers";
import GenericFragment from '../../Fragment/GenericFragment';

export default function DWP({ cobaltData }) {
    const zonesRender = cobaltData.object.helper.zones.map((zone,i) => 
        zone.objects.map((object,j) => {
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
                <GenericFragment key={"" + i + j} cobaltData={objCobaltData}/>
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
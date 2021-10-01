import React from "react";
import GenericFragment from '../../Fragment/GenericFragment';

export default function DWP({ pageData }) {
    
    const zonesRender = pageData.zones.map((zone) => 
        zone.objects.map((object) => {
            return (
                <GenericFragment objectData={object.objectData} linkData={object.linkData} />
            )
        }))


    return (
        <div>
            <section class="GLsection">
                <ul>
                    {zonesRender}
                </ul>
                <hr />
            </section>
        </div>
    )
}
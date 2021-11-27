import moment from "moment";
import React from "react";
import { findElementsInContentJson } from "../../../utils/ContentUtil";
import ResourceResolver from "../../../utils/ResourceResolver";
import RenderContentElement from "../../RenderContent/RenderContentElement";

export default function ArticleDetails({ cobaltData }) {
    
    const pubTime = moment(cobaltData.object.data.pubInfo.publicationTime).format('MMMM D, YYYY');

    let mainPictureUrl = null;
    try {
        mainPictureUrl = ResourceResolver(cobaltData.pageContext.resourcesUrls[cobaltData.object.data.links.system.mainPicture[0].targetId])
    } catch (e) { }

    if (!mainPictureUrl) {
        mainPictureUrl = '/img/nothumb.jpg';
    }

    let headline = null;
    try {
        headline = <RenderContentElement jsonElement={findElementsInContentJson(['headline'], cobaltData.object.helper.content)[0]}/>
    } catch (e) {
        console.log(e)
    }

    let content = null;
    try {
        content = <RenderContentElement jsonElement={findElementsInContentJson(['content'], cobaltData.object.helper.content)[0]}/>
    } catch (e) {
        console.log(e)
    }

    return (
        <article className="GLcontent" href={cobaltData.pageContext.nodesUrls[cobaltData.object.data.id]} data-index="0">
            <h1 className="GLstoryTitle">{headline}</h1>
            <figure className="GLstoryFigure">
                <img src={mainPictureUrl} title=""/>
                <div class ="GLstoryImageCaption">
                <div class ="GLstoryImageCaptionInner">
                <p>Tigre caption</p>
                </div>
                </div>
            </figure>
            <div className="GLstoryInfo">
                <p className="GLstoryByline">
                    {/* <span className="GLstoryBylineFaces">
                        <img src=""/>
                    </span> */}
                    {cobaltData.object.data.authors.join(',')}
                    <span>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>

                    </span>

                </p>
            </div>

            <div className="GLstoryLocation">
                <time datetime="{pubTime}">
                    {pubTime}
                </time>
            </div>

            {content}

            <div className="GLadv-728">
                <a href="#">
                    <img src="/img/adv/banner/fly-banner-728.jpg" title=""/>
                </a>
            </div>
        </article>
    )
}
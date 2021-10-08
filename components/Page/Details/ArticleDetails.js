import moment from "moment";
import React from "react";
import { findElementsInContentJson } from "../../../utils/ContentUtil";
import ResourceResolver from "../../../utils/ResourceResolver";
import RenderContentElement from "../../RenderContent/RenderContentElement";

export default function ArticleDetails({ pageData }) {
    
    const pubTime = moment(pageData.model.data.pubInfo.publicationTime).format('MMMM D, YYYY');

    let mainPictureUrl = null;
    try {
        mainPictureUrl = ResourceResolver(pageData.resourcesUrls[pageData.model.data.links.system.mainPicture[0].targetId])
    } catch (e) { }

    if (!mainPictureUrl) {
        mainPictureUrl = '/img/nothumb.jpg';
    }

    let headline = null;
    try {
        headline = <RenderContentElement jsonElement={findElementsInContentJson(['headline'], pageData.helper.content)[0]}/>
    } catch (e) {
        console.log(e)
    }

    let content = null;
    try {
        content = <RenderContentElement jsonElement={findElementsInContentJson(['content'], pageData.helper.content)[0]}/>
    } catch (e) {
        console.log(e)
    }

    return (
        <article className="GLcontent" href={pageData.helper.url} data-index="0">
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
                    {pageData.model.data.authors.join(',')}
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
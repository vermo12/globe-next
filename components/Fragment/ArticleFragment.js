import moment from 'moment'
import Link from 'next/link'
import { findElementsInContentJson } from '../../utils/ContentUtil';
import ResourceResolver from '../../utils/ResourceResolver';
import RenderContentElement from '../RenderContent/RenderContentElement';
import RenderFormattedText from '../RenderContent/RenderFormattedText';

export default function ArticleFragment({ objectData, linkData }) {

    const pubTime = moment(objectData.pubInfo.publicationTime).format('MMMM D, YYYY');

    let mainPictureUrl = null;
    try {
        mainPictureUrl = ResourceResolver(objectData.helper.resourcesUrls[objectData.links.system.mainPicture[0].targetId])
    } catch (e) { }

    if (!mainPictureUrl) {
        mainPictureUrl = '/img/nothumb.jpg';
    }

    let headline = null;
    try {
        headline = <RenderContentElement jsonElement={findElementsInContentJson(['headline'], objectData.helper.content)[0]} renderMode='teaser'/>
    } catch (e) {
        console.log(e)
    }

    let summary = null;
    try {
        summary = <RenderContentElement jsonElement={findElementsInContentJson(['summary'], objectData.helper.content)[0]}/>
    }catch (e){
        console.log(e)
    }

    const render = (
        <article className="GLlatestStory">
            <h4 className="GLsectionLabel">&nbsp;</h4>
            <div className="GLlatestStoryTop" style={{ width: '100%' }}>
                <figure className="GLstoryFigure">
                    <img src={mainPictureUrl} title="" />
                    <div className="GLstoryImageCaption">
                        <div className="GLstoryImageCaptionInner">
                            <p>Tigre caption</p>
                        </div>
                    </div>
                </figure>
                <h2 className="GLstoryTitle">
                    <Link href={objectData.helper.url}>
                        <a>
                            {headline}
                        </a>
                    </Link>
                </h2>
                <p className="GLstoryByline">{objectData.authors[0]}</p>
                {summary}
                <div className="GLstoryLocation">
                    <time dateTime={pubTime}>
                        {pubTime}
                    </time>
                </div>
            </div>
        </article>
    )

    return render
}
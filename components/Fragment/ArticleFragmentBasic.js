import moment from 'moment'
import Link from 'next/link'
import { findElementsInContentJson } from '../../utils/ContentUtil';
import ResourceResolver from '../../utils/ResourceResolver';
import RenderContentElement from '../RenderContent/RenderContentElement';
import RenderFormattedText from '../RenderContent/RenderFormattedText';

export default function ArticleFragmentBasic({cobaltData}) {

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
        headline = <RenderContentElement jsonElement={findElementsInContentJson(['headline'], cobaltData.object.helper.content)[0]} renderMode='teaser'/>
    } catch (e) {
        console.log(e)
    }

    let summary = null;
    try {
        summary = <RenderContentElement jsonElement={findElementsInContentJson(['summary'], cobaltData.object.helper.content)[0]}/>
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
                    <Link href={cobaltData.pageContext.nodesUrls[cobaltData.object.data.id]}>
                        <a>
                            {headline}
                        </a>
                    </Link>
                </h2>
                <p className="GLstoryByline">{cobaltData.object.data.authors[0]}</p>
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
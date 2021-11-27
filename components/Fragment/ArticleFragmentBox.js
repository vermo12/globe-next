import moment from 'moment'
import Link from 'next/link'
import { findElementsInContentJson } from '../../utils/ContentUtil';
import ResourceResolver from '../../utils/ResourceResolver';
import RenderContentElement from '../RenderContent/RenderContentElement';
import RenderFormattedText from '../RenderContent/RenderFormattedText';

export default function ArticleFragmentBox({ cobaltData }) {

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
        headline = <RenderContentElement jsonElement={findElementsInContentJson(['headline'], cobaltData.object.helper.content)[0]} renderMode='teaser' />
    } catch (e) {
        console.log(e)
    }

    let summary = null;
    try {
        summary = <RenderContentElement jsonElement={findElementsInContentJson(['summary'], cobaltData.object.helper.content)[0]} />
    } catch (e) {
        console.log(e)
    }

    const render = (
        <li className="GL4horizontalStoryCarouselItem" style={{ float: 'left', display: 'block', width: '239px' }}>
            <h2 className="GLstoryTitle">
                <Link href={cobaltData.pageContext.nodesUrls[cobaltData.object.data.id]}>
                    <a>{headline}</a>
                </Link>
            </h2>
            <div className="GLstoryLocation"><time datetime={pubTime}>{pubTime}</time></div>
            <figure className="GLstoryFigure"><img src={mainPictureUrl} title="" draggable="false" /></figure>
            <div className="GLstoryMediaInfo"><i className="fa fa-eye"></i> 150</div>
        </li>
    )

    return render
}
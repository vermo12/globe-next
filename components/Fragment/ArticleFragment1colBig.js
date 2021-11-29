import Link from 'next/link'
import Image from 'next/image'
import ResourceResolver from '../../utils/ResourceResolver';
import RenderContentElement from '../RenderContent/RenderContentElement';
import { findElementsInContentJson } from '../../utils/ContentUtil';
import { IMAGE_PLACEHOLDER } from '../../apps.settings';

export default function ArticleFragment1colBig({ cobaltData }) {

    let headline = null;
    try {
        headline = <RenderContentElement jsonElement={findElementsInContentJson(['headline'], cobaltData.object.helper.content)[0]} renderMode='teaser' />
    } catch (e) {
        console.log(e)
    }

    let mainPictureId = null;
    let mainPictureWidth = null;
    let mainPictureHeight = null;
    try {
        mainPictureId = cobaltData.object.data.links.system.mainPicture[0].targetId;
        mainPictureWidth = cobaltData.pageContext.nodes[mainPictureId].files.content.metadata.imageInfo.width;
        mainPictureHeight = cobaltData.pageContext.nodes[mainPictureId].files.content.metadata.imageInfo.height;
    } catch (e) {
        //nothing
    }

    let mainPictureUrl = null;
    if (mainPictureId) {
        try {
            mainPictureUrl = ResourceResolver(cobaltData.pageContext.resourcesUrls[mainPictureId])
        } catch (e) { }
    }
    if (!mainPictureUrl) {
        mainPictureUrl = '/img/nothumb.jpg';
    }


    const render = (
        <article className="GL1wide3Story">
            <div className="GL1wide3StoryItemBig">
                <h2 className="GLstoryTitle">
                    <Link href={cobaltData.pageContext.nodesUrls[cobaltData.object.data.id]}>
                        <a>{headline}</a>
                    </Link>
                </h2>
                <figure className="GLstoryFigure">
                    {mainPictureWidth && mainPictureHeight ?
                        <Image src={mainPictureUrl} width={mainPictureWidth} height={mainPictureHeight} placeholder="blur" blurDataURL={IMAGE_PLACEHOLDER} alt="" /> :
                        <img src={mainPictureUrl} title="" alt=""/>
                    }
                </figure>
            </div>
        </article>
    )
    return render;
}
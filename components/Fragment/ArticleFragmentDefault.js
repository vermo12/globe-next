import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { findElementsInContentJson } from '../../utils/ContentUtil';
import ResourceResolver from '../../utils/ResourceResolver';
import RenderContentElement from '../RenderContent/RenderContentElement';
import RenderFormattedText from '../RenderContent/RenderFormattedText';
import { COMMON_USE_NEXT_IMAGE, IMAGE_PLACEHOLDER } from '../../apps.settings';

export default function ArticleFragmentDefault({cobaltData, index}) {

    const pubTime = moment(cobaltData.object.data.pubInfo.publicationTime).format('MMMM D, YYYY');

    let mainPictureId = null;
    let mainPictureWidth = null;
    let mainPictureHeight = null;
    try{
        mainPictureId = cobaltData.object.data.links.system.mainPicture[0].targetId;
        mainPictureWidth = cobaltData.pageContext.nodes[mainPictureId].files.content.metadata.imageInfo.width;
        mainPictureHeight = cobaltData.pageContext.nodes[mainPictureId].files.content.metadata.imageInfo.height;
    } catch(e){
        //nothing
    }

    let mainPictureUrl = null;
    if (mainPictureId){
        try {
            mainPictureUrl = ResourceResolver(cobaltData.pageContext.resourcesUrls[mainPictureId])
        } catch (e) { }
    }
    if (!mainPictureUrl) {
        mainPictureUrl = '/img/nothumb.jpg';
    }

    const picturePriority = (index <= 3?true:false)

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
                    {mainPictureWidth && mainPictureHeight  && COMMON_USE_NEXT_IMAGE?
                        <Image src={mainPictureUrl} width={mainPictureWidth} height={mainPictureHeight} placeholder="blur" blurDataURL={IMAGE_PLACEHOLDER} priority={picturePriority} alt="" />:
                        <img src={mainPictureUrl} title="" alt=""/>
                    }
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
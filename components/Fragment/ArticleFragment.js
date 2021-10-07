import moment from 'moment'
import Link from 'next/link'

export default function ArticleFragment({objectData, linkData}) {

    const pubTime = moment(objectData.pubInfo.publicationTime).format('MMMM D, YYYY');
    const imgUrl = (objectData.helper.content.mainPictureUrl?objectData.helper.content.mainPictureUrl:'/img/nothumb.jpg')

    const render = (
        <article className="GLlatestStory">
            <h4 className="GLsectionLabel">&nbsp;</h4>
            <div className="GLlatestStoryTop" style={{width: '100%'}}>
                <figure className="GLstoryFigure">
                    <img src={imgUrl} title="" />
                    <div className="GLstoryImageCaption">
                        <div className="GLstoryImageCaptionInner">
                            <p>Tigre caption</p>
                        </div>
                    </div>
                </figure>
                <h2 className="GLstoryTitle">
                    {/* <a href="/world/0254-0d5aae99a88a-5a0b9e91a3b8-1000/index.html" dangerouslySetInnerHTML={{ __html: "<h1>Hi there!</h1>" }}> */}
                    <Link href={objectData.helper.url}>
                        <a>
                            {objectData.helper.content.headline}
                        </a>
                    </Link>
                </h2>
                <p className="GLstoryByline">{objectData.authors[0]}</p>
                <h3 className="GLstorySummary">{objectData.helper.content.summary}</h3>
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
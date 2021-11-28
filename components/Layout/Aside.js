export default function Aside(props) {
    return (
        <aside className="GLaside">
            <div className="GLasideSection GLasideBreadcrumbs">
                <h2>The New Globe <a href="">
                    world
                </a></h2>
            </div>
    
            <div className="GLasideSection GLasideSocial">
                <div className="GLasideLabel">share</div>
                <div className="element jssocials" id="GLsocialize"><div className="jssocials-shares"><div className="jssocials-share jssocials-share-twitter"><a className="jssocials-share-link jssocials-share-link-count jssocials-share-no-count" href="https://twitter.com/share?url=http%3A%2F%2Fwww.eidosmedia.com&amp;text=Verizon%20slices%20up%20the%20bundle%2C%20lets%20customers%20choose%20wireless&amp;via=Globe_AllNews&amp;hashtags=news%2Ctheglobe" target="_blank" rel="noreferrer"><i className="fa fa-twitter jssocials-share-logo"></i><span className="jssocials-share-count"></span></a></div><div className="jssocials-share jssocials-share-facebook"><a className="jssocials-share-link jssocials-share-link-count jssocials-share-no-count" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.eidosmedia.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook jssocials-share-logo"></i><span className="jssocials-share-count"></span></a></div><div className="jssocials-share jssocials-share-googleplus"><a className="jssocials-share-link jssocials-share-link-count jssocials-share-no-count" href="https://plus.google.com/share?url=http%3A%2F%2Fwww.eidosmedia.com" target="_blank" rel="noreferrer"><i className="fa fa-google-plus jssocials-share-logo"></i><span className="jssocials-share-count"></span></a></div><div className="jssocials-share jssocials-share-pinterest"><a className="jssocials-share-link jssocials-share-link-count jssocials-share-no-count" href="https://pinterest.com/pin/create/bookmarklet/?&amp;url=http%3A%2F%2Fwww.eidosmedia.com&amp;description=Verizon%20slices%20up%20the%20bundle%2C%20lets%20customers%20choose%20wireless" target="_blank" rel="noreferrer"><i className="fa fa-pinterest jssocials-share-logo"></i><span className="jssocials-share-count"></span></a></div></div></div>
            </div>

            <div className="GLasideSection GLadv-300">
                <a href="">
                    <img src="/img/adv/banner/fly-banner-300.jpg" title=""/>
                </a>
            </div>
   
            <div id="GLlistProgress" className="GLasideSection GLasideProgress f-nav">
                <div className="GLasideLabel">READ MORE</div>
                <div className="main">
                    <ul className="tabs">
                        <li>
                            <input type="radio" checked="" name="tabs" id="tab1"/>
                                <label htmlFor="tab1">Correlated</label>
                                <div id="tab-content1" className="tab-content animated fadeIn">
                                    <div className="GLprogress" style={{display: 'block'}}><div id="barsContainer"><div className="toc-storybar" data-story="0" style={{cursor: 'pointer', fontWeight: 'bold'}}><p>Corbyn could support pre-Brexit election to stop no deal.</p><div className="toc-bar" style={{width: '62.3204%'}}></div></div></div></div>
                            </div>
                        </li>
                        <li>
                            <input type="radio" name="tabs" id="tab2"/>
                            <label htmlFor="tab2">Others</label>
                            <div id="tab-content2" className="tab-content animated fadeIn">
                            <div className="GLprogress" style={{display: 'block'}}>

                            <div id="barsContainer"></div></div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </aside>
    )
}
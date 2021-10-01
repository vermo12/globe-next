export default function Aside(props) {
    return (
        <aside class="GLaside">
            <div class="GLasideSection GLasideBreadcrumbs">
                <h2>The New Globe <a href="/world/">
                    world
                </a></h2>
            </div>
    
            <div class="GLasideSection GLasideSocial">
                <div class="GLasideLabel">share</div>
                <div class="element jssocials" id="GLsocialize"><div class="jssocials-shares"><div class="jssocials-share jssocials-share-twitter"><a class="jssocials-share-link jssocials-share-link-count jssocials-share-no-count" href="https://twitter.com/share?url=http%3A%2F%2Fwww.eidosmedia.com&amp;text=Verizon%20slices%20up%20the%20bundle%2C%20lets%20customers%20choose%20wireless&amp;via=Globe_AllNews&amp;hashtags=news%2Ctheglobe" target="_blank"><i class="fa fa-twitter jssocials-share-logo"></i><span class="jssocials-share-count"></span></a></div><div class="jssocials-share jssocials-share-facebook"><a class="jssocials-share-link jssocials-share-link-count jssocials-share-no-count" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.eidosmedia.com" target="_blank"><i class="fa fa-facebook jssocials-share-logo"></i><span class="jssocials-share-count"></span></a></div><div class="jssocials-share jssocials-share-googleplus"><a class="jssocials-share-link jssocials-share-link-count jssocials-share-no-count" href="https://plus.google.com/share?url=http%3A%2F%2Fwww.eidosmedia.com" target="_blank"><i class="fa fa-google-plus jssocials-share-logo"></i><span class="jssocials-share-count"></span></a></div><div class="jssocials-share jssocials-share-pinterest"><a class="jssocials-share-link jssocials-share-link-count jssocials-share-no-count" href="https://pinterest.com/pin/create/bookmarklet/?&amp;url=http%3A%2F%2Fwww.eidosmedia.com&amp;description=Verizon%20slices%20up%20the%20bundle%2C%20lets%20customers%20choose%20wireless" target="_blank"><i class="fa fa-pinterest jssocials-share-logo"></i><span class="jssocials-share-count"></span></a></div></div></div>
            </div>

            <div class="GLasideSection GLadv-300">
                <a href="">
                    <img src="/img/adv/banner/fly-banner-300.jpg" title=""/>
                </a>
            </div>
   
            <div id="GLlistProgress" class="GLasideSection GLasideProgress f-nav">
                <div class="GLasideLabel">READ MORE</div>
                <div class="main">
                    <ul class="tabs">
                        <li>
                            <input type="radio" checked="" name="tabs" id="tab1"/>
                                <label for="tab1">Correlated</label>
                                <div id="tab-content1" class="tab-content animated fadeIn">
                                    <div class="GLprogress" style={{display: 'block'}}><div id="barsContainer"><div class="toc-storybar" data-story="0" style={{cursor: 'pointer', fontWeight: 'bold'}}><p>Corbyn could support pre-Brexit election to stop no deal.</p><div class="toc-bar" style={{width: '62.3204%'}}></div></div></div></div>
                            </div>
                        </li>
                        <li>
                            <input type="radio" name="tabs" id="tab2"/>
                            <label for="tab2">Others</label>
                            <div id="tab-content2" class ="tab-content animated fadeIn">
                            <div class ="GLprogress" style={{display: 'block'}}>

                            <div id="barsContainer"></div></div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </aside>
    )
}
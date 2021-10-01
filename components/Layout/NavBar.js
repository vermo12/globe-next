export default function NavBar(props) {
    const render = (
        <div class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="offcanvas" data-target=".sidebar-nav">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/"></a>
                    <div class="GLheaderSocial">
                        <div class="GLnavSocialItem">
                            <a href="https://www.facebook.com/globe.eidosmedia?fref=ts" target="_blank">
                                <span class="fa fa-facebook"></span>
                            </a>
                        </div>
                        <div class="GLnavSocialItem">
                            <a href="https://twitter.com/EidosMedia" target="_blank">
                                <span class="fa fa-twitter"></span>
                            </a>
                        </div>
                        <div class="GLnavSocialItem">
                            <a href="https://plus.google.com/115527747638572037998/videos" target="_blank">
                                <span class="fa fa-google-plus"></span>
                            </a>
                        </div>
                        <div class="GLnavSocialItem">
                            <a href="https://www.youtube.com/user/EidosMediaYT" target="_blank">
                                <span class="fa fa-youtube"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return render;
}
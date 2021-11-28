import Link from 'next/link'

export default function NavBar(props) {
    const render = (
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".sidebar-nav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link href="/">
                        <a className="navbar-brand"></a>
                    </Link>
                    <div className="GLheaderSocial">
                        <div className="GLnavSocialItem">
                            <a href="https://www.facebook.com/globe.eidosmedia?fref=ts" target="_blank" rel="noreferrer">
                                <span className="fa fa-facebook"></span>
                            </a>
                        </div>
                        <div className="GLnavSocialItem">
                            <a href="https://twitter.com/EidosMedia" target="_blank" rel="noreferrer">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </div>
                        <div className="GLnavSocialItem">
                            <a href="https://plus.google.com/115527747638572037998/videos" target="_blank" rel="noreferrer">
                                <span className="fa fa-google-plus"></span>
                            </a>
                        </div>
                        <div className="GLnavSocialItem">
                            <a href="https://www.youtube.com/user/EidosMediaYT" target="_blank" rel="noreferrer">
                                <span className="fa fa-youtube"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return render;
}
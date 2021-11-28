import Link from 'next/link'

export default function SideBar({ siteStructure }) {
    let sectionsRender = null;
    try {
        sectionsRender = siteStructure.root.items.map((item, i) => (
            <li key={i}>
                <Link href={item.uri}>
                    <a>{item.title}</a>
                </Link>
            </li>
        ))
    } catch (e) {

    }
    const render = (
        <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
            <div className="GLnavSocial">
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
                    <a href="https://plus.google.com/115527747638572037998" target="_blank" rel="noreferrer">
                        <span className="fa fa-google-plus"></span>
                    </a>
                </div>
                <div className="GLnavSocialItem">
                    <a href="https://www.youtube.com/user/EidosMediaYT" target="_blank" rel="noreferrer">
                        <span className="fa fa-youtube"></span>
                    </a>
                </div>
            </div>
            <div className="GLnavLogo">
                <h1><Link href="/"><a></a></Link></h1>
            </div>
            <div className="GLnavSearch">

                {/* <form action="/search" id="search">
                    <input id="query" name="query" type="text" autocomplete="off" onblur="this.placeholder = 'SEARCH'" placeholder="Search" color="#ffffff" size="40" onfocus="this.placeholder = ''" />
                    <input id="baseTypes" name="baseTypes" type="hidden" value="article" />
                </form> */}

            </div>


            <ul className="nav">

                <li className="GLpremium">
                    <a href="#modalSignUp" id="modalSignUpButton">sign up</a>
                    <span className="GLpremiumSeparator"></span>
                    <a href="#modalSignIn" id="modalSignInButton">log in</a>
                </li>

                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                {sectionsRender}
                <li className="GLnavSpecial">
                    <Link href="/rss.xml"><a><i className="fa fa-rss"></i> rss</a></Link>
                </li>
                <li className="GLnavSpecial">
                    <a href="#"><i className="fa fa-upload"></i> upload corner</a>
                </li>
            </ul>

        </div>
    )

    return render;
}
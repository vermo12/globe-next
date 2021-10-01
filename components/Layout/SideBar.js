export default function SideBar(props) {
    const render = (
        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
            <div class="GLnavSocial">
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
                    <a href="https://plus.google.com/115527747638572037998" target="_blank">
                        <span class="fa fa-google-plus"></span>
                    </a>
                </div>
                <div class="GLnavSocialItem">
                    <a href="https://www.youtube.com/user/EidosMediaYT" target="_blank">
                        <span class="fa fa-youtube"></span>
                    </a>
                </div>
            </div>
            <div class="GLnavLogo">
                <h1><a href="/"></a></h1>
            </div>
            <div class="GLnavSearch">

                <form action="/search" id="search">
                    <input id="query" name="query" type="text" autocomplete="off" onblur="this.placeholder = 'SEARCH'" placeholder="Search" color="#ffffff" size="40" onfocus="this.placeholder = ''" />
                    <input id="baseTypes" name="baseTypes" type="hidden" value="article" />
                </form>

            </div>


            <ul class="nav">

                <li class="GLpremium">
                    <a href="#modalSignUp" id="modalSignUpButton">sign up</a>
                    <span class="GLpremiumSeparator"></span>
                    <a href="#modalSignIn" id="modalSignInButton">log in</a>
                </li>


                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/art/">Art</a>
                </li>
                <li>
                    <a href="/world/">world</a>
                </li>
                <li>
                    <a href="/business/">business</a>
                </li>
                <li>
                    <a href="/sport/">sport</a>
                </li>
                <li>
                    <a href="/foreign/">foreign</a>
                </li>
                <li class="GLnavSpecial">
                    <a href="/rss.xml"><i class="fa fa-rss"></i> rss</a>
                </li>
                <li class="GLnavSpecial">
                    <a href="#"><i class="fa fa-upload"></i> upload corner</a>
                </li>
            </ul>

        </div>
    )

    return render;
}
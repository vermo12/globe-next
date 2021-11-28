import NavBar from "./NavBar";
import SectionNavigation from "./SectionNavigation";
import SideBar from "./SideBar";
import Header from "./Header";
import Aside from "./Aside";

export default function Layout(props) {
    const layout = (
        <div class="page-container">

            <NavBar {...props} />

            <div className="container">
                <div className="row row-offcanvas row-offcanvas-left">

                    <SideBar {...props} />

                    <SectionNavigation {...props} />

                    <div id="GLmain" className="col-xs-12 col-sm-9">

                        {['section','home'].includes(props.pageType)?<Header {...props} />:null}

                        {props.children}

                        {props.pageType === 'details'?<Aside {...props} />: null}


                    </div>
                </div>
            </div>
        </div>
    )
    return layout;
        
}

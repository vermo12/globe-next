export default function SectionNavigation(props) {
    const render = (
        <div class="GLsectionNavigation">
            <a class="GLbefore pag-foreign" href="/foreign/">
                <section class="GLsectionPrev">
                    <span>foreign</span>
                    <i class="fa fa-angle-left"></i>
                </section>
            </a>
            <a class="GLnext pag-Art" href="/art/">
                <section class="GLsectionNext">
                    <span>Art</span>
                    <i class="fa fa-angle-right"></i>
                </section>
            </a>
        </div>
    )

    return render;
}
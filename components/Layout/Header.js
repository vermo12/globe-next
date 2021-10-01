export default function Header(props) {

    const date = new Date();
    const dateString = date.toDateString();
    const timeString = date.getHours() + ':' + date.getMinutes();

    const render = (
        <div class="GLhead">
            <time class="GLheadDate">
                <p id="GLdate">{dateString}</p>
                <p id="GLhour">{timeString}</p>
            </time>
            <h1 class="GLheadTitle"></h1>
            <h2 class="GLheadSectionLabel">Express Website</h2>
            <div id="GLweather"></div>
        </div>
    )

    return render;
}
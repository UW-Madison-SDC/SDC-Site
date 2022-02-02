// This was my solution to not repeatedly adding the header and footer to each page.
// All pages simply need to include the style.css sheet and this script, then put
// the corresponding element with id matching one of these. See bottom of script.
// I call the header the banner here
const bannerHTML = `
<a href="index.html"><img id="logo" src="images/sdc-icon.png"/></a>
<div id="header">
        <h1 id="title">
            <div>UW-Madison</div>Software Development Club
        </h1>
        <div id="links">
            <a class="header-link" id="project-link" href="">Projects
                <img id="github-icon" src="images/github-icon.png" />
            </a>
            <a href="https://discord.gg/kGssWKMjya" class="header-link" id="discord-link">Discord
                <img id="discord-icon" src="images/discord-icon.png" />
            </a>
            <a href="info.html" class="header-link">About</a>
    </div>
</div>
`;
// TODO fix line 9 and 27: https://github.com/segedi-UW/SDC-Projects
const footerHTML = `<div>
            <h1>
                Club Info
            </h1>
            <ul>
                <li>
                    If you are interested in projects, check out our project
                    <a href="">GitHub</a>
                </li>
                <li>Meetings for Spring 2022 are every other Wednesday, starting 2/6.</li>
                <li>Project meetings are the Sunday before the Wednesday meeting.</li>
                <li>Website maintained by VP of Engineering</li>
            </ul>
        </div>
        <div>
            <h1>
                Current Board (Spring 2022)
            </h1>
            <ul>
                <li>Victoria Zhang - President</li>
                <li>Ansh Kasturu - VP of Finance</li>
                <li>Aidan Seeberg - VP of Internal Communication</li>
                <li>Raihan Tanvir - VP of External Communication</li>
                <li>Anthony Segedi - VP of Engineering</li>
                <li>Jhanvi Sangha - VP of Engineering</li>
            </ul>
        </div>
        <div>
            <h1>
                Contact Us
            </h1>
            <ul>
                <li>Message us on <a href="https://discord.gg/kGssWKMjya">discord</a></li>
                <li>Message us on <a href="https://www.linkedin.com/company/theuwsdc/">LinkedIn</a></li>
                <li>Email rtanvir@wisc.edu, our VP of External Communication</li>
            </ul>
        </div>`;
const criticalNews = `
<p>
    Pardon our dust, this site is currently a work in progress! Additionally, 
    the project GitHub link will not be activated until this Friday (2/4)
</p>`;
const banner = document.querySelector("#banner");
const footer = document.querySelector("#footer");
const critical = document.querySelector("#critical");
if (!(banner === undefined))
    banner.innerHTML = bannerHTML;
if (!(footer === undefined))
    footer.innerHTML = footerHTML;
if (!(critical === undefined))
    critical.innerHTML = criticalNews;
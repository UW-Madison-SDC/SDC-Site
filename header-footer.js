// This was my solution to not repeatedly adding the header and footer to each page.
// All pages simply need to include the style.css sheet and this script, then put
// the corresponding element with id matching one of these. See bottom of script.
// I call the header the banner here

// this toggles the critical section
const showCritical = false;

const bannerHTML = `
<a href="index.html"><img id="logo" src="images/sdc-icon.png"/></a>
<div id="header" class="flex text-white" style="justify-content: space-between; width: 100%;">
    <h1 style="margin: auto 0;"><div>UW-Madison</div>Software Development Club</h1>
    <div id="links">
        <div id="ext-links">
            <a class="ext-link" id="project-link" href="https://github.com/UW-Madison-SDC/SDC-Projects">Project GitHub
                <img src="images/github-icon.png" />
            </a>
            <a href="https://discord.gg/kGssWKMjya" class="ext-link" id="discord-link">Discord
                <img src="images/discord-icon.png" />
            </a>
        </div>
        <div id="int-links">
            <a href="index.html" class="int-link">Home</a>
            <a href="project.html" class="int-link">Projects</a>
            <a href="info.html" class="int-link">About</a>
        </div>
    </div>
</div>
`;
const footerHTML = `
    <div id="info">
        <div>
            <h1>
                Club Info
            </h1>
            <ul>
                <li>
                    If you are interested in projects, check out our project
                    <a href="https://github.com/segedi-UW/SDC-Projects">GitHub</a>
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
    </div>

        <div id="contact">
<div>
            <h1>
                Contact Us
            </h1>
            <ul>
                <li>Message us on <a href="https://discord.gg/kGssWKMjya">discord</a></li>
                <li>Message us on <a href="https://www.linkedin.com/company/theuwsdc/">LinkedIn</a></li>
                <li>Email rtanvir@wisc.edu, our VP of External Communication</li>
                <li>Email vshang2@wisc.edu, our President</li>
            </ul>
        </div>
        </div>
        `;
const criticalNews = `
<p>
    Pardon our dust, this site is currently a work in progress! Additionally, 
    the project GitHub link has been activated! Find it at the top right of the page!
</p>`;
const banner = document.querySelector("#banner");
const footer = document.querySelector("#footer");
const critical = document.querySelector("#critical");
if (!(banner === undefined))
    banner.innerHTML = bannerHTML;
if (!(footer === undefined))
    footer.innerHTML = footerHTML;
if (!(critical === undefined)) {
    if (showCritical)
        critical.innerHTML = criticalNews;
    else critical.style.visibility = "hidden";
}
    
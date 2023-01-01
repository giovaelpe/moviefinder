export function About(props) {
    return (
        <div style={{ display:"flex", flexDirection : "column", alignItems : "center" }}>
            <h2>About Movie finder</h2>
            <p style={{width : "60vw"}}>
                My name is giovanni, I built this app in order to both practice my React, Redux and Reac router knowlege,
                and to add it to my personal portfolio.
                With this app you can serch movies and create a personal list of things to watch, in order to create a list you must first create an user account,
                but it is important to mention that this is not a real account, this app doesnt have any backend it uses the free OMDB api to fetch the movies.
                The app is fully responsive it has ben tested in many devices
            </p>
            <h3>Frameworks used</h3>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React router dom</li>
                <li>React-redux</li>
                <li>Redux toolkit</li>
            </ul>
            <h3>Contact</h3>
            <ul>
                <li><a href="https://www.linkedin.com/in/wilman-giovanni-el-zelah-pellegrino-b2a97b120/" rel="noreferrer" target="_blank">Linkedin</a></li>
                <li><a href="https://twitter.com/wilmanslice" target="_blank" rel="noreferrer">Twitter</a></li>
            </ul>
        </div>
    )
}
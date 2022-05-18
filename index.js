function NavBar(){
    return (
        <nav className="nav--container">
            <div className="logo--container">
                <img className="logo" src="./react-logo.png" />
                <h3 className="logo-text">ReactFacts</h3>
            </div>
            <div className="nav-text--container">
                <p className="nav-text">React Course - Project 1</p>
            </div>
        </nav>
    )
}

function Header(){
    return (
        <div>
            <h1>Fun facts about React</h1>
        </div>
    )
}

function ListItems(){
    return (
        <div>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <div>
        <NavBar />
        <Header />
        <ListItems />
    </div>,
    document.getElementById("root")
)
import Header from "./Header"

function MyList(){
    return (
        <div>            
            <h1>Reason why I am excited to learn React</h1>
            <ol>
                <li>It is a very employable skill</li>
                <li>It is easy to learn</li>
                <li>It is a popular library</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 20xx Cordova development. All rights reserved.</small>
        </footer>
    )
}

ReactDOM.render(
    <div>
        {/* <Header /> */}
        <MyList />
        <Footer />
    </div>, 
    document.getElementById("root")
)
console.log(Header)
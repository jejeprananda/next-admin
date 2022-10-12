const Sidebar = () => {
    
    const switchDarkMode = () => {
        document.body.classList.toggle('dark')
    }

    return (
        <div>        
            <div className="sideBar-parent">
                <div className="flex flex-col">
                    <ul>
                        <li className="navbar-li">
                            <button onClick={switchDarkMode}>switch</button>
                        </li>
                        <li className="navbar-li">test</li>
                        <li className="navbar-li">test</li>
                        <li className="navbar-li">test</li>
                        <li className="navbar-li">test</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Sidebar;
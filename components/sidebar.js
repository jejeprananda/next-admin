const Sidebar = () => {
    
    const switchDarkMode = () => {
        document.body.classList.toggle('dark')
    }

    return (
        <div>        
            <div className="sideBar-parent">
                <div className="flex flex-col">
                    <ul>
                        <li className="my-2 ml-2">
                            <button onClick={switchDarkMode}>switch</button>
                        </li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Sidebar;
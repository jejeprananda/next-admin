import Sidebar from './sidebar'

const Layout = ({ children }) => {
    return (
        <div className='bg-cover dark:bg-slate-700 min-h-screen'>
            <div className='flex flex-row'>
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout
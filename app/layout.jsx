import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata ={
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html>
        <Provider>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <div className="content">
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </div>
        </body>
        </Provider>
    </html>
  )
}

export default RootLayout;
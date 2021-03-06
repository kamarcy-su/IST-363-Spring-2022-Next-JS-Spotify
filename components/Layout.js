import { Fragment } from 'react'

import Main from './Main'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return <Fragment>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </Fragment>
}
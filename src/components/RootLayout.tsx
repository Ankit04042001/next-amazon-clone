import Header from './header/Header'
import BottomHeader from './header/BottomHeader'
import Footer from './Footer'

interface Props {
  children : JSX.Element|JSX.Element[];
}

function RootLayout({children}: Props) {
  return (
    <div>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </div>
  )
}

export default RootLayout
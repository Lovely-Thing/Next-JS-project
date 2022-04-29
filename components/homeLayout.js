import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
        <Header LineSpaceTitle="＼qlubは街のお店を応援します／" homespace="homespace"/>
          <main>{children}</main>
        <Footer />
    </>
  )
}
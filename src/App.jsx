import Header from "./components/Header.jsx";
import Generator from "./components/Generator.jsx";
import Footer from "./components/Footer.jsx";
import Text from "./components/Text.jsx";


function App() {
    return (
        <>
            <Header/>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row justify-content-center">
                        <Generator/>
                        <Text/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default App

import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
                <Header />
            </div>
            <ButtonGradient />
        </>
    );
};

export default App;

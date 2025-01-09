import Card from "./components/Card";
import Details from "./components/Details";
import DataContainer from "./components/DataContainer";
// import useData from "./components/useData";

function App() {
    // const { data } = useData();

    return (
        <>
            <DataContainer>
                <Card />
                <Details />
            </DataContainer>
            {/* <Card data={data} />
            <Details data={data} /> */}
        </>
    );
}

export default App;

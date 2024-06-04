import "./App.css";
import { Card } from "./components/Molecules/Card/Card";
import { Text } from "./components/Atoms/Text/Text";

function App() {
  return (
    <>
      <Card
        image={{
          src: "https://beta.forbesindia.com/ms/dgems-forbes/images/speaker/1.png",
          alt: "Shaloo Garg",
          width: 250,
          height: 250,
        }}
        header={{
          content: "Keynote Speaker",
          variant: "heading",
          color: "#f63",
        }}
        padding="10px"
        margin="20px"
        customStyles={{ maxWidth: "300px" }}
      >
        <>
          <Text
            content="Shaloo Garg"
            as="span"
            fontSize="30px"
            fontWeight="bold"
            padding="10px 0px 0px"
            role="heading"
            textAlign="center"
          />
          <Text
            content={`Managing Director, Late-Stage\nStartups and Unicorns,\nMicrosoft and Board Member of\nNASDQ`}
            as="span"
            margin="10px 0px"
            fontSize="18px"
            color="#f63"
            customStyles={{ whiteSpace: "pre-line" }}
          />
        </>
      </Card>
    </>
  );
}

export default App;

// dummy commit

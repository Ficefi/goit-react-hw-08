import { BsFillTelephoneFill } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <main>
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "56px",
          }}
        >
          Hello to our phonebook
          <BsFillTelephoneFill size={72} color="white" />
        </h1>
      </main>
    </>
  );
};

export default Home;

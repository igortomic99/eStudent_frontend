import { withUrqlClient } from "next-urql";
import { Card } from "../components/Card";
import { NavigationBar } from "../components/NavigationBar";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useAuth } from "../utils/useAuth";

const Home = () => {
  useAuth();
  return (
    <>
      <NavigationBar />
      <h1 className="text-center text-3xl font-bold text-gray-600 mt-4"> Обавештења</h1>
      <Card/>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Home);

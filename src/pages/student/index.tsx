import { withUrqlClient } from "next-urql";
import { CardBasic } from "../../components/CardBasic";
import { CardExams } from "../../components/CardExams";
import { NavigationBar } from "../../components/student/NavigationBar";
import { useAverageGradeQuery, useEspbQuery, useMeQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useAuth } from "../../utils/useAuth";

const Home = () => {
  useAuth();
  const [{ data }] = useMeQuery();
  const [{data:avg}] = useAverageGradeQuery();
  const [{data:espp}] = useEspbQuery();
  return (
    <>
      <NavigationBar />
      <div className="flex justify-center">
          <h1>OBAVESTENJA</h1>
      </div>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Home);

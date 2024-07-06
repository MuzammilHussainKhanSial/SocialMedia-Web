import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <Link to="/register">Rewgitsdr</Link>
      <Button >Click me</Button>
    </div>
  );
};

export default Home;

import TopicsBar from "../components/TopicsBar";
import useAuth from "../hooks/useAuth";

const UserHomePage = () => {
  // Only if user is authenticated can reach this components.
  const isAuthenticated = useAuth("/sign_in");

  return(
    <div>
      <h1>User Home</h1>
      <h2>Testingg</h2>
    </div>
  );
}

export default UserHomePage;
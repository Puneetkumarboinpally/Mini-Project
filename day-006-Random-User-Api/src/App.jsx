import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("https://randomuser.me/api/");

      setProfile(response.data.results[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return <div></div>;
};

export default App;

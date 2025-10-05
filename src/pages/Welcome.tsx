import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        setEmail(user.email);
      } else {
        navigate("/admin/auth/login");
      }
    };
    getUser();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center">
      <div className="bg-card rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold mb-4">Welcome!</h1>
        <p className="text-muted-foreground mb-4">
          You have successfully logged in with:
        </p>
        <p className="text-lg font-medium text-primary">{email}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Welcome;
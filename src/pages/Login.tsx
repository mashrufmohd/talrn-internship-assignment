import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      loginSchema.parse({ email, password });
      setLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      
      navigate("/welcome");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Login failed",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-block mb-8">
          <h1 className="text-4xl font-bold text-primary">Talrn</h1>
        </Link>

        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Sign in to start your session
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="text-center">
                <Link to="/admin/auth/forgot-password" className="text-primary hover:underline text-sm">
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>

          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/admin/auth/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              Please{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              if you require any assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

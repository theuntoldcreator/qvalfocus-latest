import { useAuth } from "@/context/AuthProvider";
import { Redirect } from "wouter";
import { PageLoader } from "@/components/common/PageLoader";
import { useEffect, useState } from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Give Supabase a moment to initialize the session
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading && session === null) {
    return <PageLoader />;
  }

  if (!session) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
}
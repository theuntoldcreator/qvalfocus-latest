import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthProvider";
import { Redirect } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const { session } = useAuth();
  const searchParams = new URLSearchParams(window.location.search);
  const redirectTo = searchParams.get("redirect") || "/admin";

  if (session) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="items-center">
          <img src="/images/qvalfocus.png" alt="QvalFocus Logo" className="h-10 w-auto mb-4 dark:brightness-0 dark:invert" />
          <CardTitle className="text-center text-2xl">Admin Portal</CardTitle>
          <CardDescription className="text-center pt-2">
            Please sign in to manage website content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            appearance={{
              className: {
                button: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium w-full transition-colors",
                input: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                label: "text-sm font-medium leading-none mb-2 block",
                message: "text-sm text-destructive mt-2",
                anchor: "text-sm text-primary hover:underline",
              },
            }}
            providers={[]}
            view="sign_in"
            showLinks={true}
            theme="light"
          />
        </CardContent>
      </Card>
    </div>
  );
}
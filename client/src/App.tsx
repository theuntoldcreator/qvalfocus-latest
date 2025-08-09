import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Home from "@/pages/Home";
import India from "@/pages/India";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import CaseStudyDetailPage from "@/pages/CaseStudyDetailPage";
import NotFound from "@/pages/not-found";
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/in" component={India} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/case-studies/:slug" component={CaseStudyDetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsentBanner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
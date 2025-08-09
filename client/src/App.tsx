import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner";
import ScrollToTop from "@/components/common/ScrollToTop";
import { PageLoader } from "@/components/common/PageLoader";

const Home = lazy(() => import("@/pages/Home"));
const India = lazy(() => import("@/pages/India"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const CaseStudiesPage = lazy(() => import("@/pages/CaseStudiesPage"));
const CaseStudyDetailPage = lazy(() => import("@/pages/CaseStudyDetailPage"));
const InsightsPage = lazy(() => import("@/pages/InsightsPage"));
const InsightDetailPage = lazy(() => import("@/pages/InsightDetailPage"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/in" component={India} />
      <Route path="/about" component={AboutPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/case-studies/:slug" component={CaseStudyDetailPage} />
      <Route path="/insights" component={InsightsPage} />
      <Route path="/insights/:slug" component={InsightDetailPage} />
      <Route path="/careers" component={CareersPage} />
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
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Router />
          </Suspense>
          <CookieConsentBanner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
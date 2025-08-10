import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner";
import ScrollToTop from "@/components/common/ScrollToTop";
import { PageLoader } from "@/components/common/PageLoader";
import { AuthProvider } from "@/context/AuthProvider";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

const Home = lazy(() => import("@/pages/Home"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const CaseStudiesPage = lazy(() => import("@/pages/CaseStudiesPage"));
const CaseStudyDetailPage = lazy(() => import("@/pages/CaseStudyDetailPage"));
const InsightsPage = lazy(() => import("@/pages/InsightsPage"));
const InsightDetailPage = lazy(() => import("@/pages/InsightDetailPage"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));
const ProjectSolutionPage = lazy(() => import("@/pages/ProjectSolutionPage"));
const StaffingSolutionPage = lazy(() => import("@/pages/StaffingSolutionPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/case-studies/:slug" component={CaseStudyDetailPage} />
      <Route path="/insights" component={InsightsPage} />
      <Route path="/insights/:slug" component={InsightDetailPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/project-solution" component={ProjectSolutionPage} />
      <Route path="/staffing-solution" component={StaffingSolutionPage} />
      <Route path="/admin">
        <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Router />
          </Suspense>
          <CookieConsentBanner />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
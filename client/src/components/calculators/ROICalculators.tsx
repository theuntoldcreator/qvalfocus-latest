import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CloudROIResults {
  annualSavings: number
  paybackMonths: number
  threeYearSavings: number
}

interface QAROIResults {
  annualSavings: number
  paybackMonths: number
  efficiencyGain: number
}

export function ROICalculators() {
  const [cloudResults, setCloudResults] = useState<CloudROIResults | null>(null)
  const [qaResults, setQAResults] = useState<QAROIResults | null>(null)
  
  const [cloudForm, setCloudForm] = useState({
    currentSpend: "2000000",
    apps: "50",
    timeline: "24"
  })
  
  const [qaForm, setQAForm] = useState({
    teamSize: "15",
    salary: "95000",
    automationPercent: "70"
  })

  const calculateCloudROI = () => {
    const currentSpend = parseFloat(cloudForm.currentSpend) || 0
    const apps = parseFloat(cloudForm.apps) || 0
    const timeline = parseFloat(cloudForm.timeline) || 24
    
    // Simple ROI calculation - assumes 30-35% savings on average
    const savingsRate = 0.32
    const annualSavings = currentSpend * savingsRate
    const migrationCost = apps * 25000 // Estimated $25K per app migration
    const paybackMonths = Math.ceil(migrationCost / (annualSavings / 12))
    const threeYearSavings = (annualSavings * 3) - migrationCost
    
    setCloudResults({
      annualSavings,
      paybackMonths,
      threeYearSavings
    })
  }

  const calculateQAROI = () => {
    const teamSize = parseFloat(qaForm.teamSize) || 0
    const salary = parseFloat(qaForm.salary) || 0
    const automationPercent = parseFloat(qaForm.automationPercent) || 0
    
    // Calculate automation savings
    const totalAnnualCost = teamSize * salary * 1.3 // Include benefits/overhead
    const automatedCapacity = (automationPercent / 100) * 0.6 // 60% of automated work can be reallocated
    const annualSavings = totalAnnualCost * automatedCapacity
    const automationInvestment = teamSize * 15000 // Estimated $15K per engineer for automation setup
    const paybackMonths = Math.ceil(automationInvestment / (annualSavings / 12))
    const efficiencyGain = Math.round(automationPercent * 0.6)
    
    setQAResults({
      annualSavings,
      paybackMonths,
      efficiencyGain
    })
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    }
    return `$${(amount / 1000).toFixed(0)}K`
  }

  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Calculate Your Transformation ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estimate the financial impact of cloud migration and automation initiatives with our interactive calculators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cloud Cost ROI Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cloud Migration ROI Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="cloud-current-spend">Current Annual Infrastructure Spend ($)</Label>
                <Input
                  id="cloud-current-spend"
                  type="number"
                  placeholder="e.g., 2000000"
                  value={cloudForm.currentSpend}
                  onChange={(e) => setCloudForm({ ...cloudForm, currentSpend: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="cloud-apps">Number of Applications</Label>
                <Input
                  id="cloud-apps"
                  type="number"
                  placeholder="e.g., 50"
                  value={cloudForm.apps}
                  onChange={(e) => setCloudForm({ ...cloudForm, apps: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="cloud-timeline">Migration Timeline (months)</Label>
                <Select value={cloudForm.timeline} onValueChange={(value) => setCloudForm({ ...cloudForm, timeline: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="18">18 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                    <SelectItem value="36">36 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateCloudROI} className="w-full">
                Calculate ROI
              </Button>

              {/* Results */}
              {cloudResults && (
                <div className="p-6 bg-primary/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Estimated Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">{formatCurrency(cloudResults.annualSavings)}</div>
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">{cloudResults.paybackMonths}</div>
                      <div className="text-sm text-muted-foreground">Payback (months)</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-card rounded-lg">
                    <div className="text-sm text-muted-foreground">3-Year Net Savings</div>
                    <div className="text-xl font-bold text-foreground">{formatCurrency(cloudResults.threeYearSavings)}</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* QA Automation Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">QA Automation Payback Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="qa-team-size">QA Team Size (FTEs)</Label>
                <Input
                  id="qa-team-size"
                  type="number"
                  placeholder="e.g., 15"
                  value={qaForm.teamSize}
                  onChange={(e) => setQAForm({ ...qaForm, teamSize: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="qa-salary">Average QA Engineer Salary ($)</Label>
                <Input
                  id="qa-salary"
                  type="number"
                  placeholder="e.g., 95000"
                  value={qaForm.salary}
                  onChange={(e) => setQAForm({ ...qaForm, salary: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="qa-automation">% Manual Testing (to be automated)</Label>
                <Select value={qaForm.automationPercent} onValueChange={(value) => setQAForm({ ...qaForm, automationPercent: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30%</SelectItem>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="70">70%</SelectItem>
                    <SelectItem value="90">90%</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateQAROI} className="w-full">
                Calculate Payback
              </Button>

              {/* Results */}
              {qaResults && (
                <div className="p-6 bg-secondary/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Estimated Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-secondary">{formatCurrency(qaResults.annualSavings)}</div>
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{qaResults.paybackMonths}</div>
                      <div className="text-sm text-muted-foreground">Payback (months)</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-card rounded-lg">
                    <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
                    <div className="text-xl font-bold text-foreground">{qaResults.efficiencyGain}%</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want a detailed ROI analysis for your specific situation?
          </p>
          <Button size="lg" onClick={() => {
            const element = document.getElementById("contact")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}>
            Schedule ROI Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

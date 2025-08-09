import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { COMPANY_INFO, OFFICE_LOCATIONS } from "@/lib/constants"
import { useToast } from "@/hooks/use-toast"

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  interest: z.string().min(1, "Please select a service area"),
  budget: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted"
  }),
  website: z.string().optional() // Honeypot field
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      interest: "",
      budget: "",
      message: "",
      consent: false,
      website: ""
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.website) {
      return // Likely spam
    }

    try {
      // TODO: Implement actual form submission to API/CRM
      console.log("Form submitted:", data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 24 hours to schedule your strategy consultation."
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Transform Your Enterprise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a strategic consultation to discuss your technology transformation goals and explore 
            how we can accelerate your digital journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Strategy Call</CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot field */}
                    <Input
                      {...form.register("website")}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="john.smith@company.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company *</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corporation" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Interest *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="digital-transformation">Digital Transformation Strategy</SelectItem>
                              <SelectItem value="cloud-migration">Cloud Migration & Modernization</SelectItem>
                              <SelectItem value="data-analytics">Data Analytics & AI</SelectItem>
                              <SelectItem value="cybersecurity">Cybersecurity & Compliance</SelectItem>
                              <SelectItem value="automation">Process Automation</SelectItem>
                              <SelectItem value="other">Other / Multiple Areas</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                              <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                              <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                              <SelectItem value="5m+">$5M+</SelectItem>
                              <SelectItem value="exploratory">Exploratory / TBD</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tell us about your project goals and timeline</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your transformation goals, key challenges, and preferred timeline..." 
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-muted-foreground">
                              I consent to StrataTech Consulting contacting me about relevant services and insights. 
                              You can unsubscribe at any time. *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Submitting..." : "Schedule Strategy Call"}
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="p-6 bg-secondary/10 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Thank you for your interest!</h4>
                      <p className="text-muted-foreground">We'll be in touch within 24 hours to schedule your strategy consultation.</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Global Offices</h3>
              <div className="space-y-6">
                {OFFICE_LOCATIONS.map((office) => (
                  <Card key={office.name}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-2">{office.name}</h4>
                      <div className="text-muted-foreground space-y-1">
                        {office.address.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                        <p className="font-medium">{office.phone}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{COMPANY_INFO.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{COMPANY_INFO.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

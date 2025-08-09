import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Mail, Phone, CheckCircle } from "lucide-react"
import { COMPANY_INFO, OFFICE_LOCATIONS } from "@/lib/constants"
import { useToast } from "@/hooks/use-toast"

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().optional(),
  help: z.string().min(10, "Please tell us a bit more about how we can help."),
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
      phone: "",
      company: "",
      role: "",
      help: "",
      website: ""
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    if (data.website) {
      return // Likely spam
    }

    try {
      console.log("Form submitted:", data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      toast({
        title: "Thanks for reaching out!",
        description: "We've received your message and will be in touch shortly."
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
            We're here to help.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to start a conversation. Fill out the form and we'll connect you with the right person.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="john.smith@company.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="(123) 456-7890" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
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
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., CTO, Project Manager" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="help"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What Can We Help with? *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project, goals, and challenges..." 
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="p-6 bg-secondary/10 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Thanks for reaching out!</h4>
                      <p className="text-muted-foreground">We've received your message and will be in touch shortly.</p>
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
                        {office.phone && <p className="font-medium">{office.phone}</p>}
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
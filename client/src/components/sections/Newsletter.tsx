import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address")
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

export function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ""
    }
  })

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // TODO: Implement newsletter subscription
      console.log("Newsletter subscription:", data.email)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setIsSubmitted(true)
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our monthly insights newsletter."
      })
      
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error subscribing. Please try again.",
        variant: "destructive"
      })
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <div className="text-white text-lg font-semibold">
            ✓ Thank you for subscribing!
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Stay Ahead with Technology Insights
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get monthly insights on digital transformation, cloud strategies, and enterprise technology trends.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto flex gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Enter your work email"
                        className="bg-background text-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                variant="secondary"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </Form>
          
          <p className="text-primary-foreground/60 text-sm mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Award, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">About PuppyStore</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We help parents make informed choices about newborn products through honest and detailed reviews, based on
              real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground text-lg">How it all began</p>
            </div>

            <div className="space-y-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg leading-relaxed">
                  PuppyStore was born from the personal experience of young parents who faced an overwhelming amount of
                  newborn products and a lack of honest information about them. When our first child was born in 2020,
                  we spent months researching reviews, comparing specifications, and testing various products.
                </p>

                <p className="text-lg leading-relaxed">
                  We realized that many parents face the same problems: how to choose safe and quality products among
                  thousands of options? Which products are truly necessary, and which are just marketing? That's how the
                  idea of creating a platform with independent and detailed reviews was born.
                </p>

                <p className="text-lg leading-relaxed">
                  Today our team consists of experienced parents, pediatricians, and child safety experts. We test each
                  product in real conditions and share honest conclusions with other parents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="text-muted-foreground text-lg">Principles that guide us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Child safety is our top priority. We carefully check each product for compliance with safety
                  standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Honesty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We tell the truth about products, including their flaws. Our reviews are based on real experience, not
                  advertising materials.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We create a community of parents who help each other make the best choices for their children.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team includes pediatricians, child safety experts, and experienced parents with years of
                  experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Independence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We don't receive money from manufacturers for positive reviews. Our independence guarantees
                  objectivity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We constantly improve our testing methods and look for new ways to help parents.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">How We Work</h2>
            <p className="text-muted-foreground text-lg">Our review creation process</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Product Selection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We choose products based on popularity, innovation, and requests from our community. Each product is
                  purchased with our own funds.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Testing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Minimum 3 months of real-world use with children of different ages. We test safety, convenience,
                  durability, and compliance with stated specifications.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Expert Evaluation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our experts - pediatricians and child safety specialists - conduct additional product evaluation from
                  a professional perspective.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Review Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We create a detailed review with photos, videos, pros, cons, and honest recommendations. Each review
                  goes through editorial review.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  5
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Updates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We regularly update reviews when new product versions appear or market conditions change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Our Achievements</h2>
            <p className="text-primary-foreground/80 text-lg">Numbers we're proud of</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Detailed Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50,000+</div>
              <div className="text-primary-foreground/80">Happy Parents</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1,200+</div>
              <div className="text-primary-foreground/80">Testing Hours</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-primary-foreground/80">Positive Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Our Team</h2>
            <p className="text-muted-foreground text-lg">People who make PuppyStore special</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle>Anna Petrova</CardTitle>
                <CardDescription>Founder and Editor-in-Chief</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mother of two, baby products expert with 8 years of experience. Created PuppyStore to help other
                  parents.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="secondary">Founder</Badge>
                  <Badge variant="outline">Mom</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle>Dr. Mikhail Ivanov</CardTitle>
                <CardDescription>Pediatrician Consultant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pediatrician with 15 years of experience, child safety specialist. Consults on medical aspects of
                  products.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="secondary">Pediatrician</Badge>
                  <Badge variant="outline">15 years experience</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle>Elena Sidorova</CardTitle>
                <CardDescription>Testing Expert</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quality engineer, mother of three. Develops testing methodologies and controls review quality.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="secondary">Engineer</Badge>
                  <Badge variant="outline">Mom of 3</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}

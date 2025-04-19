import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <SectionHeading
          badge="Insights"
          title="Latest"
          titleColored="From Our Blog"
          description="Stay updated with the latest trends, insights, and news from the world of technology"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Future of Cloud Computing in Africa",
              excerpt: "Exploring how cloud technologies are transforming businesses across the African continent.",
              date: "June 15, 2023",
              category: "Cloud",
              image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
            },
            {
              title: "Cybersecurity Challenges for Kenyan Businesses",
              excerpt: "Key security threats facing organizations in Kenya and strategies to mitigate them.",
              date: "May 22, 2023",
              category: "Security",
              image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
            },
            {
              title: "Digital Transformation Success Stories",
              excerpt: "How leading organizations in East Africa have successfully navigated digital transformation.",
              date: "April 10, 2023",
              category: "Digital Transformation",
              image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
            },
          ].map((post, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-xs font-medium text-primary-600 dark:text-primary-400">{post.category}</div>
                  <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="text-xs text-muted-foreground">{post.date}</div>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#f5c855] hover:bg-yellow-500 text-black">View All Articles</Button>
        </div>
      </div>
    </section>
  )
}

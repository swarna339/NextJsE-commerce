import Hero from "@/components/Hero"
import ProductCard from "@/components/ProductCard"
import Test from "@/components/Test"
import TopNavigation from "@/components/TopNavigation"

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* <Test /> */}
      <TopNavigation />
      <Hero />
      <ProductCard />
    </main>
  )
}

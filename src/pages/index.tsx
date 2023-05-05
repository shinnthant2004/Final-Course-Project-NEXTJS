import FeaturedPosts from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"
import { Fragment } from "react"

const Home = () => {
  return (
     <Fragment>
       <Hero/>
       <FeaturedPosts posts={[]}/>
     </Fragment>
  )
}

export default Home

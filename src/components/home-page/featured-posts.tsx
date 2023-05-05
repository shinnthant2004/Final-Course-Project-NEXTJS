import PostsGrid from "../posts"
import classes from './featured-posts.module.css';

interface IProps {
    posts: any
}

const FeaturedPosts = (props:IProps) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
       </section>
    )
}

export default FeaturedPosts
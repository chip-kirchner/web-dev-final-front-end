import {useSelector} from "react-redux";
import PostItem from "../post-screen/post-item";

const ViewWidget = ({view}) => {
    const profile = useSelector(state => state.profile);
    const plans = useSelector(state => state.plans);
    const posts = useSelector(state => state.posts);

    switch(view) {
        case 'posts':
            return(
                <ul className="list-group mt-2">
                    {posts.filter(post => post.user._id === profile._id).map(post =>
                        <PostItem post={post}/>
                    )}
                </ul>
            )
        default:
            return null;
    }

}
export default ViewWidget;
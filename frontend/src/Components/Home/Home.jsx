import React,{ useEffect } from "react";
import User from "../User/User";
import Post from "../Post/Post";
import { useDispatch,useSelector } from "react-redux";
import "./Home.css";
import { getFollowingPosts } from "../../Actions/User";
import Loader from "../Loader/Loader";
import { Typography } from "@mui/material";

const Home=()=>{

    const dispatch = useDispatch();

    const { loading, posts, error } = useSelector(
        (state) => state.postOfFollowing
      );

    useEffect(() => {
        dispatch(getFollowingPosts());
      }, [dispatch]);

    return loading ? (
        <Loader/>
        ) : (
          <div className="home">
             <div className="homeleft">
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <Post 
                        key={post._id}
                        postImage="https://mymodernmet.com/wp/wp-content/uploads/2020/02/gary-the-hiking-cat-20.jpg"
                        ownerName={'merahulroy'}
                        caption='yo this is rahul posting!'
                        postId={post._id}
                        caption={post.caption}
                        postImage={post.image.url}
                        likes={post.likes}
                        comments={post.comments}
                        ownerImage={post.owner.avatar.url}
                        ownerName={post.owner.name}
                        ownerId={post.owner._id}
                />
            ))
            ) : (
                <Typography variant="h6">No posts yet</Typography>
            )}
            </div>
            <div className="homeright">
            <User userId={"user._id"} name={"The Unholy"} avatar={"https://static.tnn.in/photo/msid-93415263,width-100,height-200,resizemode-75/93415263.jpg"} />

            </div>
        </div>
        )
};
export default Home;
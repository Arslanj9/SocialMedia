import { createContext, useReducer, useState } from "react";



// By providing values and methods inside createContext method you can get auto-generated values inside components where you are using them!
export const postsStoreContext = createContext({
    posts: [],
    selectedTab: "",
    setSelectedTab: () => {},
    handleAddPost: () => {}, 
    handleDeletePost: () => {}
})



const innitialPosts = [
    {
        id: 1,
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        tags: ["Enjoy", "Outdoor", "Awesome"]
    },
    {
        id: 2,
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        tags: ["Enjoy", "Outdoor"]
    },
    {
        id: 3,
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        tags: ["Enjoy", "Outdoor", "Awesome"]
    },
    {
        id: 4,
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        tags: ["Enjoy", "Outdoor"]
    }
]


const postsReducer = (posts, action) => {
    let newPosts = posts;
    if(action.type === "ADD_POST") {
        newPosts = [...posts, {
            id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
            title: action.payload.title,
            body: action.payload.body,
            tags: action.payload.tags
        }]
    }else if(action.type === "DEL_POST") {
        newPosts = posts.filter((post) => post.id !== action.payload.postId);
    }else if(action.type === "INCREMENT_ID") {
        let maxId = posts.reduce((max, item) => (item.id > max ? item.id : max), 0);
        newPosts = [ ...posts, {id: maxId + 1} ];
    }

    console.log(newPosts)
    return newPosts
}



const PostsProvider = ({ children }) => {

    const [ posts, dispatchPosts ] = useReducer(postsReducer, innitialPosts)
    const [ selectedTab, setSelectedTab ] = useState("HOME")

    const handleAddPost = (title, body, tags) => {
        const newPost = {
            type: "ADD_POST",
            payload: {
                title,
                body,
                tags
            }
        }

        console.log(`${newPost.payload.tags}`)
        
        dispatchPosts(newPost)
    }


    const handleDeletePost = (postId) => {
        const deletePost = {
            type: "DEL_POST",
            payload: {
                postId
            }
        }

        dispatchPosts(deletePost)
    }



    return (
        <postsStoreContext.Provider 
            value={{ 
                selectedTab, 
                setSelectedTab, 
                posts, 
                handleAddPost, 
                handleDeletePost
        }}>
            {children}
        </postsStoreContext.Provider>
    )
}

export default PostsProvider
import { createContext, useReducer, useState } from "react";



// By providing values and methods inside createContext method you can get auto-generated values inside components where you are using them!
export const postsStoreContext = createContext({
    posts: [],
    selectedTab: "",
    setSelectedTab: () => {},
    handleAddPost: () => {}, 
    handleDeletePost: () => {},
    handleIncrementID: () => {}
})



const innitialPosts = [
    {
        id: "1",
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        tags: ["Enjoy", "Outdoor", "Awesome"]
    },
    {
        id: "2",
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        tags: ["Enjoy", "Outdoor"]
    },
    {
        id: "3",
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        tags: ["Enjoy", "Outdoor", "Awesome"]
    },
    {
        id: "4",
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        tags: ["Enjoy", "Outdoor"]
    }
]


const postsReducer = (posts, action) => {
    let newPosts = posts;
    if(action.type === "ADD_POST") {
        newPosts = [...posts, {heading: action.payload.heading, text: action.payload.text} ] 
    }else if(action.type === "DEL_POST") {
        newPosts = posts.filter((post) => post.id !== action.payload.postId);
    }else if(action.type === "INCREMENT_ID") {
        let maxId = posts.reduce((max, item) => (item.id > max ? item.id : max), 0);
        newPosts = [ ...posts, {id: maxId + 1} ];
    }

    return newPosts
}



const PostsProvider = ({ children }) => {

    const [ posts, dispatchPosts ] = useReducer(postsReducer, innitialPosts)
    const [ selectedTab, setSelectedTab ] = useState("HOME")

    const handleAddPost = (heading, text) => {
        const newPost = {
            type: "ADD_POST",
            payload: {
                heading: heading,
                text: text
            }
        }
        
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

    const handleIncrementID = () => {
        const incrementId = {
            type: "INCREMENT_ID",
        }
        console.log("Increment called")

        dispatchPosts(incrementId)
    }



    return (
        <postsStoreContext.Provider 
            value={{ 
                selectedTab, 
                setSelectedTab, 
                posts, 
                handleAddPost, 
                handleDeletePost,
                handleIncrementID 
        }}>
            {children}
        </postsStoreContext.Provider>
    )
}

export default PostsProvider
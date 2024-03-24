import { createContext, useReducer, useState } from "react";

export const postsStoreContext = createContext()

const innitialPosts = [
    {
        id: "1",
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        reactions: 4,
        userId: "",
        tags: ["Enjoy", "Outdoor", "Awesome"]
    },
    {
        id: "2",
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        reactions: 20,
        userId: "",
        tags: ["Enjoy", "Outdoor"]
    },
    {
        id: "1",
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        reactions: 4,
        userId: "",
        tags: ["Enjoy", "Outdoor", "Awesome"]
    },
    {
        id: "2",
        title: "Going on a ride",
        body: "It so cool to finally go for a ride with friends",
        reactions: 20,
        userId: "",
        tags: ["Enjoy", "Outdoor"]
    }
]

const postsReducer = (posts, action) => {
    let newPosts = posts;
    if(action.type === "ADD_POST") {
        newPosts = [...posts, {heading: action.payload.heading, text: action.payload.text} ] 
    }

    return newPosts
}



const PostsProvider = ({ children }) => {

    const [ posts, dispatchPosts ] = useReducer(postsReducer, innitialPosts)
    const [ selectedTab, setSelectedTab ] = useState("HOME")

    const addPost = (heading, text) => {
        const newPost = {
            type: "ADD_POST",
            payload: {
                heading: heading,
                text: text
            }
        }
        
        dispatchPosts(newPost)
    }


    const deletePost = () => {

    }

    return (
        <postsStoreContext.Provider value={{ selectedTab, setSelectedTab, posts, addPost, deletePost }}>
            {children}
        </postsStoreContext.Provider>
    )
}

export default PostsProvider
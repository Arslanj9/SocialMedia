import { createContext, useReducer, useState } from "react";

export const postsStoreContext = createContext({
    posts: [],
    addPost: () => {},
    deletePost: () => {}
})

const innitialPosts = [
    {
        heading: "Bye",
        text: "Hello i am text"
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
        // console.log(heading)
        // console.log(text)
        
        dispatchPosts(newPost)
    }

    // console.log(posts[0].heading)

    const deletePost = () => {

    }

    return (
        <postsStoreContext.Provider value={{ selectedTab, setSelectedTab, posts, addPost, deletePost }}>
            {children}
        </postsStoreContext.Provider>
    )
}

export default PostsProvider
import { createContext, useState } from "react";

export const postsStoreContext = createContext([])


const PostsProvider = ({ children }) => {

    const [selectedTab, setSelectedTab] = useState("HOME")

    return (
        <postsStoreContext.Provider value={{ selectedTab, setSelectedTab }}>
            {children}
        </postsStoreContext.Provider>
    )
}

export default PostsProvider
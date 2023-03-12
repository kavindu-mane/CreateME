import React, {createContext , useState, useContext } from 'react';

const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const[data , setData] = useState({
        "title":{
                "title":"Hi , I'm",
                "value":"",
                "active":true,
                "align":"left"
        },
        "subtitle":{
                "title":"A passionate frontend developer from Sri Lanka",
                "value":"",
                "active":false,
                "align":"left"
        },
        "work":{
                "working":{
                    "title":"🔭 I'm currently working on",
                    "value":""
                },
                "collaborate":{
                    "title":"👯 I'm looking to collaborate on",
                    "value":""
                },
                "help":{
                    "title":"🤝 I'm looking for help with",
                    "value":""
                },
                "learning":{
                    "title":"🌱 I'm currently learning",
                    "value":""
                },
                "about":{
                    "title":"💬 Ask me about",
                    "value":""
                },
                "reach":{
                    "title":"📫 How to reach me",
                    "value":""
                },
                "project":{
                    "title":"👨‍💻 All of my projects are available at",
                    "value":""
                },
                "article":{
                    "title":"📝 I regularly write articles on",
                    "value":""
                },
                "experience":{
                    "title":"📄 Know about my experiences",
                    "value":""
                },
                "fun":{
                    "title":"⚡ Fun fact",
                    "value":""
                },
                "active":false,
                "align":"left"
        }

    });

    return(
        <DataContext.Provider value={[data , setData]}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)

export default DataProvider;
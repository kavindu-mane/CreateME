import React, {createContext , useState, useContext } from 'react';

const DataContext = createContext(null);

const DataProvider = ({children}) => {

    const returnOriginalIcon = (icon) => {
        return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${icon}/${icon}-original.svg`
    }

    const returnOriginalWordmarkIcon = (icon) => {
        return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${icon}/${icon}-original-wordmark.svg`
    }

    const returnPlainIcon = (icon) => {
        return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${icon}/${icon}-plain.svg`
    }

    const returnWorldVectorLogo = (icon) => {
        return `https://cdn.worldvectorlogo.com/logos/${icon}.svg`
    }

    const returnVectorLogo = (icon) => {
        return `https://www.vectorlogo.zone/logos/${icon}/${icon}-icon.svg`
    }

    const returnJsdelivrDevicons = (icon) => {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original-wordmark.svg`
    }

    const[data , setData] = useState({
        "title":{
                "value":"Hi , I'm",
                "active":true,
                "align":"left"
        },
        "subtitle":{
                "value":"A passionate frontend developer from Sri Lanka",
                "active":false,
                "align":"left"
        },
        "work":{
                "value":"🔭 I'm currently working on \n" +
                        "👯 I'm looking to collaborate on \n"+
                        "🤝 I'm looking for help with \n" +
                        "🌱 I'm currently learning \n" +
                        "💬 Ask me about \n" +
                        "📫 How to reach me \n" +
                        "👨‍💻 All of my projects are available at \n" +
                        "📝 I regularly write articles on \n" +
                        "📄 Know about my experiences \n" +
                        "⚡ Fun fact ",
                "active":false,
                "align":"left"
        },
        "skill":{
                "value":[["groovy" , false , returnOriginalIcon("groovy")], // languages
                        ["c" , false , returnOriginalIcon("c")],
                        ["c++" , false , returnOriginalIcon("cplusplus")],
                        ["c#" , false , returnOriginalIcon("csharp")],
                        ["crystal" , false , returnOriginalIcon("crystal")],
                        ["css" , false , returnOriginalIcon("css3")] ,
                        ["clojure" , false , returnOriginalIcon("clojure") ],
                        ["coffeescript" , false , returnOriginalIcon("coffeescript") ],
                        ["dart" , false , returnOriginalIcon("dart") ],
                        ["elixir" , false , returnOriginalIcon("elixir") ],
                        ["elm" , false , returnOriginalIcon("elm") ],
                        ["erlang" , false , returnOriginalIcon("erlang") ],
                        ["go" , false , returnOriginalIcon("go") ],
                        ["haskell" , false , returnOriginalIcon("haskell") ],
                        ["html5" , false , returnOriginalIcon("html5") ],
                        ["java" , false , returnOriginalIcon("java") ],
                        ["javascript" , false , returnOriginalIcon("javascript") ],
                        ["julia" , false , returnOriginalIcon("julia") ],
                        ["kotlin" , false , returnOriginalIcon("kotlin") ],
                        ["latex" , false , returnOriginalIcon("latex") ],
                        ["lua" , false , returnOriginalIcon("lua") ],
                        ["markdown" , false , returnOriginalIcon("markdown") ],
                        ["php" , false , returnOriginalIcon("php") ],
                        ["perl" , false , returnOriginalIcon("perl") ],
                        ["python" , false , returnOriginalIcon("python") ],
                        ["r" , false , returnOriginalIcon("r") ],
                        ["ruby" , false , returnOriginalIcon("ruby") ],
                        ["scala" , false , returnOriginalIcon("scala") ],
                        ["solidity" , false , returnOriginalIcon("solidity") ],
                        ["swift" , false , returnOriginalIcon("swift") ],
                        ["typescript" , false , returnOriginalIcon("typescript") ],
                        ["zig" , false , returnOriginalIcon("zig") ],
                        ["objective c" , false , returnPlainIcon("objectivec") ],
                        ["rust" , false , returnPlainIcon("rust") ],
                        ["nim" , false , returnVectorLogo("nim-lang") ],  ///
                        ["octave" , false , returnWorldVectorLogo("gnu_octave") ],  ///
                        
                        ["vuejs" , false , returnOriginalIcon("vuejs") ], // frontend development
                        ["react" , false , returnOriginalIcon("react") ],
                        ["svelte" , false , returnOriginalIcon("svelte") ],
                        ["angularjs" , false , returnJsdelivrDevicons("angularjs") ], ///
                        ["backbonejs" , false , returnOriginalIcon("backbonejs") ],
                        ["bootstrap" , false , returnOriginalIcon("bootstrap") ],
                        ["vuetify" , false , returnOriginalIcon("vuetify") ],
                        ["sass" , false , returnOriginalIcon("sass") ],
                        ["redux" , false , returnOriginalIcon("redux") ],
                        ["webpack" , false , returnOriginalIcon("webpack") ],
                        ["babel" , false , returnOriginalIcon("babel") ],
                        ["qt" , false , returnOriginalIcon("qt") ],
                        ["gulp" , false , returnPlainIcon("gulp") ],
                        ["tailwindcss" , false , returnPlainIcon("tailwindcss") ],
                        ["ember" , false , returnOriginalWordmarkIcon("ember") ],
                        ["angular" , false , returnOriginalIcon("angularjs") ],
                        ["pug" , false , returnWorldVectorLogo("pug") ],
                        ["materialize" , false , returnVectorLogo("materialize") ],
                        ["bulma" , false , returnPlainIcon("bulma") ],
                        ["gtk" , false , returnVectorLogo("gtk") ],
                        ["wxwidgets" , false , returnWorldVectorLogo("wx_widgets") ],
                        
                        ["nodejs" , false , returnOriginalIcon("nodejs") ], // backend development
                        ["spring" , false , returnOriginalIcon("spring") ],
                        ["express" , false , returnOriginalIcon("express") ],
                        ["nginx" , false , returnOriginalIcon("nginx") ],
                        ["graphql" , false , returnPlainIcon("graphql") ],
                        ["nestjs" , false , returnPlainIcon("nestjs") ],
                        ["kafka" , false , returnWorldVectorLogo("kafka") ],
                        ["solr" , false , returnWorldVectorLogo("solr") ],
                        ["rabbitmq" , false , returnWorldVectorLogo("rabbitmq") ],
                        ["hadoop" , false , returnWorldVectorLogo("hadoop") ],
                        ["openresty" , false , returnVectorLogo("openresty") ],
                        
                        ["android" , false , returnOriginalIcon("android") ], // mobile app development
                        ["flutter" , false , returnOriginalIcon("flutter") ],
                        ["xamarin" , false , returnOriginalIcon("xamarin") ],
                        ["ionic" , false , returnOriginalIcon("ionic") ],
                        ["nativescript" , false , returnWorldVectorLogo("nativescript") ],
                        ["reactnative" , false , returnOriginalIcon("react") ],
                        ["cordova" , false , returnVectorLogo("apache_cordova") ],
                        
                        ["tensorflow" , false , returnOriginalIcon("tensorflow") ], // ia / ml
                        ["pytorch" , false , returnOriginalIcon("pytorch") ],
                        ["pandas" , false , returnOriginalIcon("pandas") ],
                        ["opencv" , false , returnOriginalIcon("opencv") ],
                        ["seaborn" , false , returnVectorLogo("seaborn") ],
                        ["scikit" , false , returnVectorLogo("scikit") ],
                        
                        ["mongodb" , false , returnOriginalIcon("mongodb") ], // database
                        ["mysql" , false , returnOriginalIcon("mysql") ],
                        ["postgresql" , false , returnOriginalIcon("postgresql") ],
                        ["redis" , false , returnOriginalIcon("redis") ],
                        ["oracle" , false , returnOriginalIcon("oracle") ],
                        ["couchdb" , false , returnOriginalIcon("couchdb") ],
                        ["sqlite" , false , returnOriginalIcon("sqlite") ],
                        ["cassandra" , false , returnWorldVectorLogo("cassandra") ],
                        ["hive" , false , returnWorldVectorLogo("hive") ],
                        ["realm" , false , returnWorldVectorLogo("realm") ],
                        ["mariadb" , false , returnWorldVectorLogo("mariadb") ],
                        ["cockroachdb" , false , returnWorldVectorLogo("cockroachdb") ],
                        ["elasticsearch" , false , returnWorldVectorLogo("elasticsearch") ],
                        ["mssql" , false , returnVectorLogo("ms-sql") ],
                        
                        ["d3js" , false , returnOriginalIcon("d3js") ], // data visualization
                        ["grafana" , false , returnOriginalIcon("grafana") ],
                        ["chartjs" , false , returnVectorLogo("chartjs") ],
                        ["canvasjs" , false , returnVectorLogo("canvasjs") ],
                        ["kibana" , false , returnVectorLogo("elasticco_kibana") ],
                        
                        ["docker" , false , returnOriginalIcon("docker") ], //  devops
                        ["jenkins" , false , returnOriginalIcon("jenkins") ],
                        ["gcp" , false , returnOriginalIcon("googlecloud") ],
                        ["kubernetes" , false , returnPlainIcon("kubernetes") ],
                        ["aws" , false , returnOriginalWordmarkIcon("amazonwebservices") ],
                        ["bash" , false , returnOriginalIcon("bash") ],
                        ["azure" , false , returnOriginalIcon("azure") ],
                        ["vagrant" , false , returnOriginalIcon("vagrant") ],
                        ["travisci" , false , returnVectorLogo("travis-ci") ],
                        ["circleci" , false , returnPlainIcon("circleci") ],
                        
                        ["django" , false , returnPlainIcon("django") ], // frameworks
                        [".net" , false , returnOriginalIcon("dot-net") ], 
                        ["electron" , false , returnOriginalIcon("electron") ],
                        ["symfony" , false , returnOriginalWordmarkIcon("symfony") ],
                        ["laravel" , false , returnVectorLogo("laravel") ],
                        ["codeigniter" , false , returnPlainIcon("codeigniter") ],
                        ["rails" , false , returnPlainIcon("rails") ], //plain
                        ["flask" , false , returnOriginalIcon("flask") ],
                        ["quasar" , false , returnVectorLogo("quasar") ],
                        
                        ["firebase" , false , returnPlainIcon("firebase") ], // baas
                        ["appwrite" , false , returnOriginalIcon("appwrite") ],
                        ["amplify" , false , returnVectorLogo("amplify") ],
                        ["heroku" , false , returnPlainIcon("heroku") ],
                        
                        ["cypress" , false , returnVectorLogo("cypress") ], //testing
                        ["selenium" , false , returnOriginalIcon("selenium") ],
                        ["jest" , false , returnPlainIcon("jest") ],
                        ["mocha" , false , returnPlainIcon("mocha") ],
                        ["puppeteer" , false , returnVectorLogo("pptrdev") ],
                        ["karma" , false , returnOriginalIcon("karma") ],
                        ["jasmine" , false , returnPlainIcon("jasmine") ],
                        
                        ["gatsby" , false , returnVectorLogo("gatsbyjs") ], // static site generators
                        ["gridsome" , false , returnWorldVectorLogo("gridsome") ],
                        ["hugo" , false , returnOriginalIcon("hugo") ],
                        ["jekyll" , false , returnWorldVectorLogo("jekyll") ],
                        ["nextjs" , false , returnOriginalIcon("nextjs") ],
                        ["nuxtjs" , false , returnOriginalIcon("nuxtjs") ],
                        ["11ty" , false , returnVectorLogo("11ty") ],
                        ["scully" , false , returnVectorLogo("scully") ],
                        ["sculpin" , false , returnVectorLogo("sculpin") ],
                        ["sapper" , false , returnVectorLogo("sapper") ],
                        ["vuepress" , false , returnVectorLogo("vuepress") ],
                        ["hexo" , false , returnWorldVectorLogo("hexo") ],
                        ["middleman" , false , returnWorldVectorLogo("middleman") ],
                        ["docusaurus" , false , returnVectorLogo("docusaurus") ],
                        ["gitbook" , false , returnVectorLogo("gitbook") ],
                        ["astro" , false , returnWorldVectorLogo("astro") ],
                        
                        ["unity" , false , returnOriginalIcon("unity") ], // others
                        ["unreal" , false , returnJsdelivrDevicons("unrealengine") ],
                        ["zapier" , false , returnWorldVectorLogo("zapier") ],
                        ["ifttt" , false , returnOriginalIcon("ifttt") ],
                        ["linux" , false , returnOriginalIcon("linux") ],
                        ["git" , false , returnOriginalIcon("git") ],
                        ["arduino" , false , returnOriginalIcon("arduino") ],
                        ["raspberrypi" , false , returnOriginalIcon("raspberrypi") ],
                        ["illustrator" , false , returnVectorLogo("adobe_illustrator") ], 
                        ["photoshop" , false , returnPlainIcon("photoshop") ], 
                        ["xd" , false , returnPlainIcon("xd") ], 
                        ["figma" , false , returnOriginalIcon("figma") ],
                        ["sketch" , false , returnOriginalIcon("sketch") ],
                        ["invision" , false , returnVectorLogo("invisionapp") ],
                        ["framer" , false , returnVectorLogo("framer") ],
                        ["matlab" , false , returnOriginalIcon("matlab") ],
                        ["postman" , false , returnVectorLogo("getpostman") ], 
                        ["canva" , false , returnOriginalIcon("canva") ],],
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
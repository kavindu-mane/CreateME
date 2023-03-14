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
                        ["nim" , false , returnVectorLogo("nim-lang") ],  
                        ["octave" , false , "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" ],  
                        
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
                        ["materialize" , false , "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" ],
                        ["bulma" , false , returnPlainIcon("bulma") ],
                        ["gtk" , false , "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg" ],
                        ["wxwidgets" , false , "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg" ],
                        
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
                        ["openresty" , false , "https://openresty.org/images/logo.png" ],
                        
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
                        ["seaborn" , false , "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" ],
                        ["scikit" , false , "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" ],
                        
                        ["mongodb" , false , returnOriginalIcon("mongodb") ], // database
                        ["mysql" , false , returnOriginalIcon("mysql") ],
                        ["postgresql" , false , returnOriginalIcon("postgresql") ],
                        ["redis" , false , returnOriginalIcon("redis") ],
                        ["oracle" , false , returnOriginalIcon("oracle") ],
                        ["couchdb" , false , returnOriginalIcon("couchdb") ],
                        ["sqlite" , false , returnOriginalIcon("sqlite") ],
                        ["cassandra" , false , returnWorldVectorLogo("cassandra") ],
                        ["hive" , false , "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" ],
                        ["realm" , false , "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg" ],
                        ["mariadb" , false , returnWorldVectorLogo("mariadb") ],
                        ["cockroachdb" , false , returnWorldVectorLogo("cockroachdb") ],
                        ["elasticsearch" , false , returnWorldVectorLogo("elasticsearch") ],
                        ["mssql" , false , "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" ],
                        
                        ["d3js" , false , returnOriginalIcon("d3js") ], // data visualization
                        ["grafana" , false , returnOriginalIcon("grafana") ],
                        ["chartjs" , false , "https://www.chartjs.org/media/logo-title.svg" ],
                        ["canvasjs" , false , "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg" ],
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
                        ["quasar" , false , "https://cdn.quasar.dev/logo/svg/quasar-logo.svg" ],
                        
                        ["firebase" , false , returnPlainIcon("firebase") ], // baas
                        ["appwrite" , false , returnOriginalIcon("appwrite") ],
                        ["amplify" , false , "https://docs.amplify.aws/assets/logo-dark.svg" ],
                        ["heroku" , false , returnPlainIcon("heroku") ],
                        
                        ["cypress" , false , "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" ], //testing
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
                        ["11ty" , false , "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg" ],
                        ["scully" , false , "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg" ],
                        ["sculpin" , false , "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg" ],
                        ["sapper" , false , "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/sapper.svg" ],
                        ["vuepress" , false , "https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/VuePress.svg" ],
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
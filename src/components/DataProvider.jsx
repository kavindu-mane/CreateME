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
                "title":"🖥️ Tech Stack",
                "value":[["Apache groovy" , false , returnOriginalIcon("groovy") , "4298b8"], // languages
                        ["c" , false , returnOriginalIcon("c") , "555555"],
                        ["c++" , false , returnOriginalIcon("cplusplus") , "f34b7d"],
                        ["c#" , false , returnOriginalIcon("csharp") , "178600"],
                        ["crystal" , false , returnOriginalIcon("crystal") , "000100"],
                        ["css3" , false , returnOriginalIcon("css3") , "563d7c"] ,
                        ["clojure" , false , returnOriginalIcon("clojure") , "db5855"],
                        ["coffeescript" , false , returnOriginalIcon("coffeescript"), "244776"],
                        ["dart" , false , returnOriginalIcon("dart") , "00B4AB"],
                        ["elixir" , false , returnOriginalIcon("elixir") , "6e4a7e" ],
                        ["elm" , false , returnOriginalIcon("elm") , "60B5CC" ],
                        ["erlang" , false , returnOriginalIcon("erlang") , "B83998" ],
                        ["go" , false , returnOriginalIcon("go") , "00ADD8" ],
                        ["haskell" , false , returnOriginalIcon("haskell") , "5e5086" ],
                        ["html5" , false , returnOriginalIcon("html5") , "e34c26" ],
                        ["java" , false , returnOriginalIcon("java") , "b07219" ],
                        ["javascript" , false , returnOriginalIcon("javascript") , "f1e05a" ],
                        ["julia" , false , returnOriginalIcon("julia") , "a270ba" ],
                        ["kotlin" , false , returnOriginalIcon("kotlin") , "A97BFF" ],
                        ["latex" , false , returnOriginalIcon("latex") , "333333" ],
                        ["lua" , false , returnOriginalIcon("lua") , "000080" ],
                        ["markdown" , false , returnOriginalIcon("markdown") , "083fa1" ],
                        ["php" , false , returnOriginalIcon("php") , "4F5D95" ],
                        ["perl" , false , returnOriginalIcon("perl") , "0298c3" ],
                        ["python" , false , returnOriginalIcon("python") , "3572A5" ],
                        ["r" , false , returnOriginalIcon("r") , "198CE7" ],
                        ["ruby" , false , returnOriginalIcon("ruby") , "701516" ],
                        ["scala" , false , returnOriginalIcon("scala") , "c22d40" ],
                        ["solidity" , false , returnOriginalIcon("solidity") , "AA6746" ],
                        ["swift" , false , returnOriginalIcon("swift") , "F05138" ],
                        ["typescript" , false , returnOriginalIcon("typescript") , "3178c6" ],
                        ["zig" , false , returnOriginalIcon("zig") , "ec915c" ],
                        ["objective c" , false , returnPlainIcon("objectivec") , "438eff" ],
                        ["rust" , false , returnPlainIcon("rust") , "dea584" ],
                        ["nim" , false , returnVectorLogo("nim-lang") , "ffc200" ],  
                        ["octave" , false , "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" , "e87b0e" ],  
                        
                        ["vue.js" , false , returnOriginalIcon("vuejs") , "41b883" ], // frontend development
                        ["react" , false , returnOriginalIcon("react") , "61dbfb" ],
                        ["svelte" , false , returnOriginalIcon("svelte") , "ff3e00" ],
                        ["angularjs" , false , returnJsdelivrDevicons("angularjs") , "b52e31" ], ///
                        ["backbone.js" , false , returnOriginalIcon("backbonejs") , "" ],
                        ["bootstrap" , false , returnOriginalIcon("bootstrap") , "553c7b" ],
                        ["vuetify" , false , returnOriginalIcon("vuetify") , "41b883" ],
                        ["sass" , false , returnOriginalIcon("sass") , "a53b70" ],
                        ["redux" , false , returnOriginalIcon("redux") , "" ],
                        ["webpack" , false , returnOriginalIcon("webpack") , "" ],
                        ["babel" , false , returnOriginalIcon("babel") , "" ],
                        ["qt" , false , returnOriginalIcon("qt") , "00b841" ],
                        ["gulp" , false , returnPlainIcon("gulp") , "" ],
                        ["tailwindcss" , false , returnPlainIcon("tailwindcss") , "" ],
                        ["ember.js" , false , returnOriginalWordmarkIcon("ember") , "FFF4F3" ],
                        ["angular" , false , returnOriginalIcon("angularjs") , "b52e31" ],
                        ["pug" , false , returnWorldVectorLogo("pug") , "a86454" ],
                        ["materialize" , false , "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" , "" ],
                        ["bulma" , false , returnPlainIcon("bulma") , "" ],
                        ["gtk" , false , "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg" , "" ],
                        ["wxwidgets" , false , "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg" , "" ],
                        
                        ["node.js" , false , returnOriginalIcon("nodejs") , "" ], // backend development
                        ["spring" , false , returnOriginalIcon("spring") , "" ],
                        ["express" , false , returnOriginalIcon("express") , "" ],
                        ["nginx" , false , returnOriginalIcon("nginx") , "009639" ],
                        ["graphql" , false , returnPlainIcon("graphql") , "e10098" ],
                        ["nestjs" , false , returnPlainIcon("nestjs") , "" ],
                        ["apache kafka" , false , returnWorldVectorLogo("kafka") , "" ],
                        ["apache solr" , false , returnWorldVectorLogo("solr") , "" ],
                        ["rabbitmq" , false , returnWorldVectorLogo("rabbitmq") , "" ],
                        ["apache hadoop" , false , returnWorldVectorLogo("hadoop") , "" ],
                        ["openresty" , false , "https://openresty.org/images/logo.png" , "" ],
                        
                        ["android" , false , returnOriginalIcon("android") , "" ], // mobile app development
                        ["flutter" , false , returnOriginalIcon("flutter") , "" ],
                        ["xamarin" , false , returnOriginalIcon("xamarin") , "" ],
                        ["ionic" , false , returnOriginalIcon("ionic") , "" ],
                        ["nativescript" , false , returnWorldVectorLogo("nativescript") , "" ],
                        ["react native" , false , returnOriginalIcon("react") , "" ],
                        ["apache cordova" , false , returnVectorLogo("apache_cordova") , "" ],
                        
                        ["tensorflow" , false , returnOriginalIcon("tensorflow") , "" ], // ia / ml
                        ["pytorch" , false , returnOriginalIcon("pytorch") , "" ],
                        ["pandas" , false , returnOriginalIcon("pandas") , "" ],
                        ["opencv" , false , returnOriginalIcon("opencv") , "" ],
                        ["seaborn" , false , "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" , "" ],
                        ["scikit learn" , false , "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" , "" ],
                        
                        ["mongodb" , false , returnOriginalIcon("mongodb") , "" ], // database
                        ["mysql" , false , returnOriginalIcon("mysql") , "" ],
                        ["postgresql" , false , returnOriginalIcon("postgresql") , "" ],
                        ["redis" , false , returnOriginalIcon("redis") , "" ],
                        ["oracle" , false , returnOriginalIcon("oracle") , "" ],
                        ["apache couchdb" , false , returnOriginalIcon("couchdb") , "" ],
                        ["sqlite" , false , returnOriginalIcon("sqlite") , "" ],
                        ["apache cassandra" , false , returnWorldVectorLogo("cassandra") , "" ],
                        ["hive" , false , "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" , "" ],
                        ["realm" , false , "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg" , "" ],
                        ["mariadb" , false , returnWorldVectorLogo("mariadb") , "" ],
                        ["cockroachdb" , false , returnWorldVectorLogo("cockroachdb") , "" ],
                        ["elasticsearch" , false , returnWorldVectorLogo("elasticsearch") , "" ],
                        ["microsoft sql server" , false , "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" , "" ],
                        
                        ["d3.js" , false , returnOriginalIcon("d3js") , "" ], // data visualization
                        ["grafana" , false , returnOriginalIcon("grafana") , "" ],
                        ["chart.js" , false , "https://www.chartjs.org/media/logo-title.svg" , "" ],
                        ["canvasjs" , false , "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg" , "" ],
                        ["kibana" , false , returnVectorLogo("elasticco_kibana") , "" ],
                        
                        ["docker" , false , returnOriginalIcon("docker") , "384d54" ], //  devops
                        ["jenkins" , false , returnOriginalIcon("jenkins") , "" ],
                        ["google cloud" , false , returnOriginalIcon("googlecloud") , "" ],
                        ["kubernetes" , false , returnPlainIcon("kubernetes") , "" ],
                        ["amazon aws" , false , returnOriginalWordmarkIcon("amazonwebservices") , "" ],
                        ["gnu bash" , false , returnOriginalIcon("bash") , "" ],
                        ["microsoft azure" , false , returnOriginalIcon("azure") , "" ],
                        ["vagrant" , false , returnOriginalIcon("vagrant") , "" ],
                        ["travisci" , false , returnVectorLogo("travis-ci") , "" ],
                        ["circleci" , false , returnPlainIcon("circleci") , "" ],
                        
                        ["django" , false , returnPlainIcon("django") , "" ], // frameworks
                        [".net" , false , returnOriginalIcon("dot-net") , "945db7" ], 
                        ["electron" , false , returnOriginalIcon("electron") , "" ],
                        ["symfony" , false , returnOriginalWordmarkIcon("symfony") , "" ],
                        ["laravel" , false , returnVectorLogo("laravel") , "" ],
                        ["codeigniter" , false , returnPlainIcon("codeigniter") , "" ],
                        ["ruby on rails" , false , returnPlainIcon("rails") , "" ], 
                        ["flask" , false , returnOriginalIcon("flask") , "" ],
                        ["quasar" , false , "https://cdn.quasar.dev/logo/svg/quasar-logo.svg" , "" ],
                        
                        ["firebase" , false , returnPlainIcon("firebase") , "FFA000" ], // baas
                        ["appwrite" , false , returnOriginalIcon("appwrite") , "" ],
                        ["aws amplify" , false , "https://docs.amplify.aws/assets/logo-dark.svg" , "" ],
                        ["heroku" , false , returnPlainIcon("heroku") , "" ],
                        
                        ["cypress" , false , "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" , "" ], //testing
                        ["selenium" , false , returnOriginalIcon("selenium") , "" ],
                        ["jest" , false , returnPlainIcon("jest") , "" ],
                        ["mocha" , false , returnPlainIcon("mocha") , "" ],
                        ["puppeteer" , false , returnVectorLogo("pptrdev") , "" ],
                        ["karma" , false , returnOriginalIcon("karma") , "" ],
                        ["jasmine" , false , returnPlainIcon("jasmine") , "" ],
                        
                        ["gatsby" , false , returnVectorLogo("gatsbyjs") , "" ], // static site generators
                        ["gridsome" , false , returnWorldVectorLogo("gridsome") , "" ],
                        ["hugo" , false , returnOriginalIcon("hugo") , "" ],
                        ["jekyll" , false , returnWorldVectorLogo("jekyll") , "" ],
                        ["next.js" , false , returnOriginalIcon("nextjs") , "" ],
                        ["nuxt.js" , false , returnOriginalIcon("nuxtjs") , "" ],
                        ["eleventy" , false , "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg" , "" ],
                        ["scully" , false , "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg" , "" ],
                        ["sculpin" , false , "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg" , "" ],
                        ["sapper" , false , "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/sapper.svg" , "" ],
                        ["vuepress" , false , "https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/VuePress.svg" , "" ],
                        ["hexo" , false , returnWorldVectorLogo("hexo") , "" ],
                        ["middleman" , false , returnWorldVectorLogo("middleman") , "" ],
                        ["docusaurus" , false , returnVectorLogo("docusaurus") , "" ],
                        ["gitbook" , false , returnVectorLogo("gitbook") , "" ],
                        ["astro" , false , returnWorldVectorLogo("astro") , "" ],
                        
                        ["unity" , false , returnOriginalIcon("unity") , "222c37" ], // others
                        ["unreal engine" , false , returnJsdelivrDevicons("unrealengine") , "" ],
                        ["zapier" , false , returnWorldVectorLogo("zapier") , "" ],
                        ["ifttt" , false , returnOriginalIcon("ifttt") , "" ],
                        ["linux" , false , returnOriginalIcon("linux") , "" ],
                        ["git" , false , returnOriginalIcon("git") , "" ],
                        ["arduino" , false , returnOriginalIcon("arduino") , "" ],
                        ["raspberrypi" , false , returnOriginalIcon("raspberrypi") , "" ],
                        ["adobe illustrator" , false , returnVectorLogo("adobe_illustrator") , "" ], 
                        ["adobe photoshop" , false , returnPlainIcon("photoshop") , "" ], 
                        ["adobe xd" , false , returnPlainIcon("xd") , "" ], 
                        ["figma" , false , returnOriginalIcon("figma") , "" ],
                        ["sketch" , false , returnOriginalIcon("sketch") , "" ],
                        ["invision" , false , returnVectorLogo("invisionapp") , "" ],
                        ["framer" , false , returnVectorLogo("framer") , "" ],
                        ["matlab" , false , returnOriginalIcon("matlab") , "e16737" ],
                        ["postman" , false , returnVectorLogo("getpostman") , "" ], 
                        ["canva" , false , returnOriginalIcon("canva") , "" ],],
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
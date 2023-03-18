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
                "title":"🖥️ \tTech Stack",
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
                        ["backbone.js" , false , returnOriginalIcon("backbonejs") , "194ee0" ],
                        ["bootstrap" , false , returnOriginalIcon("bootstrap") , "553c7b" ],
                        ["vuetify" , false , returnOriginalIcon("vuetify") , "41b883" ],
                        ["sass" , false , returnOriginalIcon("sass") , "a53b70" ],
                        ["redux" , false , returnOriginalIcon("redux") , "6b12c4" ],
                        ["webpack" , false , returnOriginalIcon("webpack") , "1c78c0" ],
                        ["babel" , false , returnOriginalIcon("babel") , "d1c711" ],
                        ["qt" , false , returnOriginalIcon("qt") , "00b841" ],
                        ["gulp" , false , returnPlainIcon("gulp") , "db4446" ],
                        ["tailwindcss" , false , returnPlainIcon("tailwindcss") , "3fb3e0" ],
                        ["ember.js" , false , returnOriginalWordmarkIcon("ember") , "FFF4F3" ],
                        ["angular" , false , returnOriginalIcon("angularjs") , "b52e31" ],
                        ["pug" , false , returnWorldVectorLogo("pug") , "a86454" ],
                        ["materialize" , false , "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" , "f57171" ],
                        ["bulma" , false , returnPlainIcon("bulma") , "33b8a6" ],
                        ["gtk" , false , "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg" , "de351f" ],
                        ["wxwidgets" , false , "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg" , "2c3a9c" ],
                        
                        ["node.js" , false , returnOriginalIcon("nodejs") , "3c873a" ], // backend development
                        ["spring" , false , returnOriginalIcon("spring") , "58ab49" ],
                        ["express" , false , returnOriginalIcon("express") , "626361" ],
                        ["nginx" , false , returnOriginalIcon("nginx") , "009639" ],
                        ["graphql" , false , returnPlainIcon("graphql") , "e10098" ],
                        ["nestjs" , false , returnPlainIcon("nestjs") , "ed1354" ],
                        ["apache kafka" , false , returnWorldVectorLogo("kafka") , "3b3b3b" ],
                        ["apache solr" , false , returnWorldVectorLogo("solr") , "D9411E" ],
                        ["rabbitmq" , false , returnWorldVectorLogo("rabbitmq") , "ff7221" ],
                        ["apache hadoop" , false , returnWorldVectorLogo("hadoop") , "d9d62b" ],
                        ["openresty" , false , "https://openresty.org/images/logo.png" , "54b051" ],
                        
                        ["android" , false , returnOriginalIcon("android") , "32DE84" ], // mobile app development
                        ["flutter" , false , returnOriginalIcon("flutter") , "42A5F5" ],
                        ["xamarin" , false , returnOriginalIcon("xamarin") , "378fdb" ],
                        ["ionic" , false , returnOriginalIcon("ionic") , "498aff" ],
                        ["nativescript" , false , returnWorldVectorLogo("nativescript") , "1b4fbf" ],
                        ["react native" , false , returnOriginalIcon("react") , "61dbfb" ],
                        ["apache cordova" , false , returnVectorLogo("apache_cordova") , "505052" ],
                        
                        ["tensorflow" , false , returnOriginalIcon("tensorflow") , "FFA800" ], // ia / ml
                        ["pytorch" , false , returnOriginalIcon("pytorch") , "e04410" ],
                        ["pandas" , false , returnOriginalIcon("pandas") , "0b0638" ],
                        ["opencv" , false , returnOriginalIcon("opencv") , "3bbd2d" ],
                        ["seaborn" , false , "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" , "4455ad" ],
                        ["scikit learn" , false , "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" , "2b6fc2" ],
                        
                        ["mongodb" , false , returnOriginalIcon("mongodb") , "4db33d" ], // database
                        ["mysql" , false , returnOriginalIcon("mysql") , "00758f" ],
                        ["postgresql" , false , returnOriginalIcon("postgresql") , "0064a5" ],
                        ["redis" , false , returnOriginalIcon("redis") , "7a0c00" ],
                        ["oracle" , false , returnOriginalIcon("oracle") , "f80000" ],
                        ["apache couchdb" , false , returnOriginalIcon("couchdb") , "bd2626" ],
                        ["sqlite" , false , returnOriginalIcon("sqlite") , "3867d6" ],
                        ["apache cassandra" , false , returnWorldVectorLogo("cassandra") , "1287b1" ],
                        ["hive" , false , "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" , "d6c618" ],
                        ["realm" , false , "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg" , "4B5AC0" ],
                        ["mariadb" , false , returnWorldVectorLogo("mariadb") , "1d2845" ],
                        ["cockroachdb" , false , returnWorldVectorLogo("cockroachdb") , "3b8f33" ],
                        ["elasticsearch" , false , returnWorldVectorLogo("elasticsearch") , "2f9e76" ],
                        ["microsoft sql server" , false , "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" , "cc1d1d" ],
                        
                        ["d3.js" , false , returnOriginalIcon("d3js") , "e37430" ], // data visualization
                        ["grafana" , false , returnOriginalIcon("grafana") , "f58822" ],
                        ["chart.js" , false , "https://www.chartjs.org/media/logo-title.svg" , "e85858" ],
                        ["canvasjs" , false , "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg" , "288a27" ],
                        ["kibana" , false , returnVectorLogo("elasticco_kibana") , "cc2bb4" ],
                        
                        ["docker" , false , returnOriginalIcon("docker") , "384d54" ], //  devops
                        ["jenkins" , false , returnOriginalIcon("jenkins") , "335061" ],
                        ["google cloud" , false , returnOriginalIcon("googlecloud") , "0F9D58" ],
                        ["kubernetes" , false , returnPlainIcon("kubernetes") , "123786" ],
                        ["amazon aws" , false , returnOriginalWordmarkIcon("amazonwebservices") , "FF9900" ],
                        ["gnu bash" , false , returnOriginalIcon("bash") , "2b2a36" ],
                        ["microsoft azure" , false , returnOriginalIcon("azure") , "007FFF" ],
                        ["vagrant" , false , returnOriginalIcon("vagrant") , "2a44b8" ],
                        ["travisci" , false , returnVectorLogo("travis-ci") , "802121" ],
                        ["circleci" , false , returnPlainIcon("circleci") , "3a3c42" ],
                        
                        ["django" , false , returnPlainIcon("django") , "092e20" ], // frameworks
                        [".net" , false , returnOriginalIcon("dot-net") , "945db7" ], 
                        ["electron" , false , returnOriginalIcon("electron") , "011c3d" ],
                        ["symfony" , false , returnOriginalWordmarkIcon("symfony") , "232324" ],
                        ["laravel" , false , returnVectorLogo("laravel") , "fb503b" ],
                        ["codeigniter" , false , returnPlainIcon("codeigniter") , "dd4814" ],
                        ["ruby on rails" , false , returnPlainIcon("rails") , "cc0000" ], 
                        ["flask" , false , returnOriginalIcon("flask") , "444444" ],
                        ["quasar" , false , "https://cdn.quasar.dev/logo/svg/quasar-logo.svg" , "263238" ],
                        
                        ["firebase" , false , returnPlainIcon("firebase") , "FFA000" ], // baas
                        ["appwrite" , false , returnOriginalIcon("appwrite") , "de316d" ],
                        ["aws amplify" , false , "https://docs.amplify.aws/assets/logo-dark.svg" , "fc9221" ],
                        ["heroku" , false , returnPlainIcon("heroku") , "6762a6" ],
                        
                        ["cypress" , false , "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" , "454545" ], //testing
                        ["selenium" , false , returnOriginalIcon("selenium") , "23a30a" ],
                        ["jest" , false , returnPlainIcon("jest") , "6b345a" ],
                        ["mocha" , false , returnPlainIcon("mocha") , "967969" ],
                        ["puppeteer" , false , returnVectorLogo("pptrdev") , "18a367" ],
                        ["karma" , false , returnOriginalIcon("karma") , "06c498" ],
                        ["jasmine" , false , returnPlainIcon("jasmine") , "8a3d9c" ],
                        
                        ["gatsby" , false , returnVectorLogo("gatsbyjs") , "663399" ], // static site generators
                        ["gridsome" , false , returnWorldVectorLogo("gridsome") , "53ad70" ],
                        ["hugo" , false , returnOriginalIcon("hugo") , "eb36cc" ],
                        ["jekyll" , false , returnWorldVectorLogo("jekyll") , "ffe59d" ],
                        ["next.js" , false , returnOriginalIcon("nextjs") , "262526" ],
                        ["nuxt.js" , false , returnOriginalIcon("nuxtjs") , "41b883" ],
                        ["eleventy" , false , "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg" , "313331" ],
                        ["scully" , false , "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg" , "51a34d" ],
                        ["sculpin" , false , "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg" , "575a66" ],
                        ["sapper" , false , "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/sapper.svg" , "349b9e" ],
                        ["vuepress" , false , "https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/VuePress.svg" , "42b883" ],
                        ["hexo" , false , returnWorldVectorLogo("hexo") , "127ae3" ],
                        ["middleman" , false , returnWorldVectorLogo("middleman") , "d1b038" ],
                        ["docusaurus" , false , returnVectorLogo("docusaurus") , "45ba49" ],
                        ["gitbook" , false , returnVectorLogo("gitbook") , "4c68e6" ],
                        ["astro" , false , returnWorldVectorLogo("astro") , "464647" ],
                        
                        ["unity" , false , returnOriginalIcon("unity") , "222c37" ], // others
                        ["unreal engine" , false , returnJsdelivrDevicons("unrealengine") , "282829" ],
                        ["zapier" , false , returnWorldVectorLogo("zapier") , "5f6c72" ],
                        ["ifttt" , false , returnOriginalIcon("ifttt") , "ff4400" ],
                        ["linux" , false , returnOriginalIcon("linux") , "ffcc33" ],
                        ["git" , false , returnOriginalIcon("git") , "f1502f" ],
                        ["arduino" , false , returnOriginalIcon("arduino") , "00979C" ],
                        ["raspberrypi" , false , returnOriginalIcon("raspberrypi") , "c7053d" ],
                        ["adobe illustrator" , false , returnVectorLogo("adobe_illustrator") , "bfb034" ], 
                        ["adobe photoshop" , false , returnPlainIcon("photoshop") , "18152E" ], 
                        ["adobe xd" , false , returnPlainIcon("xd") , "46034a" ], 
                        ["figma" , false , returnOriginalIcon("figma") , "00d47b" ],
                        ["sketch" , false , returnOriginalIcon("sketch") , "f9a52c" ],
                        ["invision" , false , returnVectorLogo("invisionapp") , "323a45" ],
                        ["framer" , false , returnVectorLogo("framer") , "026396" ],
                        ["matlab" , false , returnOriginalIcon("matlab") , "e16737" ],
                        ["postman" , false , returnVectorLogo("getpostman") , "ef5b25" ], 
                        ["canva" , false , returnOriginalIcon("canva") , "6a3be4" ],],
                "active":false,
                "align":"left",
                "logo-type":"Flat"
        },
        "social":{
                "title":"🌏 \tConnect with me",
                "value":{
                        "facebook":["https://facebook.com/" , "" , "0165E1"],
                        "instagram":["https://instagram.com/" , "" , "E1306C"],
                        "twitter":["https://twitter.com/" , "" , "1DA1F2"],
                        "linkedin":["https://www.linkedin.com/in/" , "" , "0072b1"],
                        "reddit":["https://www.reddit.com/user/" , "" , "FF4500"],
                        "discord":["https://discord.gg/" , "" , "5865F2"],
                        "github":["https://github.com/" , "" , "1c1e21"],
                        "youtube":["https://www.youtube.com/@" , "" , "FF0000"],
                        "stackoverflow":["https://stackoverflow.com/users/" , "" , "ff7a03"],
                        "quora":["https://www.quora.com/profile/" , "" , "B92B27"],
                        "hackerrank":["https://www.hackerrank.com/" , "" , "00c489"],
                        "hackerearth":["https://www.hackerearth.com/@" , "" , "121336"],
                        "medium":["https://medium.com/@" , "" , "1c1c1f"],
                        "kaggle":["https://www.kaggle.com/" , "" , "2fa9c4"],
                        "codepen":["https://codepen.io/" , "" , "272829"],
                        "leetcode":["https://leetcode.com/" , "" , "db8b1a"],
                        "dribbble":["https://dribbble.com/" , "" , "ea4c89"],
                        "pinterest":["https://www.pinterest.com/" , "" , "E60023"],
                        "tiktok":["https://www.tiktok.com/@" , "" , "ff0050"],
                        "twitch":["https://www.twitch.tv/" , "" , "6441a5"],
                        "behance":["https://www.behance.net/" , "" , "1769ff"],
                        "dev.to":["https://dev.to/" , "" , "242323"]
                },
                "active":false,
                "align":"left",
                "logo-type":"flat"
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
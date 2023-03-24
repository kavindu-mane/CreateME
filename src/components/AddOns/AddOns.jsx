import React from 'react'
import { useData } from '../Providers/DataProvider';
import AddOnsTitle from './AddOnsTitle';
import GithubReadmeStatsSettingd from './GithubReadmeStatsSettings';
import GithubStreakStatsSettings from './GithubStreakStatsSettings';
import GithubTrophySettings from './GithubTrophySettings';
import ProfileViewCounterSetting from './ProfileViewCountSetting';

const AddOns = () => {
    const[data , setData] = useData()
    const userName = data["username"]

    const getColor = () => {
        return data["profile-views"]["color"].toLowerCase()
    }

    const getStyle = () => {
        return data["profile-views"]["logo-type"].toLowerCase().replaceAll(" " ,"-")
    }

    const getTheme = (key) => {
        return  data[key]["theme"].toLowerCase().replaceAll(" " ,"-")
    }

    const getOptions = (opt) => {
        return data["readme-stats"][opt]
    }

    const getOptionsStreak = (opt) => {
        return data["streak-stats"][opt]
    }

    const getOptionsTropy = (opt) => {
        return data["profile-trophy"][opt]
    }

    const getLayout = () => {
        return data["readme-stats"]["compact"] ? "&layout=compact":""
    }

    const getActiveStatus = (key1 , key2) => {
        return data[key1][key2]
    }

    const saveUrl = (event , key1 , key2 ) => {
        const Url = event.target.src
        setData({...data , [key1] : {...data[key1] , [key2]:Url}})
    }

    const setActionStatus = (key1 , key2) => {
        const newValue =  !data[key1][key2]
        setData({...data , [key1] : {...data[key1] , [key2] : newValue}})
    }

    const checkBoxes = (key1 , key2 , title) => {
        return (
            <div className="d-flex align-items-center justify-content-center mt-3">
                <input type={"checkbox"} className= {"form-check-input m-0" } style={{cursor:"pointer"}}
                checked = {getActiveStatus(key1 , key2)} onChange = {() => setActionStatus(key1 , key2)}/>
                <span className='m-0 addons-author'>&ensp; {title} </span>
            </div>
        )
    }

    const returnWakaStats = (key) => {
        return (`"${data["waka-stats"][key] ? "True" : "False"}"`)
    }

    const getDefaultTime = (index) => {
        return data["waka-stats"]["time"][index]
    }

    const setTime = (event , index) => {
        const newValue = data["waka-stats"]["time"]
        newValue[index] = parseInt(event.target.value)
        setData({...data , "waka-stats" : {...data["waka-stats"] , "time":newValue}})
    }

    const returnYml = () => {
        return(`name: Waka Readme

on:
    schedule:
        - cron: '${getDefaultTime(1)} ${getDefaultTime(0)} * * *'
    workflow_dispatch:
jobs:
    update-readme:
        name: Update Readme with Metrics
        runs-on: ubuntu-latest
        steps:
          - uses: ${userName}/waka-readme-stats@master
            with:
                WAKATIME_API_KEY: \${{ secrets.WAKATIME_API_KEY }}
                GH_TOKEN: \${{ secrets.GH_TOKEN }}
                SHOW_LINES_OF_CODE: ${returnWakaStats("SHOW_LINES_OF_CODE")}
                SHOW_TOTAL_CODE_TIME: ${returnWakaStats("SHOW_TOTAL_CODE_TIME")}
                SHOW_PROFILE_VIEWS: ${returnWakaStats("SHOW_PROFILE_VIEWS")}
                SHOW_COMMIT: ${returnWakaStats("SHOW_COMMIT")}
                SHOW_DAYS_OF_WEEK: ${returnWakaStats("SHOW_DAYS_OF_WEEK")}
                SHOW_LANGUAGE: ${returnWakaStats("SHOW_LANGUAGE")}
                SHOW_OS: ${returnWakaStats("SHOW_OS")}
                SHOW_PROJECTS: ${returnWakaStats("SHOW_PROJECTS")}
                SHOW_TIMEZONE: ${returnWakaStats("SHOW_TIMEZONE")}
                SHOW_EDITORS: ${returnWakaStats("SHOW_EDITORS")}
                SHOW_LANGUAGE_PER_REPO: ${returnWakaStats("SHOW_LANGUAGE_PER_REPO")}
                SHOW_SHORT_INFO: ${returnWakaStats("SHOW_SHORT_INFO")}`
        )
    }

    const downloadYml = () => {
        const link = document.createElement('a')
        const file = new Blob([returnYml()] , {type:"text/plain"})
        link.href = URL.createObjectURL(file)
        link.download = "Coding-stats-update.yml"
        link.click()
        URL.revokeObjectURL(link.href)
    }

    return ( 
        <React.Fragment>
             <h3 className='ps-3 m-0 my-3 f-raleway fw-light'>Add-ons</h3>

            {/* visitors counter */}
            <AddOnsTitle title = "GitHub Profile Views Counter" repo = "https://github.com/antonkomarev/github-profile-views-counter"
            dev = "Anton Komarev" acc = "https://github.com/antonkomarev"/>

            <ProfileViewCounterSetting/>

            <div className="d-flex justify-content-center">
                <img src={`https://komarev.com/ghpvc/?username=${userName}&color=${getColor()}&style=${getStyle()}`} alt={userName} id="visitor-count" onLoad={(event) => saveUrl(event , "profile-views" , "link")}/>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-sm-6">
                    {checkBoxes("profile-views" , "active" , "Add visitors count")}    
                </div>
                <div className="col-12 col-sm-6">
                    {checkBoxes("profile-views" , "center" , "Center visitors count")}
                </div>
            </div>
            <hr/>

            {/* github readme stats */}
            <AddOnsTitle title = "GitHub README Stats" repo = "https://github.com/anuraghazra/github-readme-stats"
            dev = "Anurag Hazra" acc = "https://github.com/anuraghazra"/>
            
            <GithubReadmeStatsSettingd/>

            <div className="d-flex justify-content-center">
                <img src={`https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true&theme=${getTheme("readme-stats")}&hide_border=${getOptions("hide-border")}&include_all_commits=${getOptions("include-all")}&count_private=${getOptions("private")}`} 
                alt={userName} style={{maxWidth:"95%"}} id="github-stats" onLoad={(event) => saveUrl(event , "readme-stats" , "stats-link")}/>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&langs_count=8${getLayout()}&theme=${getTheme("readme-stats")}&hide_border=${getOptions("hide-border")}`} 
                alt={userName} style={{maxWidth:"95%"}} id="github-toplang" onLoad={(event) => saveUrl(event , "readme-stats" , "lang-link")}/>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-sm-6">
                     {checkBoxes("readme-stats" , "stats-active" , "Add stats card")}
                </div>
                <div className="col-12 col-sm-6">
                    {checkBoxes("readme-stats" , "lang-active" , "Add languages card")}
                </div>
            </div>
            <hr/>

            {/* github readme streak stats */}
            <AddOnsTitle title = "GitHub README Streak Stats" repo = "https://github.com/DenverCoder1/github-readme-streak-stats"
            dev = "Jonah Lawrence" acc = "https://github.com/DenverCoder1"/>

            <GithubStreakStatsSettings/>

            <div className="d-flex justify-content-center mt-3">
                <img src={`https://streak-stats.demolab.com/?user=${userName}&theme=${getTheme("streak-stats")}&hide_border=${getOptionsStreak("hide-border")}`} 
                alt={userName} style={{maxWidth:"95%"}} id="github-streak" onLoad={(event) => saveUrl(event , "streak-stats" , "link")}/>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-sm-6">
                    {checkBoxes("streak-stats" , "active" , "Add streak stats")}    
                </div>
                <div className="col-12 col-sm-6">
                    {checkBoxes("streak-stats" , "center" , "Center streak stats")}
                </div>
            </div>
            <hr/>

            {/* github profile trophy */}
            <AddOnsTitle title = "GitHub Profile Trophy" repo = "https://github.com/ryo-ma/github-profile-trophy"
            dev = "Ryota Sakamoto" acc = "https://github.com/ryo-ma"/>

            <GithubTrophySettings/>

            <div className="d-flex justify-content-center mt-3">
                <img src={`https://github-profile-trophy.vercel.app/?username=${userName}&theme=${getTheme("profile-trophy")}&no-frame=${getOptionsTropy("hide-border")}&no-bg=${getOptionsTropy("no-bg")}&margin-w=2&column=-1`} 
                alt={userName} style={{maxWidth:"95%"}} id="github-trophy" onLoad={(event) => saveUrl(event , "profile-trophy" , "link")}/>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-sm-6">
                    {checkBoxes("profile-trophy" , "active" , "Add profile trophy")}    
                </div>
                <div className="col-12 col-sm-6">
                    {checkBoxes("profile-trophy" , "center" , "Center profile trophy")}
                </div>
            </div>
            <hr/>

            {/*waka readme stats */}
            <AddOnsTitle title = "Waka README Stats" repo = "https://github.com/anmol098/waka-readme-stats"
            dev = "Anmol Singh" acc = "https://github.com/anmol098"><span>&ensp;( Github action )</span></AddOnsTitle>

            <h5 className='ms-3 mt-3'>How to use :</h5>
            <ul className='ms-5'>
                <li>Go to <a href="https://github.com/anmol098/waka-readme-stats" className='text-decoration-none' target={"_blank"} rel="noreferrer">waka README stats</a> repo and fork it.</li>
                <li>Head over to <a href="https://wakatime.com" className='text-decoration-none' target={"_blank"} rel="noreferrer">https://wakatime.com</a> and create an account.</li>
                <li>Get your WakaTime API Key from your <a href="https://wakatime.com/settings/account" className='text-decoration-none' target={"_blank"} rel="noreferrer">Account Settings in WakaTime</a>.</li>
                <li>Get a <a href="https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token" className='text-decoration-none' target={"_blank"} rel="noreferrer">GitHub Access Token</a>
                 with a <code>repo</code> and <code>user</code> scope </li>
                <li>Go to actions secrets and variables on <a href={`https://github.com/${userName}/${userName}/settings/secrets/actions`} className='text-decoration-none' target={"_blank"} rel="noreferrer">your profile repo</a>.
                Save those as the following in the <code>Repo Secrets</code>.</li>
                <ul>
                    <li>WakaTime API Key as <code>WAKATIME_API_KEY = &lt;your wakatime API Key&gt;</code></li>
                    <li>GitHub Personal Access Token as <code>GH_TOKEN=&lt;your github access token&gt;</code> </li> 
                </ul>
                <li>Choose flags you need.</li>
                <ul className='list-unstyled ps-1 ps-md-5'>
                    {Object.keys(data["waka-stats"]).slice(0,12).map((key ,i) => {
                        return (<li key={i} className="d-flex">{checkBoxes("waka-stats" , key , key.replaceAll("_" , " "))}</li>)
                    })}
                </ul>
                <li className='mt-3'>Change schedule time &ensp;
                        <input type="number" name="hour" id="hour" min={0} max={23} style={{width:"50px"}} 
                        className="rounded ps-1" defaultValue={getDefaultTime(0)} onChange={(event)=> setTime(event , 0)}/>&ensp;<b>:</b>&ensp;
                        <input type="number" name="min" id="min" min={0} max={59} style={{width:"50px"}} 
                        className="rounded ps-1" defaultValue={getDefaultTime(1)} onChange={(event)=> setTime(event , 1)}/> &ensp;UTC
                </li>
                <li className='mt-2'>Go to profile repo and create a folder named <code>.github</code> and create <code>workflows</code> folder inside it if it doesn't exist.</li>
                <li>Download below <code>yml</code> file and upload it to <code>workflows</code> folder</li>
                <li>Now you can commit and wait for run automatically, but you can also trigger to run it 
                    to see the result now. Just go to the <code>Actions</code> in your repo and select your 
                    <code>Profile Readme Development Stats</code> workflow and click in <code>Run workflow</code>. Now wait for a minute or two and you 
                    will see your changes.</li>
            </ul>

            <div className='p-2 download-yml rounded mx-0 mx-md-5 mt-4'>
                <pre className='ps-0 ps-md-5'>{returnYml()}</pre>
                <button className='btn btn-primary btn-sm ms-1 mb-1' onClick={downloadYml}><i>Download yml</i></button>
            </div>

            {checkBoxes("waka-stats" , "active" , "Add waka stats")}
            <hr />
            

        </React.Fragment>
     );
}
 
export default AddOns;
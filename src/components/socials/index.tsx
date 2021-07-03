import * as React from 'react'
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
import { ExternalLink } from '../Link'
import QuestionHelper from '../QuestionHelper'
import styled, { ThemeContext } from 'styled-components'
import discordIcon from './discord.svg'
import darkDiscordIcon from './discord-dark.svg'
import twitterIcon from './twitter.svg'
import darkTwitterIcon from './twitter-dark.svg'
import telegramIcon from './telegram.svg'
import darkTelegramIcon from './telegram-dark.svg'
import redditIcon from './reddit.svg'
import darkRedditIcon from './reddit-dark.svg'
import mediumIcon from './medium.svg'
import darkMediumIcon from './medium-dark.svg'
import youtubeIcon from './youtube.svg'
import darkYoutubeIcon from './youtube-dark.svg'
import githubIcon from './github.svg'
import darkGithubIcon from './github-dark.svg'
import twitchIcon from './twitch.svg'
import darkTwitchIcon from './twitch-dark.svg'

const Socials = () => {
    const theme = React.useContext(ThemeContext)

    const SocialWrapper = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    `

    return (
        <SocialWrapper>
            <QuestionHelper text="Twitter">
                <ExternalLink id={`analytics-nav-link`} href={'https://twitter.com/snowgecoin'} target="_blank">
                    <img src={twitterIcon} alt="twitter logo" height={18} width={18} />
                </ExternalLink>
            </QuestionHelper>
            <QuestionHelper text="Telegram">
                <ExternalLink id={`analytics-nav-link`} href={'http://t.me/snowgecoin'} target="_blank">
                    <img src={telegramIcon} alt="telegram logo" height={18} width={18} />
                </ExternalLink>
            </QuestionHelper>
            <QuestionHelper text="Discord">
                <ExternalLink id={`analytics-nav-link`} href={'https://discord.gg/qy3ymqazeJ'} target="_blank">
                    <img src={discordIcon} alt="discord logo" height={18} width={18} />
                </ExternalLink>
            </QuestionHelper>
            <QuestionHelper text="Reddit">
                <ExternalLink id={`analytics-nav-link`} href={'https://www.reddit.com/r/SnowgeCoin/'} target="_blank">
                    <img src={redditIcon} alt="reddit logo" height={18} width={18} />
                </ExternalLink>
            </QuestionHelper>
            <QuestionHelper text="Medium">
                <ExternalLink id={`analytics-nav-link`} href={'https://snowgecoin.medium.com'} target="_blank">
                    <img src={mediumIcon} alt="medium logo" height={18} width={18} />
                </ExternalLink>
            </QuestionHelper>
            <QuestionHelper text="Youtube">
                <ExternalLink
                    id={`analytics-nav-link`}
                    href={'https://www.youtube.com/channel/UCYXES0sbHwh6xvwA6sRtONQ'}
                    target="_blank"
                >
                    <img src={youtubeIcon} alt="youtube logo" height={18} width={18} />
                </ExternalLink>
            </QuestionHelper>
            <QuestionHelper text="Github">
                <ExternalLink id={`analytics-nav-link`} href={'https://github.com/snowgecoin'} target="_blank">
                    <img src={githubIcon} alt="github logo" height={18} width={18} />
                </ExternalLink>
            </QuestionHelper>
            <QuestionHelper text="Twitch">
                <ExternalLink id={`analytics-nav-link`} href={'https://twitch.tv/snowgegaming'} target="_blank">
                    <img src={twitchIcon} alt="twitch logo" height={18} width={18} />
                </ExternalLink>
            </QuestionHelper>
            {/*
            <Tooltip title="Github" enterDelay={600}>
                <IconButton aria-label="Github" href="https://github.com/snowgecoin" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    {theme.isDark
                      ? <img src={githubIcon} alt='twitter logo' height={18} width={18}/>
                      : <img src={darkGithubIcon} alt='twitter logo' height={18} width={18}/>}
                </IconButton>
            </Tooltip>
            <Tooltip title="Twitch" enterDelay={600}>
                <IconButton aria-label="Twitch" href="https://twitch.tv/snowgegaming" target="_blank"
                            style={{color: '#FFFFFF'}}>
                    {theme.isDark
                      ? <img src={twitchIcon} alt='twitter logo' height={18} width={18}/>
                      : <img src={darkTwitchIcon} alt='twitter logo' height={18} width={18}/>}
                </IconButton>
            </Tooltip> */}
        </SocialWrapper>
    )
}

export default Socials

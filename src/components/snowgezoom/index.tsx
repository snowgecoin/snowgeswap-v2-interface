import * as React from 'react'
import { ExternalLink } from '../Link'
import QuestionHelper from '../QuestionHelper'
import styled, { ThemeContext } from 'styled-components'

const SnowgeZoom = () => {
    const theme = React.useContext(ThemeContext)

    const ZoomWrapper = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    `

    return (
        <ZoomWrapper>
            <img src="" />
        </ZoomWrapper>
    )
}

export default SnowgeZoom

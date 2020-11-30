import { Button, Icon } from '@material-ui/core'
import React, { useState } from 'react'
import {
    FacebookShareButton, TelegramShareButton, TwitterShareButton,
    ViberShareButton, VKShareButton, WhatsappShareButton,
    TelegramIcon, FacebookIcon, TwitterIcon,
    ViberIcon, VKIcon, WhatsappIcon
} from 'react-share'
import styles from '../../css/Footer.module.css'


export default function Share(props) {
    let [buttonsStyle, setButtonStyle] = useState(-50)
    const shareButtons = () => {
        setButtonStyle(buttonsStyle === -50 ? buttonsStyle = 0 : buttonsStyle = -50)
    }
    return (
        <>
            <Button
                variant="outlined"
                color="default"
                endIcon={<Icon>share</Icon>}
                size='small'
                onClick={shareButtons}
                className={styles.share}
            >
                {props.localization.share[props.lang]}
            </Button>
            <div className={styles.shareButtons} style={{ left: buttonsStyle }} >
                <FacebookShareButton url='https://weather-6db65.web.app'>
                    <FacebookIcon size={40} />
                </FacebookShareButton>

                <TelegramShareButton url='https://weather-6db65.web.app'>
                    <TelegramIcon size={40} />
                </TelegramShareButton>

                <TwitterShareButton url='https://weather-6db65.web.app'>
                    <TwitterIcon size={40} />
                </TwitterShareButton>

                <VKShareButton url='https://weather-6db65.web.app'>
                    <VKIcon size={40} />
                </VKShareButton>

                <ViberShareButton url='https://weather-6db65.web.app'>
                    <ViberIcon size={40} />
                </ViberShareButton>

                <WhatsappShareButton url='https://weather-6db65.web.app'>
                    <WhatsappIcon size={40} />
                </WhatsappShareButton>
            </div>
        </>
    )
}
import React from 'react'
import RefreshIcon from '@material-ui/icons/Refresh'
import { CircularProgress, IconButton } from '@material-ui/core'


export default function Refresh({ id, refresh, isRefresh, refreshId, lang }) {
    const refreshWeather = () => {
        refresh(id, lang)
    }

    return (
        <IconButton onClick={refreshWeather}>
            {
                isRefresh && refreshId === id
                    ? <CircularProgress size={20} color='inherit' />
                    : <RefreshIcon />
            }
        </IconButton>
    )
}
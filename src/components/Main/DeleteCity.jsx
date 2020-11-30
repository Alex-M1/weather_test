import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel'
import { IconButton } from '@material-ui/core'
import styles from '../../css/Main.module.css'

function DeleteCity({ deleteCity }) {
    return (
        <div className={styles.closeButton}>
            <IconButton onClick={deleteCity}>
                <CancelIcon />
            </IconButton>
        </div>
    )
}

export default DeleteCity
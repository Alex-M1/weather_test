import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { IconButton, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles } from '@material-ui/core/styles'




export default function AddCity(props) {
    const classes = useStyles(),
        [isSearch, setSearch] = useState('none'),
        [inputValue, setInputValue] = useState(''),
        [display, setDisplay] = useState('flex')

    const openSearch = () => {
        if (isSearch === 'none') setSearch('block')
        else {
            setSearch('none')
            if (inputValue !== '') props.addCity(inputValue, props.lang)
            setInputValue('')
        }
    }

    const inputChange = e => setInputValue(e.target.value)
    const getKey = e => {
        if (e.keyCode === 13) {
            setSearch('none')
            if (inputValue !== '') props.addCity(inputValue, props.lang)
            setInputValue('')
        }
    }

    useEffect(() => {
        props.path === '/'
            ? setDisplay('flex')
            : setDisplay('none')
    }, [props.path])
    return (
        <div className={classes.root} style={{ display: display }}>
            <div className={classes.search} style={{ display: isSearch }}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    onKeyDown={getKey}
                    onChange={inputChange}
                    placeholder="Search…"
                    value={inputValue}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <IconButton color='inherit' onClick={openSearch}>
                <AddIcon style={{ fontSize: 30 }} />
            </IconButton>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '14ch',
            },
        },
    },
}))
import ClientProvider, {ClientContext} from "../../context/ClientProvider.jsx";
import {useContext} from "react";
import {Box, InputBase, TextField} from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

const ClientProfile = function () {
    return (
        <ClientProvider>
            <Body/>
        </ClientProvider>
    )
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },'& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))

const Body = function () {
    const client = useContext(ClientContext)

    return (
        <Box>
            <h3>Client Profile</h3>
            <div>
                <RedditTextField id="first-name" label="First Name" variant="standard" value={client.firstName}/>
                <RedditTextField id="last-name" label="Last Name" variant="standard" value={client.lastName}/>
            </div>
            <div>
                <RedditTextField id="address" label="Street Address" variant="standard" value={client.address.street}/>
            </div>
            <div>
                <RedditTextField id="city" label="City" variant="standard" value={client.address.city}/>
            </div>
            <div>
                <RedditTextField id="state" label="State" variant="standard" value={client.address.state}/>
            </div>
            <div>
                <RedditTextField id="zip-code" label="Zip Code" variant="standard" value={client.address.zip}/>
            </div>
        </Box>
    )
}

export default ClientProfile
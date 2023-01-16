import { Alert, AlertIcon } from "@chakra-ui/react";


function ConfirmAlert({ userData }) {
    return(
    <Alert status='success' variant='subtle'>
        <AlertIcon />
        {userData}
    </Alert>
    )
}

export default ConfirmAlert;

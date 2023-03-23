import { Alert,AlertIcon,AlertDescription,AlertTitle } from "@chakra-ui/react";

function Error404(){
    return(
        <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Error-404</AlertTitle>
  <AlertDescription>This page is not found</AlertDescription>
</Alert>
    )
}

export default Error404;
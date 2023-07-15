import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function ErrorComponent() {
  return (
    <Alert status='error' w={"container.sm"} position={"fixed"} left={"57%"}  className='mt-20 h-14 rounded-md shadow-xl'>
      <AlertIcon/>
      <h1>Error can't get api call</h1>
    </Alert>
  )
}

export default ErrorComponent

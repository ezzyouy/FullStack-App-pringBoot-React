import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const StyledContainer = styled('div')({
  '& > *': {
    margin: theme => theme.spacing(1)
  }
})

export default function User () {
  const paperStyles = { padding: '50px 20px', width: 600, margin: '20px auto' }
  const [name, setName] = useState('')
	const [address, setAddress] = useState('')
	
	const handleClick = (e) => {
		e.preventDefault()
		const user = { name, address }
		console.log(user);
	}
  return (
    <Paper elevation={3} style={paperStyles}>
      <h1 style={{ color: 'blue' }}>
        <u>Add User</u>
      </h1>
      <StyledContainer>
        <Grid
          container
          direction={'column'}
          spacing={3}
          columnGap={2}
          rowSpacing={2}
          columnSpacing={1}
        >
          <form noValidate autoComplete='off'>
            <Grid item>
              <TextField
                fullWidth
                id='outlined-basic'
                label='User Name'
                variant='outlined'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                id='outlined-basic'
                label='User Address'
                variant='outlined'
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={handleClick}>
                Add
              </Button>
            </Grid>
          </form>
        </Grid>
      </StyledContainer>
    </Paper>
  )
}

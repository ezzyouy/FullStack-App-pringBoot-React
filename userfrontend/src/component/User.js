import * as React from 'react'
import TextField from '@mui/material/TextField'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const StyledContainer = styled('div')({
  '& > *': {
    margin: theme => theme.spacing(1)
  }
})

export default function User () {
  const paperStyles = { padding: '50px 20px', width: 600, margin: '20px auto' }
  return (
    <Paper elevation={3} style={paperStyles}>
      <StyledContainer>
        <Grid
          container
          direction={'column'}
          spacing={1}
          columnGap={2}
          rowSpacing={2}
          columnSpacing={2}
        >
          <form noValidate autoComplete='off'>
            <Grid item>
              <Item>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label='User Name'
                  variant='outlined'
                />
              </Item>
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                id='outlined-basic'
                label='User Address'
                variant='outlined'
              />
            </Grid>
          </form>
        </Grid>
      </StyledContainer>
    </Paper>
  )
}

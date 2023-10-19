import { Container, Typography, AppBar, Grow, Grid } from '@material-ui/core'
import memoriesImage from './assets/images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memoriesImage} alt='memories' height={100} />
        <Grow in>
          <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={10}>
              <Grid item xs={12} sm={7}> <Posts /> </Grid>
              <Grid item xs={12} sm={4}> <Form /> </Grid>
            </Grid>
          </Container>
        </Grow>
      </AppBar>
    </Container>
  )
}

export default App

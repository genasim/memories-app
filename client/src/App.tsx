import { Container, Typography, AppBar, Grow, Grid } from '@material-ui/core'
import memoriesImage from './assets/images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const classes = createStyles()

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memoriesImage} alt='memories' style={{ width: 60, height: 60 }} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={10}>
            <Grid item xs={12} sm={7}> <Posts /> </Grid>
            <Grid item xs={12} sm={4}> <Form /> </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App

const createStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));
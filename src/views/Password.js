// Dependecies
import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

// Components
import Card from '../components/Card';
import Form from '../components/Form';

// Hook
import useCard from '../hooks/useCard';

function Password(props) {

  const { passwords, search } = useCard();

  return (
    <Container >
    <Grid container spacing={3}>
      <Grid item xs>
        <Grid>
            
            <div>
              <SearchIcon onClick={(e)=> search(e.target.value)}/>
            </div>
            
            <InputBase className="search_password" placeholder="Search" />
            
            <IconButton aria-label="add" className="">
              <AddIcon fontSize="small" />
            </IconButton>
        </Grid>

        
        <div className="card_password">
          {passwords ? passwords.map((password) => (
            <Card account={password.account || "Account name"} user={password.name} />
          )): ''}
        </div>
      </Grid>

      <Grid item xs={8}>
       
        <Form/>

        <IconButton aria-label="delete" className="" variant="square">
          <DeleteIcon fontSize="small" /> 
        </IconButton>

        
      </Grid>

    </Grid>
  </Container>
  );
}
 
export default Password;

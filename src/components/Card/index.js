// Dependecies
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

// Images
import imageDefault from '../../styles/images/default.jpg';

function CardComponent(props) {
  const { account, user } = props;
  return (
    <Card >
        <CardContent>
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <CardMedia
                    image={imageDefault}
                    title="Default"
                />
            </Grid>

            <Grid item xs={6}>
                <h1> {account} </h1>
                <h2> {user}  </h2>
            </Grid>
        </Grid>
        </CardContent>
    </Card>
  );
}

CardComponent.propTypes = {
  account: PropTypes.string,
  user: PropTypes.string,

};

CardComponent.defaultProps = {
    account: '',
    user: '',
};

export default CardComponent;

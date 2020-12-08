import React from 'react'
import {Card , CardImg , CardTitle ,CardBody ,CardSubtitle ,CardText } from 'reactstrap';
import { baseUrl } from '../shared/baseURL';
import {Loading} from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
function RenderCard(props){
    console.log("these are the props");
    console.log(props);

    if(props.isLoading)
    return <Loading />

    else if (props.err)
    {
        return (
            <div>
                <h4>{props.err}</h4>
            </div>
        )
    }
    else 
    return(
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <Card>
            <CardImg src= {baseUrl +  props.item.image} alt={props.item.name} />
            <CardBody>
            <CardTitle>{props.item.name}</CardTitle>
            {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null }
            <CardText>{props.item.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
    );

}

function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} err={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading = {props.promosLoading} err={props.promosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leadersloading} err={props.leaderErrMess}/>
                </div>
            </div>
        </div>
    );
}
export default Home;
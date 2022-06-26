import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishddetail extends Component{
    constructor(props){
        super(props);
        
    }

    renderComment(comments){
        console.log("comments:");
        console.log(comments);
        if(comments === null){
            return (
                <div className='container'>
                    <h4>Comments</h4>
                </div>
            );
        }
        else{
            const com=comments.map((komment)=>{
                console.log("komment:");
                console.log(komment);
                return(<li key={comments.id} className="list-item">
                    {komment.comment}<br/><br/>
                    --{komment.author} , {new Date(komment.date).toLocaleDateString(
                        'en-US',
                        {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        })}<br/><br/>
                    </li>);
            });
            console.log('com:');
            console.log(com);
            return(
                <div className='container m-1'>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {com}
                    </ul>
                </div>
            );
        }
    }

    render(){
        console.log("this.props.dish:");
        console.log(this.props.dish);
        if(this.props.dish === null){
            return (
                <div></div>
            );
        }
        else{
            const comments= this.renderComment(this.props.dish.comments);
            return(
                <>
                <div className="col-12 col-md-5 m-1">
                    {/* {console.log(this.props)}
                    {console.log('HI!')} */}
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <ul className='list-unstyled'>{comments}</ul>
                </div>
                </>
            );
        }
    }
}

export default Dishddetail;
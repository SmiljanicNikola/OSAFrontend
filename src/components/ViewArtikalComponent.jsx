import React, { Component } from 'react'
import ArtikalService from '../services/ArtikalService';

class ViewArtikalComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            artikli: {}
        }
        
}

componentDidMount(){
    ArtikalService.getArtikalById(this.state.id).then(res => {
        this.setState({artikli: res.data});
    });
}

nadjiId = (e) =>{
    e.preventDefault();
    let prodavac = {s:this.state.artikli.prodavac}//Samo za ispis
        console.log('prodavac => ' + JSON.stringify(this.state.artikli.prodavac));      
}
  
cancel(){
    this.props.history.push('/artikli');
}

    render(){
        return(
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">View artikal details</h2>
                    <div className="text-center" style={{marginTop:"8px"}}>

                        <div className="row">
                            <label style={{color:"black", fontWeight:"600"}}>Naziv artikla : {this.state.artikli.naziv}</label>
                        </div><br/>

                        <div className="row">
                            <label style={{color:"black", fontWeight:"600"}}>Opis artikla : {this.state.artikli.opis}</label>
                        </div><br/>

                        <div className="row">
                            <label style={{color:"black", fontWeight:"600"}}>Cena artikla : {this.state.artikli.cena}</label>
                        </div><br/>

                        <div className="row" width="100%">
                            <label style={{color:"black", fontWeight:"600"}}>Putanja do slike : {this.state.artikli.putanjaSlike}</label>
                        </div><br/>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewArtikalComponent
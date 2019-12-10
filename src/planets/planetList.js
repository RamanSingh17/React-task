import React from 'react';
import planetService from '../_services/planet.service'
import './planet.css';
class PlanetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planetList: [], 
            filteredList:[],
            searchText:"" ,
            planetData:{}          
        };
        this.handleChange = this.handleChange.bind(this);
    }    
    componentWillMount(){
        this.getAllPlanets();
    }
    getAllPlanets(){
        planetService.getPlanets().then(data=>{ 
            this.setState({planetList:data.results,filteredList:data.results});
        });       
    }
    handleChange(e) {        
        const { name, value } = e.target;
        this.setState({ [name]: value },()=>this.filterPlanet());       
    }
    
    filterPlanet(){        
        let {planetList,searchText}=this.state;
        let list= planetList.filter(planet=>{
           return planet.name.toLowerCase().includes(searchText)
        });
        this.setState({filteredList:list});
    }
    getPlanet(planetName){
        let {filteredList}=this.state;
        let _palnetData= filteredList.find(planet=>{
            return planet.name===planetName;
        });
        this.setState({planetData:_palnetData});
    }
    render() { 
        const {filteredList,searchText}=this.state;       
        return (        
            <div className="section">
                <div className="section-page">
                <div className="row">
                    <div className="col-4">
                        <div className="search-section">
                        <input type="text" className="form-control" placeholder="Search" name="searchText" value={searchText} onChange={this.handleChange} />
                        {filteredList.map(planet => (                            
                            <div className="planetData col-sm-9" key={planet.name} onClick={()=>this.getPlanet(planet.name)}>
                                <strong>{planet.name}</strong>
                            </div>                           
                        ))}
                        </div> 
                    </div>
                    <div className="col-8">
                        {/* <planet planetData></planet> */}
                    </div>
                </div>
                </div>            
            </div>                   
        );
    }
}


export default PlanetList;
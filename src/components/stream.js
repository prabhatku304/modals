import React ,{Component} from 'react';
import flv from 'flv.js'
class VideoStream extends Component{
    constructor(props){
        super(props);
        this.refVideo = React.createRef();
        this.state={
            isLoad:false
        }
    }
 
    componentDidMount(){
        this.setState({isLoad:true})
        this.isBuild();
    }
    componentDidUpdate(){
     this.isBuild();
    }
    isBuild=()=>{
      
     
        if( !this.state.isLoad ){
            return;
        }
        
        this.player =  flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/${this.props.match.params.id}.flv`
        })
       
        this.player.attachMediaElement(this.refVideo.current);
        this.player.load();
        this.player.play();
      
      
      
        
    }
    render(){
       
      console.log(this.state.isLoad);
      console.log(this.refVideo)
        return(
            <div>
                <video ref={this.refVideo} style={{width:"50%"}} controls />
                hello
            </div>
        )
    
    }
}

export default VideoStream;
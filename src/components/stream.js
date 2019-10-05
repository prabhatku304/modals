import React ,{Component} from 'react';
import flv from 'flv.js'
class VideoStream extends Component{
    constructor(props){
        super(props);
        this.refVideo = React.createRef();      // createRef() for video element
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
    componentWillUnmount(){
        this.player.destroy();             // destroy after url changing
    }
    isBuild=()=>{
      
     
        if( !this.state.isLoad ){
            return;
        }
        
        this.player =  flv.createPlayer({                  // flv have method to give server 8000 port
            type:'flv',
            url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
       
        this.player.attachMediaElement(this.refVideo.current);  // to set what type of video
        this.player.load();    // to loading
        this.player.play();    // to play
      
      
      
        
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
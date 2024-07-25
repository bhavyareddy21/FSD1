function CardUI(props){
    const width = 70;
    return(
        <div>
            <div className ="card" style = {{width :'250px'}}>
            <img src= "/profile demo.png" alt="User avatar" width={width} style={{border:'1px solid #FF0000',borderRadius:'20px'}}/>
            
            <div className="card-body">
                <h3>{props.user.name}</h3>
                <h4>{props.user.col}</h4>
                <h4>{props.user.branch}</h4>
                <h4>{props.user.year}</h4>
                <button type="button" className="btn btn-primary">Button</button>
            </div>
            </div>
        </div>

    );
}
export default CardUI;


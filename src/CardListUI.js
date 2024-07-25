import CardUI from './CardUI';
function CardListUI(){
    const userObject = {name:"Jonny", col: "SVECW", branch:"AIML",year:"3"};
    const usersList = ["name1","name2","name3","name4","name5","name6","name7","name8"]
    return(
        <div style = {{display:'flex',flexWrap:'wrap'}}>{
            usersList.map(
                (userListItem,index)=>(<CardUI key={index}
            program = {userListItem}
            user = {userObject}
            userFromArray = {userListItem}/>)
            )
        }

        </div>
    );
}
export default CardListUI;
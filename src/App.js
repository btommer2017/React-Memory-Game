import React, {
  Component
} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Rules from "./components/Rules";
import Score from "./components/Score";
import friends from "./friends.json";
import underscore from "underscore";

const totalScore = [];
let highScore = 0;
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  idChecker = id => {
    if (totalScore.includes(id)) {
      alert(`Sorry game over, your final score was ` + totalScore.length)
      totalScore.length = 0
    } else totalScore.push(id);

    if (totalScore.length >= highScore) {
          highScore = totalScore.length
       };
    if (totalScore.length === 12) {
          alert("Great Job, You Got All 12!!");
          totalScore.length=0
       };
    
       // use these logs below to check for functionality of the idChecker()
    // console.log;(id);
    // console.log(totalScore);
    // console.log(totalScore.length);
    // console.log(this.state.friends);
    this.setState({friends})
  }

  // Map over this.state.friends and render a randomly selected FriendCard component for each friend object
  render() {
    return ( <Wrapper >
      <Title > He-Man Villains!</Title>    
      <Rules>Click on all the villains without clicking the same one twice!</Rules>
      <Score > Current Score: {totalScore.length}</Score> 
      <Score > High Score: {highScore} </Score> 
      {
        underscore.shuffle(this.state.friends).map(friend => ( <
          FriendCard idChecker = {
            this.idChecker
          }
          id = {friend.id}
          alt = {friend.name}
          image = {friend.image}
          />
        ))
      } 
      </Wrapper>
    );
  }
}

export default App;
import NavButtons from "./components/Button";
import Review from "./components/Review";
import {useState,useEffect,useReducer} from "react";
import reviews from "./data";
function reducer(state,action) {
  console.log(state,action)
}
function App() {
  console.log(useReducer(reducer,'current state is true'))

  const [reviewers, setReviewers] = useState(reviews)
  const [index, setIndex] = useState(0)
  const [person,setPerson]=useState({})
  useEffect(()=>{
  // console.log('useEffect')
  // setReviewers(reviews)
  setPerson(reviewers[index])
  },[index])

  //nav
  const nxtClick=()=>{
    if(index<reviewers.length-1){
      setIndex(index+1)
    }else{
      setIndex(0)
    }

  }
  const prevClick=()=>{
    if(index>0){
      setIndex(index-1)
    }else{
      setIndex(reviewers.length-1)
    }
  }
  const surpriseMe=()=>{
    const randomIndex=Math.floor(Math.random() * reviewers.length)
    setIndex(randomIndex)
  }
  return (
    <main>
      {/* head */}
      <h1 className="title">Our Reviews</h1>
      <div className='underline'></div>
      <section className="container">
      {/* reviews */}
      <article>
        <Review person={person} ></Review>
      </article>
      <NavButtons nxtClick={nxtClick} prevClick={prevClick} surpriseMe={surpriseMe}/>
      </section>
    </main>
  )
}

export default App;

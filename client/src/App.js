
import './App.css';
import NavBar from './components/Navbar.jsx'
import {BrowserRouter,Route,Switch,useHistory} from "react-router-dom"
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import {useEffect,createContext,useReducer,useContext} from "react"
import {reducer,initialState} from "./reducers/userReducer"
import UserProfile from "./components/screens/UserProfile"
import Subscribes from './components/screens/Subscribes'


export const UserContext = createContext()

function Routing () {

     const history= useHistory()

     const {state,dispatch} = useContext(UserContext)

     useEffect(()=>{

      const user =JSON.parse(localStorage.getItem("user"))

      if(user){
        dispatch({type:"USER",payload:user})
        //history.push("/")
      }
      else{
        history.push("/signin")
      }
     },[])

     return(
     <Switch>

      <Route exact path="/">

      <Home/>

     </Route>


     <Route path="/signin">

     <Signin/>

     </Route>


    <Route path="/signup">

    <Signup/>

    </Route>


   <Route exact path="/profile">

   <Profile/>

   </Route>



   <Route path="/create">

   <CreatePost/>

   </Route>



   <Route path="/profile/:userid">

   <UserProfile/>

   </Route>



   <Route path="/myfollowingspost">

   <Subscribes/>

   </Route>


     </Switch>
     )
}

function App() {
     const [state,dispatch]= useReducer(reducer,initialState)
  return (

    <UserContext.Provider value={{state,dispatch}} >  
    <BrowserRouter>  
    
       <NavBar/>

       <Routing/>
    
    
    
    
    </BrowserRouter>
    </UserContext.Provider>
    
     
  );
}

export default App;

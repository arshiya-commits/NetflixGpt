import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO_URL,SIGN_OUT, supported_language } from '../utils/constants';
import { toggleGptSearch } from '../utils/GptSlice';
import { useSelector } from 'react-redux';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const user = useSelector((state) => state.user);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
    const handleSignout=()=>{
        signOut(auth).then(() => {
          // Sign-out successful.
           navigate("/")
        }).catch((error) => {
          // An error happened.
          navigate("/error")
        });
    }
    useEffect(()=>{
       const unsubsribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              navigate('/browse')
              
            } else {
           dispatch(removeUser())
           navigate('/')
        
            }
          });
          //this is called when the component unmounts 
          return ()=>unsubsribe() 
      },[])
      const handleGptSearch=()=>{
        //toggle gpt search
        dispatch(toggleGptSearch())
      }
      // handling the changes in the language
      const handleChangeLanguage=(e)=>{
       // console.log(e.target.value)
       dispatch(changeLanguage(e.target.value))
      }
      const showSearch=useSelector((store)=>store.gpt.showGptSearch)
      //store.name.initialstate
  return (
  <header className="fixed top-0 left-0 w-full px-4 py-3 md:px-6 md:py-4 flex justify-between items-center bg-gradient-to-b from-black via-transparent to-transparent z-50">
      {/* Logo */}
      <div>
        <img
          src={LOGO_URL}
          alt="Netflix Logo"
          className="w-32 md:w-44 object-contain"
        />
      </div>

      {/* Right-side buttons */}
      {user && (
        <div className="flex items-center space-x-4">
          {/* GPT Search Button */}
      <button
  onClick={handleGptSearch}
  className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
>
  {showSearch ? "Search Page" : "GPT Search"}
</button>
          {/* Sign Out */}
          <div className="flex items-center space-x-2">
            <img
              src={SIGN_OUT}
              alt="Sign Out Icon"
              className="w-6 h-6 md:w-7 md:h-7"
            />
            <button
              onClick={handleSignout}
              className="text-white font-medium text-sm hover:underline"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

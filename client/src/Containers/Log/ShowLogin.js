import { useSelector } from 'react-redux'

function ShowLogin({children}) {
    const {user} = useSelector((state)=> state.auth)
    if(!user || !user.userEmail){
        return null
    }else{
        return  children
    }
}

export default ShowLogin
function persistUser(props){
    const user = JSON.parse(localStorage.getItem("user"));
    props.logUser({usertype: user.usertype, userId: user.userId, firstlogin: user.firstlogin});
}



function getLocation(){
    const parts = window.location.href.split("/");
    return parts[parts.length -1]
}

export { persistUser, getLocation }; 
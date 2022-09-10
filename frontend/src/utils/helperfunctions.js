import axios from 'axios';


function persistUser(props){
    const user = JSON.parse(localStorage.getItem("user"));
    props.logUser({usertype: user.usertype, userId: user.userId, firstlogin: user.firstlogin});
}



function getLocation(){
    const parts = window.location.href.split("/");
    return parts[parts.length -1]
}


async function uploader(file){
    console.log('up up');
    let uploadfile;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)

    try {
        uploadfile = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
        console.log(uploadfile);
        
    } catch (err) {
        console.log(err);
    }
    

    return uploadfile;

}


export { persistUser, getLocation, uploader }; 
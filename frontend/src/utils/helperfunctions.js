import axios from 'axios';

// keep user in store after a page reload
function persistUser(props){
    const user = JSON.parse(localStorage.getItem("user"));
    props.logUser({usertype: user.usertype, userId: user.userId, firstlogin: user.firstlogin});
}

// get the location of the current page
function getLocation(){
    const parts = window.location.href.split("/");
    return parts[parts.length -1]
}

// upload file to cloudinary
async function uploader(file){
    let uploadfile;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)

    try {
        const upload = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
        uploadfile = await upload.data.secure_url;
    } catch (err) {
        console.log(err);
    }
    
    return uploadfile;
}


export { persistUser, getLocation, uploader }; 
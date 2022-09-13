import axios from 'axios';

// keep user in store after a page reload
function persistUser(props){
    const user = JSON.parse(localStorage.getItem("user"));
    props.logUser({usertype: user.usertype, userId: user.userId, firstlogin: user.firstlogin});
}

// get the location of the current page
function getLocation(criteria){
    let parts;
    if(criteria){
        parts = window.location.href.split(criteria);
    }else{
        parts = window.location.href.split("/");
    }
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

function isAuthenticated(){
    return window.localStorage.getItem("user") && document.cookie.split("; ").find(item => item.startsWith("user"));
}

async function fetchData(location){

    let data;
    
    try {
        const fetching = await axios({ url: `http://127.0.0.1:23556/api/v1/${location}`, method: "get"})
        if (fetching.status === 200){
            data = await fetching.data
        }
    } catch (error) {
        console.error(error);
    }
    return data
}


export { persistUser, getLocation, uploader, fetchData , isAuthenticated }; 
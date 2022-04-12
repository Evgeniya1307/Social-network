import React from 'react'
import preloader from "../../../users/images/preloader.svg";

type PreloaderType = {

}
const Preloader = (props: PreloaderType) => {
    return <div>  <img src={preloader} /></div>
}

export default Preloader;

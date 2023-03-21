import React from 'react'
import "./Arrow/Arrow.css"

const Arrow = () => {
    return (
        <a href="#page2">
            <button id="pg2_down">
                <div class="arrows flex flx_clm" style = {{display :"flex", flexDirection:"column"}}>
                    <div id="arrow1" class="arrow flex" style={{display:"flex"}}>

                        <div id="arr1-1"></div>
                        <div id="arr1-2"></div>
                    </div>
                    <div id="arrow2" class="arrow flex" style={{display:"flex"}}>
                        <div id="arr2-1"></div>
                        <div id="arr2-2"></div>
                    </div>
                    <div id="arrow3" class="arrow flex" style={{display:"flex"}}>
                        <div id="arr3-1"></div>
                        <div id="arr3-2"></div>
                    </div>
                </div>

            </button>

        </a>
    )
}

export default Arrow
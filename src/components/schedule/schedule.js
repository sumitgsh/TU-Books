
import React from 'react'
import "./schedule.css";

export default function schedule() {
    return (
        <div class="container p-5 mt-5">
        <div class="schedule__arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
            <path fill="#4B1936" class="path" stroke="#000000" d="M 750 300 Q 550 100 350 300 Q 150 500 0 300/"></path>
          </svg>
        </div>

        <div class="row">
            <div class="col-12">
            <p class="text-center" id="heading">How it works</p>
            </div>
        </div>
      
        <div class="row schedule__working">
            <div class="col-md-4 stage p-1">
                <div class="circle"><div class="no">1</div></div>
                <div class="stage-content text-center">
                    <h4 class="">Type Your Book Name</h4>
                    <div class="stage__subcontent">
                        Don't worry our Bot will guide you
                    </div>
                </div>
            </div>
            <div class="col-md-4 stage p-1">
                <div class="circle"><div class="no">2</div></div>
                <div class="stage-content">
                    <h4 class="text-center">Filter Your Search</h4>
                    <div class="stage__subcontent">
                        Be very specific use our filter's
                    </div>
                </div>
            </div>

            <div class=" col-md-4 stage p-1">
                <div class="circle"><div class="no">3</div></div>
                <div class="stage-content">
                    <h4 class="text-center">Get Your Book</h4>
                    <div class="stage__subcontent">
                        Use our Book's to Read or Download
                    </div>
                </div>
            </div>
            
        </div>

    </div>

    )
}

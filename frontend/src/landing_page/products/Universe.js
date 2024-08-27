import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1 className='mb-3'>The Zerodha Universe</h1>
                <p className='mb-5' >Extend your trading and investment experience even further with our partner platforms.</p>
                <div className='col-4 p-3'>
                    <img src='media/smallcaseLogo.png'/>
                    <p className='text-small text-muted'>Themantic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/streakLogo.png' style={{width:"40%"}}/>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/sensibullLogo.svg'/>
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/zerodhaFundHouse.png' style={{width:"50%"}}/>
                    <p className='text-small text-muted'>Asset Managment</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/goldenpiLogo.png'/>
                    <p className='text-small text-muted'>Bonds trading Platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/dittoLogo.png' style={{width:"40%"}}/>
                    <p className='text-small text-muted'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%", margin:"0 auto"}}>
                    Signup Now
                </button>
            </div>
        </div>
     );
}

export default Universe;
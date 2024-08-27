import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket </h1>
                    <br/>
                    <input placeholder='Eg.how do i activate F&O, why is my order getting rejected.'/>
                    <br/>
                    <a href='' style={{marginRight:"45px"}}>Track acccount opening</a>
                    <a href='' style={{marginRight:"45px"}}>Track segment activation</a>
                    <a href='' style={{marginRight:"45px"}}>Intraday margins</a>
                    <a href='' style={{marginRight:"45px"}}>Kite user manual</a>
                </div>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href='' style={{lineHeight: "2.5"}}>Current Takeovers and Delisting</a></li>
                        <li><a href='' style={{lineHeight: "2.5"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                    
                </div>
            </div>
        </section>
     );
}

export default Hero;
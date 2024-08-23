import React from 'react'

const Plan = () => {
  return (
    <>
    <section className="plan" style={{width: "100%"}}>
        <div id="plan">
            <img style={{width:"378px", height: "220px"}} src="image/Sec07/콩돌밤돌.png" />
            <div className="plan-wrapper">
                <div className="personal-plan">
                    <div>
                        <h1>개인 플랜</h1>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p>1개월 (30일)</p>
                                <p>￦4,900</p>
                            </li>
                            <li>
                                <p>12개월 (365일)</p>
                                <p>￦19,900</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>추가 팩</h3>
                        <p>12개월 (365일)</p>
                        <p>￦39,900</p>
                    </div>
                </div>
                <div className="family-plan">
                    <div>
                        <h1>패밀리 플랜</h1>
                    </div>
                    <div>
                        <p>12개월 (365일)</p>
                        <p>￦37,900</p>
                    </div>
                    <div>
                        <h3>추가 팩</h3>
                        <p>12개월 (365일)</p>
                        <p>￦74,900</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Plan;
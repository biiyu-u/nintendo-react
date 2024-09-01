import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="footer" style={{width: "100%"}}>
        <div id="footer">
            <p><Link to="https://www.nintendo.co.kr/common/account.html">이용약관</Link>| 개인정보처리방침</p>
            <p>고객지원 문의전화 : 1670-9900 (평일 오전 9시 30분~오후 5시 30분)</p>
            <p>※토/일/공휴일/회사 정기휴일 및 특별휴일 제외</p>
            <p>ⓒ 2006 Nintendo of Korea Co., Ltd. All Rights Reserved.</p>
            <p>상호명 : 한국닌텐도주식회사 대표자명 : 미우라 타카히로 사업자등록번호 : 120-87-03578</p>
        </div>
    </footer>
    </>
  )
}

export default Footer;
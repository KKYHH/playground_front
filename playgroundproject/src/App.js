/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import React from 'react';




function Home() {
  
  return (
    <div>
      <header>
    
        <nav>
          <div className='bar'>
            <div className="logo">Play</div>
            <div className="menu">
              <ul>
              <li><a href="#">PlayGround Q&A</a></li>
              <li><a href="#">실시간 인기게시물</a></li>
              <li><a href="#">사이드 프로젝트</a></li>
              <li><a href="#">채용정보</a></li>
              </ul>
            </div>
          </div>
          
          <div className='icon'>
            <ul>
              <li><a href='#'><i class="fa-solid fa-magnifying-glass"></i></a></li>
              <li><a href='#'><i class="fa-regular fa-comment-dots"></i></a></li>
              <li><a href='#'><i class="fa-regular fa-bell"></i></a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="body">
        
        <img src="./home2.jpg" alt="Example image" />
        </div>

        <div className="container">
          <div className="text">요즘 개발자들의 커뮤니티</div>
          <div className="text2">플레이 그라운드</div>
          <div className="text3">개발 트렌드부터 Q&amp;A,네트워킹까지</div>
        </div>

        <button className="start-button">지금 시작하기</button>

    </div>
  );
}

export default Home;



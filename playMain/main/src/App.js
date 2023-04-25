/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


// json 데이터 가져와서 사용하기 //


function App() {
  let [like,likeup] =useState(0);
  
  /* dock 박스 */
  const [showButtons, setShowButtons] = useState(false);
  const [boxFloating, setBoxFloating] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(true);
    setBoxFloating(true);
  };
  /* dock 박스 */



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


      <div id="news-feed">
        {/* 뉴스피드 박스 */}
        <div className="post">
          <div className="post-header">
            <img src="https://source.unsplash.com/random/50x50" alt="User profile picture" />
            <div>
              <h2>김용호</h2>
              <p>2 hours ago</p>
            </div>
          </div>

        <div className="post-content">
          <p>왜 안돼</p> <br></br>
            <img src="./TEST.jpeg" alt="Post image" height="500px" />
        </div>

        <div className='likeAct'>
          <p>좋아요 {like} </p><br></br>
        </div>

        <div className="post-footer">
            <div className='like'>
          <button><span onClick={()=>{likeup(like+1)}}><i class="fa-regular fa-heart"></i></span></button>
        </div>

        <div className='CSD'>
          <a href="#"><i class="fa-regular fa-message"></i></a>
          <a href="#"><i class="fa-solid fa-share-nodes"></i></a>
          <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
  </div>
</div>
        {/* 뉴스피드 박스 */}


         {/* 뉴스피드 박스 */}
          <div className="post">
          <div className="post-header">
            <img src="https://source.unsplash.com/random/50x50" alt="User profile picture" />
          <div>
            <h2>남민우</h2>
            <p>2 hours ago</p>
          </div>
          </div>
          
          <div className="post-content">
            <p>롤 검색해야지</p><br></br>
            <img src="./lol.jpeg" alt="Post image" height="500px" />
          </div>

          <div className="post-footer">
          <button><span onClick={()=>{likeup(like+1)}}>like</span></button>
            <a href="#">Comment</a>
            <a href="#">Share</a>
            
            <div className="container">
          <button className="button-class" onClick={handleButtonClick}>
          <i class="fa-solid fa-ellipsis-vertical"></i></button>
            {showButtons && (
            <div
            className={`button-box ${boxFloating ? "floating" : ""}`}
            onClick={() => setBoxFloating(false)}>
            <button className="edit-button">수정</button>
            <button className="delete-button">삭제</button>
            </div>
          )}
      </div> 
          </div>
        </div>
        {/* 뉴스피드 박스 */}

      
        </div>
      </div>
    </div>
  );
}

export default App;

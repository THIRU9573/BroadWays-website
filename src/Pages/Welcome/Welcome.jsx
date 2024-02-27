import React from 'react';
import './Welcome.css';
import image16 from '../../Images/image16.png';
import image30 from '../../Images/image30.png';
import image14 from '../../Images/image14.png';
import image19 from '../../Images/image19.png'
import image20 from '../../Images/image20.png'
import image21 from '../../Images/image21.png'
import image22 from '../../Images/image22.png'


function Welcome() {
  return (
    <div>
      <section>
        <div className="welcome">
          <h2>Welcome User Name!</h2>
        </div>
        <div className="mostlikes">
          <h3>Based on your Likes</h3>
          <div className="user-list">
            <li className="image-card">
              <img src={image16} alt="image16" />
              <div className="user-details">
                <h6>A Peak into Earth Home mysteries by Pavan</h6>
                <div className="user">
                    <img src={image30} alt="image30" />
                    <p>john barker</p>
                    <div className='likes'>
                        <i className="fa-regular fa-eye"></i>
                        <p>1.8K</p>   
                    </div>
                </div>
              </div>
            </li>
            <li className="image-card">
              <img src={image16} alt="image16" />
              <div className="user-details">
                <h6>A Peak into Earth Home mysteries by Pavan</h6>
                <div className="user">
                    <img src={image30} alt="image30" />
                    <p>john barker</p>
                    <div className='likes'>
                        <i className="fa-regular fa-eye"></i>
                        <p>1.8K</p>   
                    </div>
                </div>
              </div>
            </li>
            <li className="image-card">
              <img src={image16} alt="image16" />
              <div className="user-details">
                <h6>A Peak into Earth Home mysteries by Pavan</h6>
                <div className="user">
                    <img src={image30} alt="image30" />
                    <p>john barker</p>
                    <div className='likes'>
                        <i className="fa-regular fa-eye"></i>
                        <p>1.8K</p>   
                    </div>
                </div>
              </div>
            </li>
            <li className="image-card">
              <img src={image16} alt="image16" />
              <div className="user-details">
                <h6>A Peak into Earth Home mysteries by Pavan</h6>
                <div className="user">
                    <img src={image30} alt="image30" />
                    <p>john barker</p>
                    <div className='likes'>
                        <i className="fa-regular fa-eye"></i>
                        <p>1.8K</p>   
                    </div>
                </div>
              </div>
            </li>
          </div>
        </div>
        <div className="trending-today">
            <div className="card-catogiry">
                <i class="fa-solid fa-fire"></i>
                <h3>Trending Today</h3> 
            </div>
            <div className="card-container-wrapper">
                <div className="card-container">
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>   
                </div>
            </div>
        </div>
        <div className="trending-today">
            <div className="card-catogiry">
                <h3>Hot pics for You</h3> 
            </div>
            <div className="card-container-wrapper">
                <div className="card-container">
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>   
                </div>
            </div>
        </div>
        <div className="trending-today">
            <div className="card-catogiry">
                <h3>Latest Updates</h3> 
            </div>
            <div className="card-container-wrapper">
                <div className="card-container">
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>   
                </div>
            </div>
        </div>
        <div className="trending-today">
            <div className="card-catogiry">
                <h3>Just for you</h3> 
            </div>
            <div className="card-container-wrapper">
                <div className="card-container">
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>
                    <li className='card'>
                        <img src={image14} alt="image14" />
                        <p>Autobiographies that can convert you in...</p>
                    </li>   
                </div>
            </div>
        </div>
        <div className="right-list">
            <div className="wishlist">
                <div className="title">
                    <i class="fa-solid fa-bookmark"></i>
                    <h6>My Wishlist</h6>
                </div>
                <div className="wish-card">
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <button>View All<i class="fa-solid fa-angle-right"></i></button>
                </div>
                
            </div>
            <div className="article">
                <div className="title">
                    <i class="fa-solid fa-heart"></i>
                    <h6>Liked Article</h6>
                </div>
                <div className="wish-card">
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <button>View All<i class="fa-solid fa-angle-right"></i></button>
                </div>
                
            </div>
            <div className="article">
                <div className="title">
                    <i class="fa-solid fa-comment"></i>
                    <h6>Commented Article</h6>
                </div>
                <div className="wish-card">
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <li className="wishlist-card">
                        <img src={image16} alt="image16" />
                        <p>A Peak into Earth Home mysteries by Pavan</p>
                    </li>
                    <button>View All<i class="fa-solid fa-angle-right"></i></button>
                </div>
                
            </div>
            <div className="hot-categories">
                <h4>Hot Categories</h4>
                <div className="category">
                    <div className='list-style'>
                        <img src={image19} alt="image19" />
                        <h3>Entertainment</h3>
                    </div>
                    <div className='list-style'>
                        <img src={image20} alt="image20" />
                        <h3>Life Style</h3>
                    </div>
                    <div className='list-style'>
                        <img src={image21} alt="image21" />
                        <h3>Tech</h3>
                    </div>
                    <div className='list-style'>
                        <img src={image22} alt="image22" />
                        <h3>videos</h3>
                    </div>
                </div>                
            </div>
        </div>       
      </section>
    </div>
  );
}

export default Welcome;

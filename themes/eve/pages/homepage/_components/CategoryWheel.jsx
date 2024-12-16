import React, { useState, useRef, useEffect } from 'react';
import './CategoryWheel.scss';
import PropTypes from 'prop-types';


const categories = [
    { id: 1, name: '推荐',url:"recommend", image: '/games.svg' },
    { id: 2, name: '影音', url:"recommend",image: '/games.svg' },
    { id: 3, name: 'AI助手',url:"recommend", image: '/games.svg' },
    { id: 4, name: 'Google账号',url:"recommend", image: '/google-icon.svg' },
    { id: 5, name: '游戏',url:"recommend", image: '/games.svg' },
    { id: 6, name: '办公',url:"recommend", image: '/games.svg' },
    { id: 7, name: '软路由',url:"recommend", image: '/games.svg' },
    
];

function CategoryWheel({ url, name }) {

    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const wheelRef = useRef(null);
  
    const handleMouseDown = (e) => {
      setDragging(true);
      setStartX(e.pageX - wheelRef.current.offsetLeft);
      setScrollLeft(wheelRef.current.scrollLeft);
    };
  
    const handleMouseLeave = () => {
      setDragging(false);
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    const handleMouseMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      const x = e.pageX - wheelRef.current.offsetLeft;
      const walk = (x - startX) * 3; // 滚动速度
      wheelRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleClick = (category) => {
      // 处理点击分类图片查看商品的逻辑
      console.log(`查看分类 ${category.name} 的商品`);
    };
  
    return (
      <div
        className="category-wheel border-b-4"
        ref={wheelRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categories.map((category) => (
          <a href={
            category.url
          }>
            <div
              key={category.id}
              className="category-item flex flex-col justify-center items-center "
              onClick={() => handleClick(category)}
            >
              <img src={category.image} className=' w-20 h-20 my-2  shadow-md' alt={category.name} />
              <p>{category.name}</p>
            </div>
          </a>
        ))}
      </div>
    );
}

CategoryWheel.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string
};

CategoryWheel.defaultProps = {
  url: '',
  name: ''
};

export { CategoryWheel };

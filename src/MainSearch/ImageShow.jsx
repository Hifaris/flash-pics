import React, { useEffect, useState, useCallback } from 'react';
import MainPhoto from "../assets/cat.jpg";
import { useNavigate } from 'react-router-dom';
import photoStore from '../store/product-store';
import useAuthStore from '../store/auth-store';
import { Watermark } from "antd";
import Loading from '../component/Loading';

const ImageShow = () => {
  const getProduct = photoStore((state) => state.getProduct);
  const user = useAuthStore((state) => state.user);
  const allPhotos = photoStore((state) => state.allPhotos);
  const loading = photoStore((state) => state.loading);
  const products = photoStore((state) => state.products);
  const navigate = useNavigate();

  const [page, setPage] = useState(1); // Tracks the current page
  const limit = 8; // Fetch limit (e.g., 8 photos per page)

  // Initial fetch
  useEffect(() => {
    getProduct(page, limit);
  }, [page]);

  // Scroll event handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1); // Load the next page when scrolled near the bottom
    }
  }, []);

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, [handleScroll]);

  const hdlClick = (item) => {
    user?.role
      ? navigate(`/user/photo/${item.id}`)
      : navigate(`/photo/${item.id}`);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {loading && page === 1 ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-4 gap-3 mb-8 mt-5">
            {products?.map((el) => (
              <div key={el.id}>
                <Watermark content="Copy by Flash Pics" font={{ fontSize: 16 }}>
                  <img
                    src={el.url}
                    className="w-full h-auto rounded cursor-pointer hover:scale-105"
                    onClick={() => hdlClick(el)}
                  />
                </Watermark>
              </div>
            ))}
          </div>
        )}
        {loading && <p>Loading more photos...</p>}
      </div>
    </div>
  );
};

export default ImageShow;

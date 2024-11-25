import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import photoStore from "../store/product-store";
import useAuthStore from "../store/auth-store";
import { Watermark } from "antd";
import Loading from "../component/Loading";

const ImageShow = () => {
  const getProduct = photoStore((state) => state.getProduct);
  const allPhoto = photoStore((state) => state.allPhotos);
  const loading = photoStore((state) => state.loading);
  const products = photoStore((state) => state.products);

  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = useCallback(async () => {
    try {
      setIsFetching(true);
      await getProduct(page);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error loading photos:", error);
    } finally {
      setIsFetching(false);
    }
  }, [page]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      if (!isFetching) loadPhotos();
    }
  }, [isFetching, loadPhotos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = (item) => {
    const path = user?.role ? `/user/photo/${item.id}` : `/photo/${item.id}`;
    navigate(path);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && page === 1 ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((el) => (
            <div key={el.id} className="group relative">
              <Watermark content="Flash Pics" font={{ fontSize: 16 }}>
                <img
                  src={el.url}
                  alt="Photo"
                  className="w-full h-auto rounded cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => handleClick(el)}
                />
              </Watermark>
            </div>
          ))}
        </div>
      )}
      {isFetching && <Loading />}
    </div>
  );
};

export default ImageShow;

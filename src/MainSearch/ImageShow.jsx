import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Watermark, Pagination } from "antd";
import Loading from "../component/Loading";
import photoStore from "../store/product-store";
import useAuthStore from "../store/auth-store";

const ImageShow = () => {
  const getProduct = photoStore((state) => state.getProduct);
  const user = useAuthStore((state) => state.user);
  const loading = photoStore((state) => state.loading);
  const products = photoStore((state) => state.products);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 16;
  const totalPhotos = products?.length || 0;

  useEffect(() => {
    getProduct(currentPage);
  }, [currentPage, getProduct]);

  const hdlClick = (photoId) => {
    if (!photoId) {
      console.error("Photo ID is undefined", photoId);
      return;
    }
    console.log("Navigating to photo:", photoId);
    const path = user?.role ? `/user/photo/${photoId}` : `/photo/${photoId}`;
    navigate(path);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentPhotos = products?.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-5">
              {currentPhotos?.map((el) => (
                <div key={el.id} className="aspect-w-1 aspect-h-1">
                  <Watermark content="Copy by Flash Pics" font={{ fontSize: 16 }}>
                    <img
                      src={el.url}
                      alt="Photo"
                      className="w-full h-64 object-cover rounded cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => hdlClick(el.id)}
                    />
                  </Watermark>
                </div>
              ))}
            </div>

            {totalPhotos > pageSize && (
              <div className="flex justify-center mt-6">
                <Pagination
                  current={currentPage}
                  total={totalPhotos}
                  pageSize={pageSize}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  className="mb-8"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageShow;
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
  const pagination = photoStore((state) => state.pagination);
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(1); // Get first page on initial load
  }, []);

  const hdlClick = (item) => {
    user?.role ? navigate(`/user/photo/${item.id}`) : navigate(`/photo/${item.id}`);
  };

  const handlePageChange = (page, pageSize) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getProduct(page, pageSize);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 mt-5">
              {products?.map((el) => (
                <div key={el.id} className="aspect-w-1 aspect-h-1">
                  <Watermark content="Copy by Flash Pics" font={{ fontSize: 16 }}>
                    <img
                      src={el.url}
                      alt="Photo"
                      className="w-full h-64 object-cover rounded cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => hdlClick(el)}
                    />
                  </Watermark>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Pagination
                current={pagination.page}
                total={pagination.total}
                pageSize={pagination.pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
                className="mb-8"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageShow;
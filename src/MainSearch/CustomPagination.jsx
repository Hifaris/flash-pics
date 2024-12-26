const CustomPagination = ({ current, total, pageSize, onChange }) => {
    return (
      <div className="flex justify-center py-8">
        <Pagination
          current={current}
          total={total}
          pageSize={pageSize}
          onChange={onChange}
          showSizeChanger={false}
          showQuickJumper={true}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        />
      </div>
    );
  };
  
  export default CustomPagination;
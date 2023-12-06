// Tạo một mảng products để lưu trữ các đối tượng product bao gồm các thông tin: productId, productName, price, image, description, createdAt. Thực hiện các yêu cầu sau đây:
// Hiển thị danh sách sản phẩm
// Thêm mới sản phẩm vào trong mảng (Kiểm tra dữ liệu đầu vào, id của sản phẩm không được trùng. Nếu trùng thì báo cho người dùng biết là “Id không được phép trùng”, ngày thêm phải format đúng định dạng khi thêm mới)
// Tìm kiếm sản phẩm theo tên
// Sắp xếp sản phẩm tăng dần theo giá
// Lọc ra những sản phẩm có giá lớn hơn 100.000đ

const product = [];
/**
 * Thêm mới sản phẩm vào mã
 * Auth: LVT(05/12/2023)
 */
const handleAddProduct = () => {
  let productId = +prompt("Nhập id sản phẩm:");
  let productName = +prompt("Nhập tên sản phẩm:");
  let productPrice = +prompt("Nhập giá sản phẩm:");
  let productImage = +prompt("Nhập ảnh sản phẩm:");
  let productDescription = +prompt("Nhập chi tiết sản phẩm:");
  //   Tạo đối tượng product
  const newProduct = {
    productId: productId,
    productName: productName,
    productPrice: productPrice,
    productImage: productImage,
    productDescription: productDescription,
    createdAt: new Date().toISOString().split("T")[0],
  };
  // push đối tượng vào trong mảng
  products.push(newProducts);
};
/**
 * hiển thị danh sách sản phẩm
 * Auth: LVT(05/12/2023)
 */
const handleLoadData = () => {
  if (products.length === 0) {
    console.log("Không có sản phẩm nào");
  } else {
    products.forEach((item) => console.log(item));
  }
};
/**
 * Tìm kiếm sản phẩm theo tên
 * @returns  trả về sản phẩm nếu tìm thấy
 * Auth: LVT(05/12/2023)
 */
const handleSearchByNamet = () => {
  // Lấy tên sản phẩm từ client
  const searchValue = +prompt("Nhập tên sản phẩm cần tìm kiếm");
  // Tìm kiếm sản phẩm trong mảng
  const findProduct = product.find((pro) => pro.productName === searchValue);
  // kiểm tra kết quả trả về
  if (!findProduct) {
    return `Không tìm thấy sản phẩm ${searchValue}`;
  } else {
    return findProduct;
  }
};
/**
 * sắp xếp tăng dần hoặc giảm dần theo giá
 * @param {*} type
 * Auth: LVT(05/12/2023)
 */
const handleSortByPrice = (type) => {
  // Sắp xếp sản phẩm theo giá
  if (type === "down") {
    // Sắp xếp giảm dần
    products.sort((a, b) => {
      return b.price - a.price;
    });
  } else {
    // Sắp xếp tăng dần
    products.sort((a, b) => {
      return a.price - b.price;
    });
  }
  handleLoadData();
};
const handleFiterByPrice = () => {
  // Lọc các sản phẩm có giá lớn hoặc bằng 100000
  const filterProductByPrice = products.filter((pro) => pro.price >= 10000);
  // kiểm tra kết quả trả về
  if (filterProductByPrice.length === 0) {
    return "Không có sản phẩm nào";
  } else {
    return filterProductByPrice;
  }
};

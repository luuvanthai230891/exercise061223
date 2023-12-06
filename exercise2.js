// Tạo một mảng users, và xây dựng đối tượng user bao gồm các trường sau: userId, userName, gender, email, password, createdAt. Thực hiện các yêu cầu sau:
// Thêm mới user vào trong mảng (Kiểm tra định dạng email, mật khẩu phải lớn hơn 8 ký tự, format ngày tháng)
// Hiển thị danh sách user trong màn hình console.log()
// Thực hiện chức năng tìm kiếm user theo tên hoặc email
// Xây dựng tính năng đăng nhập. Thực hiện tìm kiếm thông tin user theo email và password. Nếu như thỏa mãn điều kiện thì hiển thị thông báo là “Đăng nhập thành công”. Nếu như sau email hoặc mật khẩu thì thông báo “Đăng nhập thất bại”

const users = [];
/**
 * validate địa chỉ email
 * @param {*} email email nhập từ phía client
 * @returns trả về 1 chuỗi định dạng nếu email hợp lệ
 * k trả về dữ liệu nếu email k hợp lệ
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
/**
 *
 * @param {*} email email lấy từ người dùng
 * @param {*} password mật khẩu lấy từ người dùng
 * @returns [] nếu dữ liệu hợp lệ, mảng các lỗi nếu dữ liệu k hợp lệ
 */
const validateData = (email, password) => {
  // gắn cờ để theo dõi trạng thái hợp lệ của dữ liệu
  let error = [];
  if (!validateEmail(email)) {
    error.push("email k đúng định dạng");
  }
  if (password.length < 8) {
    error.push("mật khẩu phải lớn hơn 8 ký tự");
  }
  if (error.length > 0) {
    return error;
  } else {
    return true;
  }
};
/**
 * Thêm mới dữ liệu
 * @returns
 */
const createUser = () => {
  //lấy dữ liệu từ phía client
  let userId = +prompt("Nhập Id của user:");
  let userName = prompt("Nhập tên:");
  let gender = prompt("Nhập giới tính");
  let address = prompt("Nhập địa chỉ");
  let email = prompt("Nhập địa chỉ email:");
  let password = prompt("Nhập mật khẩu:");

  // Tạo đối tượng user
  const newUser = {
    userId: userId,
    userName: userName,
    gender: gender,
    address: address,
    email: email,
    password: password,
    createdAt: new Date().toISOString().split("T")[0],
  };
  // Bắt validate dữ liệu đầu vào
  let isValid = validateDate(email, password);

  if (isValid.length > 0) {
    console.log(isValid);
  } else {
    // thêm đối tượng vào user
    users.push(newUser);
  }
};
/**
 * Hiển thị danh sách user
 *
 */

const handleLoadUser = () => {
  if (user.length === 0) {
    console.log("Chưa có tài khoản");
  } else {
    users.forEach((user) => console.log(user));
  }
};
/**
 * Tìm kiếm user theo tên
 * @param {*} userName Tên cần tìm kiếm lấy từ client
 * @returns trả về mảng rỗng nếu không tìm thấy, trả về mảng user nếu tìm thấy
 * Auth: LVT (05/12/23)
 */
const handleSearchUser = (userName) => {
  // tìm kiếm user trong mảng
  const findByUserName = users.filter((user) => user.userName === userName);
  // kiểm tra kết quả trả về
  if (findByUserName.length === 0) {
    return "Không tìm thấy kết quả";
  } else {
    return findByUserName;
  }
};

const handleLogin = (email, password) => {
  if (!email || !password) {
    return "Email và mật khẩu không được phép để trống";
  } else {
    // tìm kiếm user theo email
    const findUserByEmail = users.find((user) => user.email === email);
    if (!findUserByEmail) {
      return "Email hoặc mật khẩu không đúng";
    } else {
      if (
        findUserByEmail.email === email &&
        findUserByEmail.password === password
      ) {
        // chuyển trang
        return "đăng nhập thành công";
      } else {
        return "email hoặc mật khẩu không đúng";
      }
    }
  }
};

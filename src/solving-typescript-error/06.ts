//problem
// const productPrices = {
//   Apple: 1.2,
//   Banana: 0.5,
//   Orange: 0.8,
// };

//solution
const productPrices: Record<string, number> = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: string) => {
  return productPrices[productName];
};

// Lấy giá của sản phẩm "Apple"
const applePrice = getPrice("Apple");

// Kiểm tra nếu giá không rỗng thì in ra, ngược lại thông báo sản phẩm không tồn tại
if (applePrice !== undefined) {
  console.log(`Giá của sản phẩm "Apple" là: ${applePrice}`);
} else {
  console.log(`Sản phẩm "Apple" không tồn tại trong danh sách giá.`);
}
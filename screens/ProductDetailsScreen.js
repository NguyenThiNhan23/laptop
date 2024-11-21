// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import colors from '../constants/colors';
// import format from '../services/formatVND';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import Toast, { SuccessToast } from 'react-native-toast-message';
// import Toaster from '../components/ui/Toaster';
// import SpecificationsTable from '../components/products/SpecificationsTable';
// import Warranty from '../components/products/Warranty';
// import SimilarProducts from '../components/products/SimilarProducts';
// import { getProductById } from '../api/products/productsAPI';
// import { useRoute } from '@react-navigation/native';
// import Feather from '@expo/vector-icons/Feather';

// const toastConfig = {
//   success: (props) => (
//     <SuccessToast
//       {...props}
//       text1Style={{
//         fontSize: 25,
//         fontWeight: '700',
//       }}
//       text2Style={{
//         fontSize: 15,
//         fontWeight: '400',
//       }}
//     />
//   ),
//   successToast: ({ text1, props }) => <Toaster title={text1} type="success" />,
// };

// const ProductDetailScreen = () => {
//   const [product, setProduct] = useState(null);
//   const [similarProducts, setSimilarProducts] = useState([]);
//   const route = useRoute();
//   const scrollViewRef = useRef();

//   const productId = route.params?.productId || '6620f630caa5cd0b2111dd69';
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getProductById(productId);
//       setProduct(result.laptop);
//       setSimilarProducts(result.similarItems);
//     };

//     fetchData();
//   }, [productId]);
//   const navigation = useNavigation();
//   const onAddToCartHandler = () => {
//     Toast.show({
//       type: 'successToast',
//       text1: 'Thêm vào giỏ hàng thành công',
//     });
//   };

//   const scrollToTop = () => {
//     scrollViewRef.current.scrollTo({ y: 0, animated: true });
//   };

//   const handleSimilarProductPress = (id) => {
//     navigation.navigate('ProductDetails', { productId: id });
//     scrollToTop();
//   };

//   if (product == null) {
//     return <Text>Đang tải...</Text>;
//   }

//   return (
//     <>
//       <View style={styles.container}>
//         <ScrollView
//           ref={scrollViewRef}
//           contentContainerStyle={styles.scrollContainer}
//           bounces={false}
//           removeClippedSubviews={true}
//           decelerationRate="fast"
//         >
//           <View style={styles.backButtonContainer}>
//             <TouchableOpacity
//               style={styles.backButton}
//               onPress={() => {
//                 navigation.goBack();
//               }}
//             >
//               <AntDesign name="left" size={30} color={colors.primary} />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.imageContainer}>
//             <Image
//               source={{
//                 uri: product.imageUrl,
//               }}
//               style={styles.productImage}
//             />
//           </View>
//           <View style={styles.contentContainer}>
//             <Text style={styles.productTitle}>{product.name}</Text>
//             <View style={styles.priceContainer}>
//               <Text style={styles.rating}>
//                 <AntDesign name="star" size={24} color="#F7BD0D" />
//                 <AntDesign name="star" size={24} color="#F7BD0D" />
//                 <AntDesign name="star" size={24} color="#F7BD0D" />
//                 <AntDesign name="star" size={24} color="#F7BD0D" />
//                 <AntDesign name="star" size={24} color="#F7BD0D" />
//               </Text>
//               <Text style={styles.productStatus}>{product.status}</Text>
//             </View>

//             <View style={styles.priceContainer}>
//               <View style={styles.priceContainer}>
//                 <Text style={styles.currentPrice}>
//                   {format(
//                     product.price - product.price * (product.saleOff / 100)
//                   )}
//                 </Text>
//                 <Text style={styles.oldPrice}>{format(product.price)}</Text>
//               </View>
//               <Text style={styles.stockStatus}>Còn hàng</Text>
//             </View>
//             <View>
//               <Warranty />
//             </View>
//             <View style={styles.specContainer}>
//               <SpecificationsTable product={product} />
//             </View>
//           </View>
//           <SimilarProducts
//             similarProducts={similarProducts}
//             onProductPress={handleSimilarProductPress}
//           />
//         </ScrollView>
//         <View style={styles.cartContainer}>
//           <View>
//             <Text style={{ fontSize: 15, color: '#222' }}>Giá</Text>
//             <Text
//               style={{
//                 fontSize: 22,
//                 fontWeight: '700',
//                 color: colors['primary-700'],
//               }}
//             >
//               {format(product.price - product.price * (product.saleOff / 100))}
//             </Text>
//           </View>
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={onAddToCartHandler}
//           >
//             <Feather name="shopping-cart" size={24} color="#fff" />
//             <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Toast config={toastConfig} />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   backButtonContainer: {
//     paddingTop: 20,
//     paddingLeft: 20,
//     width: '100%',
//     marginTop: 20,
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     alignSelf: 'flex-start',
//   },
//   scrollContainer: {
//     paddingBottom: 80,
//   },
//   contentContainer: {
//     paddingHorizontal: 15,
//   },
//   imageContainer: {
//     width: '100%',
//     backgroundColor: '#fff',
//     height: 400,
//     alignItems: 'center',
//     borderBottomRightRadius: 180,
//     borderBottomLeftRadius: 180,
//     overflow: 'hidden',
//   },
//   productImage: {
//     width: '80%',
//     height: 350,
//     resizeMode: 'contain',
//   },
//   productTitle: {
//     marginTop: 15,
//     marginBottom: 20,
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   priceContainer: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   currentPrice: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: colors['primary-700'],
//     marginRight: 10,
//   },
//   oldPrice: {
//     fontSize: 18,
//     color: '#888',
//     textDecorationLine: 'line-through',
//   },
//   stockStatus: {
//     fontSize: 16,
//     color: 'green',
//     marginVertical: 10,
//   },
//   aboutTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   aboutDescription: {
//     fontSize: 16,
//     color: '#555',
//   },
//   cartContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#fff',
//     padding: 15,
//     gap: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 50,
//     borderTopRightRadius: 15,
//     borderTopLeftRadius: 15,
//   },
//   addToCartButton: {
//     flexDirection: 'row',
//     gap: 5,
//     backgroundColor: colors.primary,
//     padding: 15,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   addToCartText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   specContainer: {
//     marginTop: 20,
//   },
//   productStatus: {
//     fontSize: 18,
//     fontWeight: '500',
//   },
// });

// export default ProductDetailScreen;
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import format from "../services/formatVND";
import AntDesign from "@expo/vector-icons/AntDesign";
import Toast, { SuccessToast } from "react-native-toast-message";
import Toaster from "../components/ui/Toaster";
import SpecificationsTable from "../components/products/SpecificationsTable";
import Warranty from "../components/products/Warranty";
import SimilarProducts from "../components/products/SimilarProducts";
import { getProductById } from "../api/products/productsAPI";
import { useRoute } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import LoadingScreen from "./LoadingScreen";

const toastConfig = {
  success: (props) => (
    <SuccessToast
      {...props}
      text1Style={{
        fontSize: 25,
        fontWeight: "700",
      }}
      text2Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
  successToast: ({ text1, props }) => <Toaster title={text1} type="success" />,
};

const ProductDetailScreen = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const route = useRoute();
  const scrollViewRef = useRef();

  // Dữ liệu sản phẩm giả lập
  const dummyProduct = {
    name: "Laptop Dell XPS 13",
    imageUrl: "https://via.placeholder.com/400",
    price: 22000000,
    saleOff: 10,
    status: "Mới",
    description: "Laptop Dell XPS 13 với cấu hình mạnh mẽ",
    brand: "Dell",
  };

  const dummySimilarProducts = [
    {
      id: 1,
      name: "Laptop Dell XPS 15",
      imageUrl: "https://via.placeholder.com/400",
      price: 25000000,
    },
    {
      id: 2,
      name: "Laptop Dell Inspiron 15",
      imageUrl: "https://via.placeholder.com/400",
      price: 15000000,
    },
    {
      id: 3,
      name: "Laptop HP Spectre x360",
      imageUrl: "https://via.placeholder.com/400",
      price: 20000000,
    },
  ];

  const productId = route.params?.productId || "6620f630caa5cd0b2111dd69";

  useEffect(() => {
    // Thay thế việc gọi API bằng dữ liệu cứng
    setProduct(dummyProduct);
    setSimilarProducts(dummySimilarProducts);
  }, [productId]);

  const navigation = useNavigation();
  const onAddToCartHandler = () => {
    Toast.show({
      type: "successToast",
      text1: "Thêm vào giỏ hàng thành công",
    });
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const handleSimilarProductPress = (id) => {
    navigation.navigate("ProductDetails", { productId: id });
    scrollToTop();
  };

  if (product == null) {
    return <LoadingScreen />;
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
          removeClippedSubviews={true}
          decelerationRate="fast"
        >
          <View style={styles.backButtonContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="left" size={30} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: product.imageUrl,
              }}
              style={styles.productImage}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.productTitle}>{product.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.rating}>
                <AntDesign name="star" size={24} color="#F7BD0D" />
                <AntDesign name="star" size={24} color="#F7BD0D" />
                <AntDesign name="star" size={24} color="#F7BD0D" />
                <AntDesign name="star" size={24} color="#F7BD0D" />
                <AntDesign name="star" size={24} color="#F7BD0D" />
              </Text>
              <Text style={styles.productStatus}>{product.status}</Text>
            </View>

            <View style={styles.priceContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.currentPrice}>
                  {format(
                    product.price - product.price * (product.saleOff / 100)
                  )}
                </Text>
                <Text style={styles.oldPrice}>{format(product.price)}</Text>
              </View>
              <Text style={styles.stockStatus}>Còn hàng</Text>
            </View>
            <View>
              <Warranty />
            </View>
            <View style={styles.specContainer}>
              <SpecificationsTable product={product} />
            </View>
          </View>
          <SimilarProducts
            similarProducts={similarProducts}
            onProductPress={handleSimilarProductPress}
          />
        </ScrollView>
        <View style={styles.cartContainer}>
          <View>
            <Text style={{ fontSize: 15, color: "#222" }}>Giá</Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "700",
                color: colors["primary-700"],
              }}
            >
              {format(product.price - product.price * (product.saleOff / 100))}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={onAddToCartHandler}
          >
            <Feather name="shopping-cart" size={24} color="#fff" />
            <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast config={toastConfig} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backButtonContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    width: "100%",
    marginTop: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    alignSelf: "flex-start",
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: "100%",
    backgroundColor: "#fff",
    height: 350,
    alignItems: "center",
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: 120,
    overflow: "hidden",
  },
  productImage: {
    width: "80%",
    height: 350,
    resizeMode: "contain",
  },
  productTitle: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  priceContainer: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currentPrice: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors["primary-700"],
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 18,
    color: "#888",
    textDecorationLine: "line-through",
  },
  stockStatus: {
    fontSize: 16,
    color: "green",
    marginVertical: 10,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  aboutDescription: {
    fontSize: 16,
    color: "#555",
  },
  cartContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 15,
    gap: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 50,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  addToCartButton: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  specContainer: {
    marginTop: 20,
  },
  productStatus: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ProductDetailScreen;

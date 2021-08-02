import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Container, Header, Icon, Input, Item, Text } from "native-base";
import React, { useCallback, useState } from "react";

import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList"
import SearchedProduct from "./SearchedProduct";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import { useFocusEffect } from '@react-navigation/native'

var { height, width } = Dimensions.get("window");

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect((
    useCallback(
      () => {
        setFocus(false);
        setActive(-1);
        
        // Products
        axios
          .get(`${baseURL}products`)
          .then((res) => {
            setProducts(res.data);
            setProductsFiltered(res.data);
            setProductsCtg(res.data);
            setInitialState(res.data);
            setLoading(false)
          })
          .catch((error) => {
            console.log('Api call error')
          })
    
        // Categories
        axios
          .get(`${baseURL}categories`)
          .then((res) => {
            setCategories(res.data)
          })
          .catch((error) => {
            console.log('Api call error')
          })
    
        return () => {
          setProducts([]);
          setProductsFiltered([]);
          setFocus();
          setCategories([]);
          setActive();
          setInitialState();
        };
      },
      [],
    )
  ))

  // Product Methods
  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  // Categories
  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category._id === ctg),
              setActive(true)
            ),
          ];
    }
  };

  return (
    <>
    {loading == false ? (
      <View>
      <View style={styles.header}>
        <Icon name="ios-search" size={20} />
        <Input
          placeholder="Search"
          onFocus={openList}
          onChangeText={(text) => searchProduct(text)}
        />
        {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
      </View>
      {focus == true ? (
        <SearchedProduct
          navigation={props.navigation}
          productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView>
          <View>
            <Banner />
          </View>
          <View>
            <CategoryFilter
              categories={categories}
              categoryFilter={changeCtg}
              productsCtg={productsCtg}
              active={active}
              setActive={setActive}
            />
          </View>
          {productsCtg.length > 0 ? (
            <View style={styles.listContainer}>
              {productsCtg.map((item) => {
                return (
                  <ProductList
                    navigation={props.navigation}
                    key={item.name}
                    item={item}
                  />
                );
              })}
            </View>
          ) : (
            <View style={[styles.center, { height: height / 2 }]}>
              <Text>No products found</Text>
            </View>
          )}
        </ScrollView>
      )}
    </View>
    ):(
      <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
        <ActivityIndicator size="large" color="red" />
      </Container>
    )}
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "red",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: width - 20,
    height: 40,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#5F9EA0",
    margin: 10,
  },
});

export default ProductContainer;

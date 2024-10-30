import { View, Text, StatusBar, ScrollView, Image, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import {
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline"
import Catergories from '../components/Catergories';
import Recipes from '../components/Recipes';

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([])
  }

  const getCategories = async () =>{
    try{
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      )
      if(response && response.data){
        setCategories(response.data.categories)
        console.log(response.data.categories)
      }
    }
    catch (error) {
      console.log(error.message);
    }

  }

  const getRecipes= async (category = 'Beef') => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if(response && response.data){
        setMeals(response.data.meals)
      }
    }catch (error) {
      console.log(error.message);
    }
  }
  

  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='dark'/>

      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom:50,
        }}
        className='pt-14 space-y-6'
        >

          <View className='mx-4 flex-row justify-between items-center'>
            <AdjustmentsHorizontalIcon size={hp(4)} color={"gray"}/>
            <Image
            source={require('../../assets/Images/profile.webp')}
            style={{
              width: hp(5),
              height: hp(5),
              resizeMode:'cover',
            }}
            className='rounded-full'
            />
          </View>
          {/* headlines */}
          <View className='mx-4 space-y-1 mb-2'>
              <View>
                <Text style={{fontSize: hp(3.5), }}
                className='font-bold text-neutral-800'
                >Fast & Delicious</Text>
              </View>

              <Text style={{fontSize: hp(3.5), }} 
              className='font-extrabold text-neutral-800'
              >
                Food You 
              <Text className='text-[#f64e32]'> Love</Text> </Text>

          </View>


          {/* searchbar */}
          <View className='mx-4 flex-row items-center rounded-xl border border-black p-[6px]'>
            <View className='bg-white rounded-full p-2'>
              <MagnifyingGlassIcon size={hp(2.5)} color={'gray'} strokeWidth={3}/> 
            </View>
            <TextInput placeholder='Search Your Favourite Food'
            placeholderTextColor={'gray'}
            style={{fontSize: hp(1.7),}}
            className='flex-1 text-base mb-1 pl-1 tracking-widest'
            />
          </View>


        {/* catergories */}
        <View>
          {
            categories.length > 0 &&(
              <Catergories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
              />
            )
          }
          
        </View>

        {/* Recipe Meal */}

        <View>
          <Recipes meals={meals} categories={categories}/>
        </View>


        </ScrollView>
      </SafeAreaView>
      
    </View>
  )
}
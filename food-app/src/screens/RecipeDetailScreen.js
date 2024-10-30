import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {CachedImage} from '../../utils/index'
import { useNavigation } from '@react-navigation/native'

export default function RecipeDetailScreen(props) {
    let item = props.route.params;
    const navigation = useNavigation;
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() =>{
      getMealData(item.idMeal);
    });

    const getMealData = async (id) =>{
      try{
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        if(response && response.data){
          setMeal(response.data.meals[0]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const ingredientIndexes = (meal) => {
      if (!meal) return [];
      let indexes = [];

      for (let i = 1; i <= 20; i++ ){
        if (meal["strIngredients" + i]){
          indexes.push(i);
        }
      }
    }

  return (
    <ScrollView
    className="flex-1"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
        paddingBottom:30,
    }}
    >
        <StatusBar style='white'/>

        <View className='flex row justify-center'>
            <CachedImage uri={item.strMealThumb}
            sharedTransitionTag={item.strMeal}
            style={{
                width: wp(100),
                height: hp(45),
            }}
            />
        </View>

      <Text>RecipeDetailScreen</Text>
    </ScrollView>
  )
}
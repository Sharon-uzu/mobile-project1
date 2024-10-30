import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { categoryData } from '../constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Catergories({categories, activeCategory, handleChangeCategory}) {
  return (
    <View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator = {false}
      className="space-x-4"
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      >
        {categoryData.map((category, index)=>{
          let isActive = category.strCategory == activeCategory;
          let activeButtonClass = isActive ? "bg-[#f64e32]" : "bg-black/10";

          return(
            <TouchableOpacity
            key={index}
            onPress={() =>handleChangeCategory(category.strCategory)}
            className='flex items-center space-y-1'
            >

              <View className={'rounded-xl p-[6px] ' + activeButtonClass}>
                <Image
                source={{
                  uri: category.strCategoryThumb,
                }}
                style={{
                  width: hp(7),
                  height: hp(7),

                }}
                className="rounded-full"
                />
                
              </View>

              <Text className='text-neutral-800'
                style={{
                  fontSize: hp(1.6),
                  textAlign: 'center'
                }}
                >{category.strCategory}</Text>
            
              
            </TouchableOpacity>
          )
        })}

      </ScrollView>
      
    </View>
  )
}